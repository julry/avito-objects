import styled from 'styled-components';
import { ModalWrapper } from '../../../shared/modal-wrapper';
import { FlexWrapper } from '../../../shared/flex-wrapper';
import { Chat } from '../../../shared/chat';
import { Button } from '../../../shared/button';
import { getPersonMessages } from '../utils';

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  width: 100%;
  padding: var(--screen_padding);
  justify-content: flex-end;
  margin-bottom: min(28px, 7.5vw);
`;

const ButtonStyled = styled(Button)`
  margin: min(28px, 7.5vw) auto 0;
`;

export const PersonInteraction = ({ onClose }) => (
    <ModalWrapper>
        <Wrapper>
            <Chat messages={getPersonMessages()} />
            <ButtonStyled type="light" onClick={onClose}>Вернуться к работе</ButtonStyled>
        </Wrapper>
    </ModalWrapper>
)
