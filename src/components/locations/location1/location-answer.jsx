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

const MessageStyled = styled(Message)`
  margin-bottom: min(20px, 5.3vw);
`;

export const LocationAnswer = ({ chosenAnswer }) => {
    const messages = getQuestionMessages(chosenAnswer);
    const chatMessages = messages.slice(1);

    return (
        <Wrapper>
            <MessageStyled
                text={messages[0].text}
                color={messages[0].color}
                title={messages[0].sender}
                avatar={messages[0].avatar}
            />
            <Chat messages={chatMessages}/>
        </Wrapper>
    );
};
