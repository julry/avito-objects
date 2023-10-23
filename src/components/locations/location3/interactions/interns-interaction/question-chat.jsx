import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../../hooks/useProgress';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { QuestionTitle } from '../../../../shared/question-title';
import { scaleStaticAppear } from '../../../../shared/keyframes';
import { ANIMATION_DURATION, SEX_TYPES } from '../../../../../constants';
import { MessageWrapper } from '../../../../shared/message-wrapper';
import { BottomAbsoluteButton } from '../../../../shared/button';
import { TextSm } from '../../../../shared/texts';
import { getAnswerMessages, getPeopleInteractionMessages } from './utils';

const Wrapper = styled(FlexWrapper)`
  align-items: center;
  padding: calc(0.8 * var(--screen_padding)) var(--screen_padding);
`;

const QuestionBlock = styled.div`
  animation: ${scaleStaticAppear} ${ANIMATION_DURATION}ms both ease-in-out;
  animation-delay: 2s;
  margin: min(16px, 4vw) 0 var(--screen_padding);
`;

const QuestionTitleStyled = styled(QuestionTitle)`
  margin-bottom: min(12px, 3vw);
`;

const Answers = styled(FlexWrapper)`
  width: 100%;
  align-items: stretch;
`;

const AnswerText = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Answer = styled(MessageWrapper)`
  width: 100%;
  padding: min(7px, 1.8vw) min(12px, 3.2vw) !important;
  box-shadow: ${({$isActive}) => $isActive ? 'inset 0 0 0 3px var(--main_blue)' : ''};
  
  & + & {
    margin-top: min(8px, 2vw);
  }
`;

const Number = styled(TextSm)`
  color: var(--main_blue);
  margin-right: min(14px, 3.7vw);
`;

export const QuestionChat = ({ onClose }) => {
    const { sex } = useProgress();
    const [question, setQuestion] = useState(null);
    const [chosenQuestion, setChosenQuestion] = useState(null);

    const messages = useMemo(() => (
        getPeopleInteractionMessages().map((mess, i) => ({
            ...mess,
            marginTop: i !== 0 ? 'min(10px, 2.1vw)' : 0,
            isSmallPadding: true,
        }))
    ), []);
    const answerMessages = useMemo(() => (
        getAnswerMessages(chosenQuestion, sex).map(mess => ({
            ...mess,
            marginTop: 'min(10px, 2.1vw)',
            isSmallPadding: true,
        }))
    ), [chosenQuestion, sex]);

    const handleClick = () => {
        if (chosenQuestion) onClose();
        else setChosenQuestion(question);
    };

    return (
        <ModalWrapper>
            <Wrapper>
                <Chat messages={messages} />
                {chosenQuestion ? (
                    <Chat messages={answerMessages} />
                ) : (
                    <QuestionBlock>
                        <QuestionTitleStyled>Выбери свой вопрос</QuestionTitleStyled>
                        <Answers>
                            <Answer
                                onClick={() => setQuestion('1')}
                                $isActive={question === '1'}
                                type={'main'}
                                text={() => (
                                    <AnswerText>
                                        <Number>1</Number>
                                        <TextSm>
                                            Я сегодня начал{sex === SEX_TYPES.female ? 'а' : ''} работать
                                            с{'\u00A0'}«Дивными диванами». Пока думаю, что им предложить
                                        </TextSm>
                                    </AnswerText>
                                )}
                            />
                            <Answer
                                onClick={() => setQuestion('2')}
                                $isActive={question === '2'}
                                type={'main'}
                                text={() => (
                                    <AnswerText>
                                        <Number>2</Number>
                                        <TextSm>
                                            Я сегодня начал{sex === SEX_TYPES.female ? 'а' : ''} работать
                                            с{'\u00A0'}«Дивными диванами». Может, кто-то с ними уже работал?
                                        </TextSm>
                                    </AnswerText>
                                )}
                            />
                        </Answers>
                    </QuestionBlock>
                )}
                <BottomAbsoluteButton
                    type={'light'}
                    onClick={handleClick}
                >
                    {chosenQuestion ? 'Спасибо' : 'Ответить'}
                </BottomAbsoluteButton>
            </Wrapper>
        </ModalWrapper>
    );
};