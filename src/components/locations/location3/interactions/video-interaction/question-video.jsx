import styled from 'styled-components';
import { useState } from 'react';
import { PopUp } from '../../../../shared/pop-up';
import { TextDivider, TextSm } from '../../../../shared/texts';
import { QuestionTitle } from '../../../../shared/question-title';
import { MessageWrapper } from '../../../../shared/message-wrapper';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { Button } from '../../../../shared/button';

const PopupStyled = styled(PopUp)`
  width: 100%;
  text-align: center;
  padding: var(--screen_padding);
`;

const QuestionTitleStyled = styled(QuestionTitle)`
  margin: calc(0.85 * var(--screen_padding)) auto min(14px, 3.2vw);
`;

const AnswersWrapper = styled(FlexWrapper)`
  align-items: stretch;
  margin-bottom: var(--screen_padding);
`;

const AnswerText = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Answer = styled(MessageWrapper)`
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

export const QuestionVideo = ({ onNext }) => {
    const [questions, setQuestions] = useState([]);

    const handlePickAnswer = (id) => {
        if (questions.includes(id)) setQuestions(prev => prev.filter(q => q !== id))
        else setQuestions(prev => [...prev, id]);
    };

    const handleClick = () => {
        onNext(questions.sort());
    };

    return (
        <>
            <PopupStyled title="30 minutes later">
                <TextSm>
                    Мастер-класс уже прошел, причем очень{'\u00A0'}продуктивно!
                    <TextDivider />
                    Можно задавать вопросы, но{'\u00A0'}времени хватит только на два — нужно выбирать с{'\u00A0'}умом.
                </TextSm>
            </PopupStyled>
            <QuestionTitleStyled>Выбери два вопроса</QuestionTitleStyled>
            <AnswersWrapper>
                <Answer
                    type="main"
                    $isActive={questions.includes(1)}
                    onClick={() => handlePickAnswer(1)}
                    text={() => (
                        <AnswerText>
                            <Number>1</Number>
                            <TextSm>А зачем нужно оформлять профиль?</TextSm>
                        </AnswerText>
                    )}
                />
                <Answer
                    type="main"
                    $isActive={questions.includes(2)}
                    onClick={() => handlePickAnswer(2)}
                    text={() => (
                        <AnswerText>
                            <Number>2</Number>
                            <TextSm>Но что делать, если у клиента много конкурентов?</TextSm>
                        </AnswerText>
                    )}
                />
                <Answer
                    type="main"
                    $isActive={questions.includes(3)}
                    onClick={() => handlePickAnswer(3)}
                    text={() => (
                        <AnswerText>
                            <Number>3</Number>
                            <TextSm>А что делать с диванами?</TextSm>
                        </AnswerText>
                    )}
                />
            </AnswersWrapper>
            <Button type="light" onClick={handleClick} disabled={questions.length !== 2}>Выбрать</Button>
        </>
    );
};
