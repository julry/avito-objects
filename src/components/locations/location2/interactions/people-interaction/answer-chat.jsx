import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { Button } from '../../../../shared/button';
import { getPeopleInteractionAnswerMessages } from './utils';

const Wrapper = styled.div`
    padding: var(--screen_padding);
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: min(28px, 7.5vw);
  left: 50%;
  transform: translateX(-50%);
`;

export const AnswerChat = ({ onClose }) => (
    <ModalWrapper>
        <Wrapper>
            <Chat messages={getPeopleInteractionAnswerMessages()} />
        </Wrapper>
        <ButtonStyled type="light" onClick={onClose}>Круто, спасибо!</ButtonStyled>
    </ModalWrapper>
)