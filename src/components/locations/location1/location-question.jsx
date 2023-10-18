import styled from 'styled-components';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { Message } from '../../shared/Message';
import { Chat } from '../../shared/Chat';
import { getQuestionMessages } from './utils';
import { TextMd } from '../../shared/texts';
import { scaleStaticAppear } from '../../shared/keyframes';
import { ANIMATION_DURATION } from '../../../constants';
import { MessageWrapper } from '../../shared/MessageWrapper';

const Wrapper = styled(FlexWrapper)`
  margin: 0 auto 20px;
`;

const QuestionBlock = styled.div`
  animation: ${scaleStaticAppear} ${ANIMATION_DURATION}ms both ease-in-out;
  animation-delay: 300ms;
  margin: min(33px, 8.8vw) 0 0;
`;

const QuestionTitle = styled(TextMd)`
  padding: 3px 20px 8px;
  border-radius: 20px;
  background: var(--main_blue);
  color: white;
  width: max-content;
  margin: 0 auto min(16px, 4.2vw);
`;

const Answers = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`;

const Answer = styled(MessageWrapper)`
  width: calc((100% - 12px) / 2);
  box-shadow: ${({$isActive}) => $isActive ? '0 0 0 3px var(--main_blue)' : ''};
  padding-right: min(10px, 2.5vw);
  cursor: pointer;
  
  &:first-child {
    margin-right: 12px;
  }
`;

export const LocationQuestion = ({ chosenAnswer, onChooseAnswer }) => (
    <Wrapper>
        <Chat messages={[getQuestionMessages()[0]]}/>
        <QuestionBlock>
            <QuestionTitle>Выбери свой вопрос</QuestionTitle>
            <Answers>
                <Answer
                    onClick={() => onChooseAnswer('1')}
                    $isActive={chosenAnswer === '1'}
                    type={'main'}
                    title={'1'}
                    text={'Я могу обратиться за\u00A0помощью к\u00A0коллегам?'}
                />
                <Answer
                    onClick={() => onChooseAnswer('2')}
                    $isActive={chosenAnswer === '2'}
                    type={'main'}
                    title={'2'}
                    text={'Я буду работать только с\u00A0продавцом диванов или\u00A0у\u00A0меня будут и\u00A0другие клиенты?'}
                />
            </Answers>
        </QuestionBlock>
    </Wrapper>
)
