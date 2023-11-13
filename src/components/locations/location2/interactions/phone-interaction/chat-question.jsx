import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../../hooks/useProgress';
import { QuestionTitle } from '../../../../shared/question-title';
import { TextSm } from '../../../../shared/texts';
import { ChatWrapper } from './chat-wrapper';
import { getNextMessages, getStartMessages } from './messages';
import { ChatMessage } from './chat-message';

const Wrapper = styled.div`
  padding: min(15px, 4vw);
`;

const QuestionTitleStyled = styled(QuestionTitle)`
  margin-top: var(--screen_padding);
`;

const MessagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Message = styled.div`
  display: flex;
  min-width: 133px;
  padding: min(10px, 2.6vw) min(12px, 3.2vw);
  box-shadow: ${({$isActive}) => $isActive ? '0 0 0 3px var(--main_blue)' : '0px 0px 20px 0px rgba(0, 0, 0, 0.05)'};
  border-radius: 10px;
  cursor: pointer;
  
  & + & {
    margin-left: var(--screen_padding);
  }
  
  & p:first-child {
    color: var(--main_blue);
    margin-right: 14px;
  }
  
  @media screen and (max-height: 650px) {
    padding: min(8px, 2.1vw) min(12px, 3.2vw);
  }
`;

export const ChatQuestion = () => {
    const { next, sex } = useProgress();
    const [answer, setAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const messages = useMemo(() => (
        isAnswered ? getNextMessages(answer, sex) : getStartMessages()
    ), [isAnswered, answer, sex]);

    const handleClick = () => {
        if (isAnswered) next();
        else setIsAnswered(true);
    };

    return (
        <ChatWrapper
            btnText={isAnswered? 'Искать удобное место' : 'Отправить'}
            onClick={handleClick}
            btnDisabled={!answer}
        >
            <Wrapper>
                {messages.map((message) => (
                    <ChatMessage
                        isAnimated={isAnswered}
                        key={message.id}
                        {...message}
                    />
                ))}
                {!isAnswered && (
                    <>
                        <QuestionTitleStyled>Выбери сообщение</QuestionTitleStyled>
                        <MessagesWrapper>
                            <Message $isActive={answer === 1} onClick={() => setAnswer(1)}>
                                <TextSm>1</TextSm>
                                <TextSm>Привет!</TextSm>
                            </Message>
                            <Message $isActive={answer === 2} onClick={() => setAnswer(2)}>
                                <TextSm>2</TextSm>
                                <TextSm>Всем салют))</TextSm>
                            </Message>
                        </MessagesWrapper>
                    </>
                )}
            </Wrapper>
        </ChatWrapper>
    );
};
