import styled from 'styled-components';
import persMale from '../../assets/images/preQuestionMale.svg';
import persFemale from '../../assets/images/preQuestionFemale.svg';
import buddy from '../../assets/images/preQuestionBuddy.svg';
import bg from '../../assets/images/preQuestionBg.svg';
import { useProgress } from '../../hooks/useProgress';
import { LogoHead } from '../shared/logo-head';
import { FlexWrapper } from '../shared/flex-wrapper';
import { HighlightedText, TextMd, UnderlinedText } from '../shared/texts';
import { Button, ButtonNoIcon } from '../shared/button';

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  padding: var(--screen_padding) 18px;
  z-index: 2;
`;

const TextWrapper = styled.div`
  margin-top: min(28px, 7.5vw);
  width: 100%;
`;

const Text = styled(TextMd)`
    margin-top: 10px;
`;

const Background = styled.div`
  --pers_male: url(${persMale});
  --pers_female: url(${persFemale});
  position: absolute;
  inset: 0;
  background: url(${bg}) center center no-repeat;
  background-size: cover;
`;

const Person = styled.div`
  position: absolute;
  bottom: min(167px, 44vw);
  right: 0;
  width: min(257px, 68.5vw);
  height: min(198px, 52.8vw);
  background: var(--pers_${({$sex}) => $sex}) no-repeat;
  background-size: cover;
`;

const Buddy = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: min(314px, 83.7vw);
  height: min(223px, 59.5vw);
  background: url(${buddy}) no-repeat;
  background-size: cover;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: min(9.6vw, 36px);
`;

export const Screen6 = () => {
    const { next, sex, resetToFirstLocation } = useProgress();

    return (
        <>
            <Wrapper>
                <LogoHead $centered/>
                <TextWrapper>
                    <TextMd>
                        <HighlightedText $isFirstWord color="blue">Пора рассказать о своей идее!</HighlightedText>
                    </TextMd>
                    <Text>
                        Ты можешь еще погулять по{'\u00A0'}офису и{'\u00A0'}заглянуть в{'\u00A0'}подсказки.
                        Если уже придумал, <UnderlinedText color="blue"> как помочь «Дивным диванам» повысить продажи,</UnderlinedText>
                        — поделись своими мыслями с бадди
                    </Text>
                </TextWrapper>
                <ButtonsWrapper>
                    <Button type="dark" onClick={next}>Дать ответ</Button>
                    <ButtonNoIcon type="dark" onClick={resetToFirstLocation}>Еще подумать</ButtonNoIcon>
                </ButtonsWrapper>
            </Wrapper>
            <Background>
                <Person $sex={sex} />
                <Buddy />
            </Background>
        </>
    );
};
