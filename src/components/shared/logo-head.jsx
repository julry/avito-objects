import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const LogoHead = styled.div`
  width: min(23.4vw, 88px);
  height: min(6.666vw, 25px);
  background: url(${logo}) no-repeat center center;
  background-size: cover;
  margin: 0 ${({$centered}) => $centered ? 'auto' : 0};
`;
