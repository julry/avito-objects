import styled from "styled-components";
import { TextSm } from "../../../../shared/texts";
import { message } from "../../../../shared/keyframes";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: var(--screen_padding);
  }

  & svg {
    width: min(125px, 33.3vw);
    height: min(125px, 33.3vw);
    min-width: 40px;
    min-height: 40px;

    @media screen and (min-height: 700px) {
      width: min(140px, 37.3vw);
      height: min(140px, 37.3vw);
    }

    @media screen and (min-width: 640px) and (max-height: 650px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const AnimatedWrapper = styled(Wrapper)`
  transform-origin: 0 100%;
  transform: scale(0);
  animation: ${message} 150ms forwards ease-out;
  animation-delay: ${({ $delay }) => $delay}ms;
`;

const Avatar = styled.div`
  width: min(36px, 9.6vw);
  height: min(36px, 9.6vw);
  min-width: 25px;
  min-height: 25px;
  background: url(${({ $avatar }) => $avatar}) no-repeat center center;
  background-size: cover;
  margin-right: min(16px, 4vw);
  flex-shrink: 0;
`;

const MessageHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const MessageSender = styled(TextSm)`
  line-height: 100%;
  color: ${({ $color, $isMain }) =>
    $isMain ? "var(--main_" + $color + ")" : $color};

  & + & {
    margin-left: min(12px, 3vw);
  }
`;

export const ChatMessage = ({
  sender,
  time,
  text,
  color,
  delay,
  isAnimated,
  avatar,
}) => {
  const Component = isAnimated ? AnimatedWrapper : Wrapper;

  return (
    <Component $delay={delay}>
      <Avatar $avatar={avatar} />
      <div>
        <MessageHeader>
          <MessageSender $color={color} $isMain>
            {sender}
          </MessageSender>
          <MessageSender $color={"#E2E2E2"}>{time}</MessageSender>
        </MessageHeader>
        <TextSm>{typeof text === "function" ? text?.() : text}</TextSm>
      </div>
    </Component>
  );
};
