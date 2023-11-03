import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../../hooks/useProgress';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { QuestionTitle } from '../../../../shared/question-title';
import { scaleStaticAppear } from '../../../../shared/keyframes';
import { ANIMATION_DURATION, SEX_TYPES } from '../../../../../constants';
import { BottomAbsoluteButton } from '../../../../shared/button';
import { Answers } from '../../../../shared/answers';
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
                        <Answers answers={[
                            {
                                id: '1',
                                onClick: () => setQuestion("1"),
                                isActive: question === "1",
                                text: `Я сегодня начал${sex === SEX_TYPES.female ? "а" : ""} ` + 
                                        'работать с «Дивными диванами». Пока думаю, что им предложить',
                            }, 
                            {
                                id: '2',
                                onClick: () => setQuestion("2"),
                                isActive: question === "2",
                                text: `Я сегодня начал${sex === SEX_TYPES.female ? "а" : ""} ` + 
                                'работать с «Дивными диванами». Может, кто-то с ними уже работал?',
                            }
                        ]}/>
                    </QuestionBlock>
                )}
                <BottomAbsoluteButton
                    type={'light'}
                    disabled={!question}
                    onClick={handleClick}
                >
                    {chosenQuestion ? 'Спасибо!' : 'Ответить'}
                </BottomAbsoluteButton>
            </Wrapper>
        </ModalWrapper>
    );
};
