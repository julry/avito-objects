import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { BottomAbsoluteButton } from '../../../../shared/button';
import { getPeopleInteractionAnswerMessages } from './utils';

const Wrapper = styled.div`
    padding: var(--screen_padding);
`;

export const AnswerChat = ({ onClose }) => (
    <ModalWrapper>
        <Wrapper>
            <Chat messages={getPeopleInteractionAnswerMessages()} />
        </Wrapper>
        <BottomAbsoluteButton type="light" onClick={onClose}>Круто, спасибо!</BottomAbsoluteButton>
    </ModalWrapper>
)