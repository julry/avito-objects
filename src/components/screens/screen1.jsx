import styled from "styled-components";
import startBg from "../../assets/images/start-bg.svg";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { useProgress } from "../../hooks/useProgress";
import { FlexWrapper } from "../shared/flex-wrapper";
import { LogoHead } from "../shared/logo-head";
import {
  HighlightedText,
  TextDivider,
  TextMd,
  UnderlinedText,
} from "../shared/texts";
import { Button } from "../shared/button";

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  padding: var(--screen_padding);
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 320px) {
    padding: 10px;
  }
`;

const TextWrapper = styled.div`
  margin: min(28px, 7.4vw) 0;
  width: 100%;
`;

const Image = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 68.5vw;
  max-height: 40vh;
  z-index: 0;
  background: url(${startBg}) no-repeat center 0;
  background-size: cover;

  @media screen and (min-width: 640px) {
    max-height: calc(48vh - 50px);
  }
`;

export const Screen1 = () => {
  const { next } = useProgress();

  const handleNext = () => {
    reachMetrikaGoal("start");
    next();
  };

  return (
    <>
      <Wrapper>
        <LogoHead />
        <TextWrapper>
          <TextMd>
            <b>Добро пожаловать!</b>
            <TextDivider />
            Сегодня тебе предстоит почувствовать себя сотрудником Авито и
            {"\u00A0"}погрузиться в{"\u00A0"}работу отдела продаж. Приготовься —
            тебе нужно будет выполнить важное задание и{"\u00A0"}придумать, как
            сделать товары одного из{"\u00A0"}наших клиентов{" "}
            <UnderlinedText color={"blue"}>более популярными.</UnderlinedText>{" "}
            Подключай свои навыки ведения переговоров, задавай правильные вопросы{" "}
            и{"\u00A0"}развивай бизнес.
            <TextDivider />
            Чтобы решить задачу,{" "}
            <HighlightedText color={"blue"}>ищи зацепки.</HighlightedText>
            {"\n"}
            Ценная информация{" "}
            <UnderlinedText color={"blue"}>
              прячется{"\u00A0"}в{"\u00A0"}мелочах.
            </UnderlinedText>
            <TextDivider />
            {'Удачи, друг :)'}
          </TextMd>
        </TextWrapper>
        <Button type={"dark"} onClick={handleNext}>
          Исследовать
        </Button>
      </Wrapper>
      <Image />
    </>
  );
};
