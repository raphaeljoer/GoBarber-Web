import React, { useRef, useCallback } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface ResetPasswordFormData {
  password_confirmation: string;
  password: string;
}

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const query = useQuery();

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),

          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), 'null'],
            'Confirme a senha corretamente.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false, // force return all errors
        });

        const { password, password_confirmation } = data;

        const token = query.get('token');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        history.push('/signin');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar a sua senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        });
      }
    },
    [addToast, history, query],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Resetar senha</h1>

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmação da senha"
          />
          <Button type="submit">Alterar senha</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
