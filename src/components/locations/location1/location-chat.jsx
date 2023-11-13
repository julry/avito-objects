import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import buddy from "../../../assets/images/buddyFull.svg";
import { ButtonCentered } from "../../shared/button";
import { ModalWrapper } from "../../shared/modal-wrapper";
import { Chat } from "../../shared/chat";
import { useProgress } from "../../../hooks/useProgress";
import { LocationQuestion } from "./location-question";
import { LocationAnswer } from "./location-answer";
import { getMessages } from "./utils";

const ModalWrapperStyled = styled(ModalWrapper)`
  padding: var(--screen_padding) min(16px, 4.2vw);
`;

const ChatStyled = styled(Chat)`
  margin: 0 auto var(--screen_padding);
`;

const Buddy = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 58.93vw;
  max-height: 33vh;
  width: 52.26vw;
  max-width: 29.3vh;
  background: url(${buddy}) no-repeat;
  background-size: contain;
`;

export const LocationChat = ({ name, onStart }) => {
  const { sex } = useProgress();
  const [part, setPart] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(null);

  const buttonTitle = useMemo(
    () => ({
      0: "Далее",
      1: "Задать",
      2: "Спасибо, увидимся!",
    }),
    []
  );

  const partComponent = useMemo(
    () => ({
      0: () => <ChatStyled messages={getMessages(name, sex)} />,
      1: () => (
        <LocationQuestion
          chosenAnswer={questionNumber}
          onChooseAnswer={(q) => setQuestionNumber(q)}
          sex={sex}
        />
      ),
      2: () => <LocationAnswer chosenAnswer={questionNumber} sex={sex} />,
    }),
    [questionNumber, setQuestionNumber, name, sex]
  );

  useEffect(() => {
    if (part > 2) onStart?.();
  }, [part, onStart]);

  return (
    <ModalWrapperStyled>
      {partComponent[part]?.()}
      <ButtonCentered
        type="light"
        disabled={part === 1 && !questionNumber}
        onClick={() => setPart((prev) => prev + 1)}
      >
        {buttonTitle[part]}
      </ButtonCentered>
      {part < 2 && <Buddy />}
    </ModalWrapperStyled>
  );
};
