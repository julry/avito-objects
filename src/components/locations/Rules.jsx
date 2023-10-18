import { ModalWrapper } from '../shared/ModalWrapper';
import styled, { keyframes } from 'styled-components';
import { ANIMATION_DURATION } from '../../constants';
import { HighlightedText, TextDivider, TextMd, UnderlinedText } from '../shared/texts';
import { FlexWrapper } from '../shared/FlexWrapper';
import { useState } from 'react';

const Wrapper = styled(ModalWrapper)`
  z-index: 98;
`;

const RulesWrapper = styled(FlexWrapper)`
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${({$isClosing}) => $isClosing ? disappear : appear } ${ANIMATION_DURATION}ms ease-in-out both; 
`;

const appear = keyframes`
  0% {
    bottom: -100vh;
  }

  100% {
    bottom: 0;
  }
`;

const disappear = keyframes`
  0% {
    bottom: 0;
  }

  100% {
    bottom: -100vh;
  }
`;

const CloseRect = styled.div`
  background: white;
  width: 58px;
  height: 6px;
  border-radius: 20px;
  margin: 0 auto 8px;
  cursor: pointer;
`;

const CloseRectWrapper = styled.div`
  padding: 15px 20px 0;
`;

const Content = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 25px 25px 0 0;
  background: white;
  padding: min(33px, 8.8vw) min(20px, 5.3%) min(40px, 10vw);
  width: 89.4%;
`;

export const Rules = ({onClose}) => {
    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(onClose, ANIMATION_DURATION);
    };

    return (
        <Wrapper>
            <RulesWrapper $isClosing={isClosing}>
                <CloseRectWrapper onClick={handleClose} onMouseDown={handleClose} onTouchStart={handleClose}>
                    <CloseRect />
                </CloseRectWrapper>
                <Content>
                    <TextMd>
                        <HighlightedText $isFirstWord color='green'>Счётчик</HighlightedText> сверху показывает,
                        сколько подсказок и{'\u00A0'}взаимодействий тебе осталось пройти во{'\u00A0'}всей{'\u00A0'}игре.
                        <TextDivider/>
                        Видишь{'\u00A0\u00A0'}<HighlightedText $isFirstWord color='purple'>подсвеченные иконки</HighlightedText>?{'\n'}
                        Там могут быть <UnderlinedText color='blue'>подсказки</UnderlinedText>, которые
                        помогут тебе найти решение.
                        <TextDivider/>
                        <UnderlinedText color='blue'>
                            Исследуй локации в{'\u00A0'}офисе, общайся с{'\u00A0'}коллегами и{'\u00A0'}ищи зацепки.
                        </UnderlinedText> Нажимай на{'\u00A0'}подсвеченные предметы, чтобы увидеть,
                            какая информация в{'\u00A0'}них прячется.
                    </TextMd>
                </Content>
            </RulesWrapper>
        </Wrapper>
    );
};
