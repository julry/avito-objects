import styled from 'styled-components';
import startBg from '../../assets/images/start-bg.svg';
import { useProgress } from '../../hooks/useProgress';
import { FlexWrapper } from '../shared/flex-wrapper';
import { LogoHead } from '../shared/logo-head';
import { HighlightedText, TextDivider, TextMd, UnderlinedText } from '../shared/texts';
import { Button } from '../shared/button';

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
  height: 82.4vw;
  max-height: 48vh;
  z-index: 0;
  background: url(${startBg}) no-repeat center 0;
  background-size: cover;
  
  @media screen and (min-width: 640px) {
    max-height: calc(48vh - 50px);
  }
`;

export const Screen1 = () => {
    const { next } = useProgress();

    return (
        <>
            <Wrapper>
                <LogoHead />
                <TextWrapper>
                    <TextMd>
                        <b>Добро пожаловать!</b>
                        <TextDivider />
                        Сегодня тебе предстоит почувствовать себя сотрудником отдела продаж и{'\u00A0'}погрузиться во{'\u00A0'}
                        внутреннюю кухню Авито. Приготовься — тебе нужно будет выполнить важное задание и{'\u00A0'}
                        помочь клиенту <UnderlinedText color={'blue'}>повысить прибыль</UnderlinedText>. Подключай свои навыки ведения переговоров,
                        задавай правильные вопросы и{'\u00A0'}развивай бизнес!
                        <TextDivider />
                        Чтобы решить задачу, <HighlightedText color={'blue'}>ищи зацепки.</HighlightedText>
                        {'\n'}
                        Ценная информация <UnderlinedText color={'blue'}>прячется{'\u00A0'}в{'\u00A0'}мелочах</UnderlinedText>.
                        <TextDivider />
                        Удачи, друллега!
                    </TextMd>
                </TextWrapper>
                <Button type={'dark'} onClick={next}>Исследовать</Button>
            </Wrapper>
            <Image />
        </>
    );
};
