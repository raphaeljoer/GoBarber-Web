import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: #666360;
  background: #232129;

  border: 2px solid #232129;
  border-radius: 10px;

  padding: 16px;
  width: 100%;

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    color: #f4ede8;
    border: none;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }
`;
