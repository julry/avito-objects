import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { BottomAbsoluteButton } from '../../../../shared/button';
import { getMessages } from './constants';

const Wrapper = styled.div`
    padding: var(--screen_padding);
`;

export const AnswerVideo = ({ questions, onNext }) => {
    return (
        <ModalWrapper>
            <Wrapper>
                <Chat messages={getMessages(...questions)} />
            </Wrapper>
            <BottomAbsoluteButton type="light" onClick={onNext}>Спасибо за мастер-класс!</BottomAbsoluteButton>
        </ModalWrapper>
    )
}