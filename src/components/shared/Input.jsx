import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  background: white;
  border: 3px solid var(--main_purple);
  padding: 12px;
  font-size: 16px;
  border-radius: 12px;
  
  @media screen and (max-height: 700px) {
    font-size: 15px;
  }

  @media screen and (max-height: 600px) {
    font-size: 14px;
  }
`;
