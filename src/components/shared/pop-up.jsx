import styled from "styled-components";
import { ANIMATION_DURATION, POPUP_DELAY } from "../../constants";
import { HighlightedText } from "./texts";
import { scaleAppear, scaleDisappear } from "./keyframes";
import { FlexWrapper } from "./flex-wrapper";

const Wrapper = styled(FlexWrapper)`
  background: white;
  align-items: center;
  padding: 32px 24px;
  border-radius: 12px;
  transform-origin: left;
  font-size: ${({ $isMain }) => ($isMain ? 18 : 16)}px;
  animation: ${({ $isMain }) => ($isMain ? scaleAppear : "")} ${ANIMATION_DURATION}ms ease-in-out, ${({ $isMain }) => ($isMain ? scaleDisappear : "")} ${ANIMATION_DURATION}ms forwards ease-in-out;
  animation-delay: 0ms, ${POPUP_DELAY}ms;

  @media screen and (min-height: 700px) {
    font-size: ${({ $isMain }) => ($isMain ? 20 : 18)}px;
  }

  @media screen and (min-height: 900px) {
    font-size: ${({ $isMain }) => ($isMain ? 24 : 22)}px;
  }

  @media screen and (max-height: 600px) {
    padding: 26px 24px;
    font-size: ${({ $isMain }) => ($isMain ? 16 : 14)}px;
  }

  @media screen and (max-width: 320px) {
    padding: 26px 18px;
    font-size: ${({ $isMain }) => ($isMain ? 16 : 14)}px;
  }
`;

const TitleWrapper = styled.p`
  margin-bottom: min(14px, 3.7vw);
  text-align: center;
  min-width: max-content;
`;

export const PopUp = ({ isMain, title, ...props }) => (
  <Wrapper $isMain={isMain} {...props}>
    {title && (
      <TitleWrapper>
        <HighlightedText color="green">{title}</HighlightedText>
      </TitleWrapper>
    )}
    {props.children}
  </Wrapper>
);
