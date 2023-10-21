import styled from 'styled-components';
import { FlexWrapper } from '../../shared/flex-wrapper';
import { Message } from '../../shared/message';
import { Chat } from '../../shared/chat';
import { getQuestionMessages } from './utils';

const Wrapper = styled(FlexWrapper)`
  margin: 0 auto var(--screen_padding);
`;

const MessageStyled = styled(Message)`
  margin-bottom: var(--screen_padding);
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
