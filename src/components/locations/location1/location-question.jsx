import styled from 'styled-components';
import { ANIMATION_DURATION } from '../../../constants';
import { FlexWrapper } from '../../shared/flex-wrapper';
import { Chat } from '../../shared/chat';
import { scaleStaticAppear } from '../../shared/keyframes';
import { Answers } from '../../shared/answers';
import { QuestionTitle } from '../../shared/question-title';
import { getQuestionMessages } from './utils';

const Wrapper = styled(FlexWrapper)`
  margin: 0 auto 20px;
`;

const QuestionBlock = styled.div`
  animation: ${scaleStaticAppear} ${ANIMATION_DURATION}ms both ease-in-out;
  animation-delay: 300ms;
  margin: min(33px, 8.8vw) 0 0;
`;

export const LocationQuestion = ({ chosenAnswer, onChooseAnswer }) => (
    <Wrapper>
        <Chat messages={[getQuestionMessages()[0]]}/>
        <QuestionBlock>
            <QuestionTitle>Выбери свой вопрос</QuestionTitle>
            <Answers 
              answers={[
                {
                  id: '1',
                  onClick: () => onChooseAnswer('1'),
                  isActive: chosenAnswer === '1',
                  text: 'Я могу обратиться за\u00A0помощью к\u00A0коллегам?'
                },
                {
                  id: '2',
                  onClick: () => onChooseAnswer('2'),
                  isActive: chosenAnswer === '2',
                  text: 'Я буду работать только с\u00A0продавцом диванов или\u00A0у\u00A0меня будут и\u00A0другие клиенты?'
                },
              ]}
            />
        </QuestionBlock>
    </Wrapper>
);
