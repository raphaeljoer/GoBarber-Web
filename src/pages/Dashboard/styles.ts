import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;

  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    align-items: center;

    font-weight: 500;

    margin-top: 8px;
    color: #ff9000;
  }

  span {
    display: flex;
    align-items: center;
  }

  span + span::before {
    content: '';

    width: 1px;
    height: 12px;

    border-left: 1px solid #ff9000;

    margin: 0 8px;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    position: relative;

    display: flex;
    align-items: center;

    margin-top: 24px;
    padding: 16px 24px;

    background: #3e3b47;
    border-radius: 10px;

    &::before {
      content: '';

      position: absolute;

      height: 80%;
      width: 1px;

      left: 0;
      top: 10%;
      border-radius: 2px;

      background: #ff9000;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: auto;
      color: #999591;

      svg {
        margin-right: 8px;
        color: #ff9000;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    font-size: 20px;
    line-height: 26px;
    color: #999591;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;
export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #f4ede8;
    width: 60px;

    svg {
      margin-right: 8px;
      color: #ff9000;
    }
  }

  div {
    display: flex;
    align-items: center;

    flex: 1;

    margin-left: 24px;
    padding: 16px 24px;

    background: #3e3b47;
    border-radius: 10px;
  }

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-left: 24px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 24px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;