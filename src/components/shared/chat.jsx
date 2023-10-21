import styled from 'styled-components';
import { Message } from './message';
import { message } from './keyframes';

const MessageStyled = styled(Message)`
  transform-origin: 0 100%;
  transform: scale(0);
  animation: ${message} 150ms forwards ease-out;
  animation-delay: ${({$delay}) => $delay}ms;
  margin-top: ${({$marginTop}) => $marginTop ? $marginTop + '!important' : ''};
`;

export const Chat = ({messages, ...props}) => {
    return (
        <div {...props}>
            {messages.map(message => (
                <MessageStyled
                    key={message.id}
                    title={message.sender}
                    text={message.text}
                    type={message.type}
                    color={message.color}
                    avatar={message.avatar}
                    $delay={message.delay}
                    $marginTop={message.marginTop}
                />
            ))}
        </div>
    );
};
