import styled from '@emotion/styled';
import {
  secondBgColor,
  secondTextColor,
  mainHoverEfect,
  accentBgColor,
} from 'utilities/variables/css';

export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputSearch = styled.input`
  width: 200px;
  height: 30px;

  padding: 0 10px 0 10px;
  margin-right: 15px;

  border: 1px solid ${secondBgColor};
  outline: none;

  @media (min-width: 768px) {
    width: 800px;
  }
`;

export const ButtonSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;
  margin-bottom: 30px;

  font-size: 15px;
  font-family: inherit;

  background-color: ${secondBgColor};
  color: ${secondTextColor};
  border: none;

  cursor: pointer;
  transition: background-color ${mainHoverEfect}, color ${mainHoverEfect};

  :hover {
    background-color: ${accentBgColor};
    color: ${secondTextColor};
  }

  @media (min-width: 768px) {
    width: 150px;
  }
`;
