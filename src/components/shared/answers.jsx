import styled from "styled-components";
import { FlexWrapper } from "./flex-wrapper";
import { MessageWrapper } from "./message-wrapper";
import { TextSm } from "./texts";

const Wrapper = styled(FlexWrapper)`
  width: 100%;
  align-items: stretch;
`;

const AnswerText = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Answer = styled(MessageWrapper)`
  cursor: pointer;
  width: 100%;
  padding: min(7px, 1.8vw) min(12px, 3.2vw) !important;
  box-shadow: ${({ $isActive }) =>
    $isActive ? "inset 0 0 0 3px var(--main_blue)" : ""};

  & + & {
    margin-top: min(8px, 2vw);
  }
`;

const Number = styled(TextSm)`
  color: var(--main_blue);
  width: 1ex;
  margin-right: min(14px, 3.7vw);
`;

export const Answers = (props) => (
  <Wrapper>
    {props.answers.map((answer) => (
      <Answer
        key={answer.id}
        onClick={answer.onClick}
        $isActive={answer.isActive}
        type={"main"}
        text={() => (
          <AnswerText>
            <Number>{answer.id}</Number>
            <TextSm>{answer.text}</TextSm>
          </AnswerText>
        )}
      />
    ))}
  </Wrapper>
);
