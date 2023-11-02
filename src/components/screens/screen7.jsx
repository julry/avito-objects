import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import bg from '../../assets/images/questionBg.svg';
import { LogoHead } from '../shared/logo-head';
import { TextDivider, TextMd, TextSm, UnderlinedText } from '../shared/texts';
import { Button } from '../shared/button';
import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';

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
  background: url(${bg}) no-repeat;
  background-size: cover;
`;

const Answer = styled.div`
  transition: box-shadow 0.3s ease-in-out;
  background: white;
  box-shadow: ${({$isActive}) => $isActive ? 'inset 0 0 0 3px var(--main_blue)' : ''};
  padding: 20px 16px; 
  border-radius: 12px;
  height: 100%;
`;

const Title = styled(TextSm)`
  color: var(--main_blue);
  margin-bottom: 1em;
`;

const SliderStyled = styled(Swiper)`
  & .swiper-wrapper {
    align-items: stretch;
  }

  & .swiper-slide {
    height: auto;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: min(34px, 9.06vw);
  display: flex;
  justify-content: center;
`;

export const Screen7 = () => {
    const { next, updateProgress } = useProgress();
    const [chosenAnswer, setChosenAnswer] = useState(0);

    const handleNext = () => {
        if (chosenAnswer === 0) updateProgress({isFinalCorrect: true});
        next();
    };

    return (
        <>
            <Wrapper>
                <LogoHead $centered/>
                <TextWrapper>
                    <TextMd>
                        Итак, твоей задачей было предложить решение, которое поможет компании
                        «Дивные диваны» <UnderlinedText color="blue">увеличить количество продаж их основного товара</UnderlinedText>
                         — диванов.
                        <TextDivider />
                        Что выберешь?
                    </TextMd>
                </TextWrapper>
                <SliderStyled
                    centeredSlides
                    grabCursor
                    mousewheel
                    spaceBetween={20}
                    slidesPerView={1.3}
                    onSlideChange={(s) => setChosenAnswer(s.activeIndex)}
                >
                    <SwiperSlide>
                        {({ isActive }) => (
                            <Answer $isActive={isActive}>
                                <Title>a</Title>
                                <TextMd>
                                    Нужно предложить «Дивным диванам» оформить максимальный тариф.
                                    Тогда они смогут выделить свой бренд на фоне конкурентов за счет
                                    оформления магазина и скрытия предложений других компаний из блока рекомендаций
                                </TextMd>
                            </Answer>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <Answer $isActive={isActive}>
                                <Title>б</Title>
                                <TextMd>
                                    Я предложу «Дивным диванам» поставить все товары по скидке.
                                    Тогда они будут дешевле, чем товары конкурентов, а соответственно —
                                    будут лучше продаваться в такой сезон
                                </TextMd>
                            </Answer>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <Answer $isActive={isActive}>
                                <Title>в</Title>
                                <TextMd>
                                    Я думаю, «Дивным диванам» нужно оформить базовый тариф.
                                    Тогда они получат доступ к расширенной статистике и будут знать, 
                                    на что обращают внимание клиенты
                                </TextMd>
                            </Answer>
                        )}
                    </SwiperSlide>
                </SliderStyled>
                <ButtonWrapper>
                    <Button type="dark" onClick={handleNext}>Сделать выбор</Button>
                </ButtonWrapper>
            </Wrapper>
            <Background />
        </>
    );
};
