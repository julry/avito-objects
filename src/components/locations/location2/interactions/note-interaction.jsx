import styled from 'styled-components';
import note from '../../../../assets/images/note.svg';
import { ModalWrapper } from '../../../shared/modal-wrapper';
import { Button } from '../../../shared/button';

const NoteStyled = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: url(${note}) no-repeat center center;
  background-size: cover;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: min(28px, 7.5vw);
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
`;

export const NoteInteraction = ({onClose}) => (
    <ModalWrapper>
        <NoteStyled />
        <ButtonStyled type="light" onClick={onClose}>Точно!</ButtonStyled>
    </ModalWrapper>
);
