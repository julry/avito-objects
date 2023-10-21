import styled from 'styled-components';
import { FlexWrapper } from './flex-wrapper';

const Wrapper = styled(FlexWrapper)`
  position: absolute;
  inset: 0;
  background: rgba(53, 53, 53, 0.5);
  z-index: 100;
`;

export const ModalWrapper = (props) => <Wrapper {...props} />

