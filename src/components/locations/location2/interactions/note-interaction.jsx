import styled from "styled-components";
import note from "../../../../assets/images/note.svg";
import { ModalWrapper } from "../../../shared/modal-wrapper";
import { BottomAbsoluteButton } from "../../../shared/button";

const NoteStyled = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: url(${note}) no-repeat center 100%;
  background-size: contain;
`;

const ButtonStyled = styled(BottomAbsoluteButton)`
  z-index: 4;
`;

export const NoteInteraction = ({ onClose }) => (
  <ModalWrapper>
    <NoteStyled />
    <ButtonStyled type="light" onClick={onClose}>
      Точно!
    </ButtonStyled>
  </ModalWrapper>
);
