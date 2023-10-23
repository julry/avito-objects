import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { PopUp } from '../../../../shared/pop-up';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { TextMd } from '../../../../shared/texts';
import { Button } from '../../../../shared/button';
import { Cup } from './cup';

const Wrapper = styled(FlexWrapper)`
  width: 100%;
  height: 100%;
  padding: var(--screen_padding);
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
`;

const ButtonStyled = styled(Button)`
  margin: var(--screen_padding) auto 0;
`;

const CupStyled = styled(Cup)`
  position: absolute;
  z-index: 1;
  inset: 0;
`;

export const CupInteraction = ({onClose}) => (
    <ModalWrapper>
        <Wrapper>
            <PopUp title={'Взбодриться не помешает!'}>
                <TextMd>
                    Кстати, слово «кофеин» вошло в{'\u00A0'}словарь только
                    в{'\u00A0'}1819{'\u00A0'}году.{'\n'}Как люди вообще жили без{'\u00A0'}кофе?
                </TextMd>
            </PopUp>
            <ButtonStyled type={'light'} onClick={onClose}>Пили чай!</ButtonStyled>
        </Wrapper>
        <CupStyled/>
    </ModalWrapper>
);
