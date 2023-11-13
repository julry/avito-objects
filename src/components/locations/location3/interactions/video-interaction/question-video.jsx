import styled from "styled-components";
import { useState } from "react";
import { PopUp } from "../../../../shared/pop-up";
import { TextDivider, TextSm } from "../../../../shared/texts";
import { QuestionTitle } from "../../../../shared/question-title";
import { Button } from "../../../../shared/button";
import { Answers } from "../../../../shared/answers";

const PopupStyled = styled(PopUp)`
  width: 100%;
  text-align: center;
  padding: var(--screen_padding);
`;

const QuestionTitleStyled = styled(QuestionTitle)`
  margin: calc(0.85 * var(--screen_padding)) auto min(14px, 3.2vw);
`;

const ButtonStyled = styled(Button)`
  margin-top: var(--screen_padding);
`;

export const QuestionVideo = ({ onNext }) => {
  const [questions, setQuestions] = useState([]);

  const handlePickAnswer = (id) => {
    if (questions.includes(id))
      setQuestions((prev) => prev.filter((q) => q !== id));
    else setQuestions((prev) => [...prev, id]);
  };

  const handleClick = () => {
    onNext(questions.sort());
  };

  return (
    <>
      <PopupStyled title="30 minutes later">
        <TextSm>
          Мастер-класс уже прошел, причем очень{"\u00A0"}продуктивно!
          <TextDivider />
          Можно задавать вопросы, но{"\u00A0"}времени хватит только на два —
          нужно выбирать с{"\u00A0"}умом.
        </TextSm>
      </PopupStyled>
      <QuestionTitleStyled>Выбери два вопроса</QuestionTitleStyled>
      <Answers
        answers={[
          {
            id: "1",
            onClick: () => handlePickAnswer(1),
            isActive: questions.includes(1),
            text: "А зачем нужно оформлять профиль?",
          },
          {
            id: "2",
            onClick: () => handlePickAnswer(2),
            isActive: questions.includes(2),
            text: "Но что делать, если у клиента много конкурентов?",
          },
          {
            id: "3",
            onClick: () => handlePickAnswer(3),
            isActive: questions.includes(3),
            text: "А что делать с диванами?",
          },
        ]}
      />
      <ButtonStyled
        type="light"
        onClick={handleClick}
        disabled={questions.length !== 2}
      >
        Выбрать
      </ButtonStyled>
    </>
  );
};
