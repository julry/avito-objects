import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { ANIMATION_DURATION, SEX_TYPES } from '../../../../../constants';
import { useProgress } from '../../../../../hooks/useProgress';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Chat } from '../../../../shared/chat';
import { QuestionTitle } from '../../../../shared/question-title';
import { scaleStaticAppear } from '../../../../shared/keyframes';
import { MessageWrapper } from '../../../../shared/message-wrapper';
import { Button } from '../../../../shared/button';
import { getPeopleInteractionMessages } from './utils';

const Wrapper = styled(FlexWrapper)`
  align-items: center;
  padding: var(--screen_padding);
`;

const QuestionBlock = styled.div`
  animation: ${scaleStaticAppear} ${ANIMATION_DURATION}ms both ease-in-out;
  animation-delay: 2s;
  margin: min(16px, 4vw) 0 var(--screen_padding);
`;

const QuestionTitleStyled = styled(QuestionTitle)`
    margin-bottom: min(12px, 3vw);
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

export const QuestionChat = ({ onChooseQuestion }) => {
    const { sex } = useProgress();
    const [question, setQuestion] = useState(null);
    const messages = useMemo(() => getPeopleInteractionMessages(sex), [sex]);

    return (
        <ModalWrapper>
            <Wrapper>
                <Chat messages={messages} />
                <QuestionBlock>
                    <QuestionTitleStyled>Выбери свой вопрос</QuestionTitleStyled>
                    <Answers>
                        <Answer
                            onClick={() => setQuestion('1')}
                            $isActive={question === '1'}
                            type={'main'}
                            title={'1'}
                            text={'Ого! А что за\u00A0категории?'}
                        />
                        <Answer
                            onClick={() => setQuestion('2')}
                            $isActive={question === '2'}
                            type={'main'}
                            title={'2'}
                            text={`Да, я это знал${sex === SEX_TYPES.female ? 'а' : ''}!`}
                        />
                    </Answers>
                </QuestionBlock>
                <Button
                    type={'light'}
                    disabled={!question}
                    onClick={() => onChooseQuestion(question)}
                >
                    Ответить
                </Button>
            </Wrapper>
        </ModalWrapper>
    );
};
