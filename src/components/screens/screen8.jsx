import { useState } from "react";
import styled from "styled-components";
import bg from "../../assets/images/finalBg.svg";
import bgWrong from "../../assets/images/finalBgWrong.svg";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { useProgress } from "../../hooks/useProgress";
import { SEX_TYPES } from "../../constants";
import { Button } from "../shared/button";
import {
  HighlightedText,
  TextDivider,
  TextMd,
  UnderlinedText,
} from "../shared/texts";
import { LogoHead } from "../shared/logo-head";

const Wrapper = styled.div`
  height: 100%;
  padding: var(--screen_padding) 0;
  z-index: 2;
  align-items: center;
`;

const TextWrapper = styled.div`
  padding: min(28px, 7.5vw) min(18px, 4.8vw) min(18px, 4.8vw);
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url(${({ $isCorrect }) => ($isCorrect ? bg : bgWrong)}) no-repeat;
  background-size: cover;
`;

const ButtonWrapper = styled.div`
  margin-top: calc(1.2 * var(--screen_padding));
  display: flex;
  justify-content: center;
`;

export const Screen8 = () => {
  const { progress } = useProgress();
  const [isMetrikaClickedActive, setIsMetrikaClickedActive] = useState(false);
  const handleOpenLink = () => {
    if (!isMetrikaClickedActive) {
      reachMetrikaGoal("respond" + (!progress.isFinalCorrect + 1));
      setIsMetrikaClickedActive(true);
    }
    window.open("https://career.avito.com/vacancies/prodazhi/1091/?utm_source=fut&utm_medium=game", "_blank");
  };

  return (
    <>
      <Wrapper>
        <LogoHead $centered />
        <TextWrapper>
          <TextMd>
            {progress.isFinalCorrect ? (
              <>
                <HighlightedText color="green">Правильно!</HighlightedText>
                {"\u00A0\u00A0"}
                Ты сегодня здорово поработал
                {progress.sex === SEX_TYPES.female ? "а " : " "}и{"\u00A0"}
                отлично справил
                {progress.sex === SEX_TYPES.female ? "ась " : "ся "}с{"\u00A0"}
                задачей.{"\u00A0"}
              </>
            ) : (
              <>
                <HighlightedText color="red" $isFirstWord>
                  Это неверный ответ
                </HighlightedText>
                .{"\n"}
                Лучшее решение — предложить максимальный тариф, чтобы качественно выделить бренд среди конкурентов.
                Но ты все равно отлично сегодня поработал{progress.sex === SEX_TYPES.female ? "а" : ""}!
                <TextDivider />
              </>
            )}
            <UnderlinedText color="blue">Продажи</UnderlinedText> — это
            {"\u00A0"}важная составляющая любого бизнеса, поэтому в{"\u00A0"}
            Авито выстроена программа обучения, а{"\u00A0"}коллеги всегда готовы
            прийти на{"\u00A0"}помощь.
            <TextDivider />
            Прокачай навыки еще больше на {"\n"}
            <HighlightedText color="blue">
              стажировке в{"\u00A0"}отделе продаж
            </HighlightedText>
            {"\u00A0"}Авито!
          </TextMd>
        </TextWrapper>
        <ButtonWrapper>
          <Button type="dark" onClick={handleOpenLink}>
            Откликнуться
          </Button>
        </ButtonWrapper>
      </Wrapper>
      <Background $isCorrect={progress.isFinalCorrect} />
    </>
  );
};
