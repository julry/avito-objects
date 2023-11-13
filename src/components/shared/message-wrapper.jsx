import styled from "styled-components";
import { TextSm } from "./texts";

const Wrapper = styled.div`
  padding: ${({ $isSmallPadding }) => $isSmallPadding ? "min(10px, 2.5vw)" : "min(12px, 3.8vw)"} min(16px, 4.2vw);
  border-radius: 12px 12px ${({ $type }) => ($type === "main" ? "0 12px" : "12px 0")};
  background: white;
`;

const Title = styled(TextSm)`
  color: var(--main_${({ $type, color }) => ($type === "main" ? "blue" : color)});
  margin-bottom: 3px;
`;

export const MessageWrapper = ({
  title,
  text,
  type,
  color,
  isSmallPadding,
  ...props
}) => (
  <Wrapper {...props} $type={type} $isSmallPadding={isSmallPadding}>
    <Title $type={type} color={color}>
      {title}
    </Title>
    {typeof text === "function" ? text() : <TextSm>{text}</TextSm>}
  </Wrapper>
);
