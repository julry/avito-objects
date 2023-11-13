import styled from "styled-components";
import { useProgress } from "../../hooks/useProgress";
import { GameHeader } from "./game-header";
import { Button } from "./button";

const ButtonsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: var(--screen_padding);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  & + & {
    margin-left: min(12px, 3vw);
  }
`;

export const LocationWrapper = ({
  children,
  canPrev,
  canNext,
  isRules,
  isShownHeader = true,
}) => {
  const { isFinished, next, prev } = useProgress();

  return (
    <>
      {isShownHeader && <GameHeader isRules={isRules} />}
      {children}
      {isFinished && (
        <ButtonsWrapper>
          {canPrev && (
            <ButtonStyled type="dark" isReverse onClick={prev}>
              Предыдущий {!canNext && "уровень"}
            </ButtonStyled>
          )}
          {canNext && (
            <ButtonStyled type="dark" onClick={next}>
              Следующий {!canPrev && "уровень"}
            </ButtonStyled>
          )}
        </ButtonsWrapper>
      )}
    </>
  );
};
