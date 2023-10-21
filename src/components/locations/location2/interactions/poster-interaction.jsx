import { useState } from 'react';
import styled from 'styled-components';
import poster from '../../../../assets/images/poster.svg';
import { ModalWrapper } from '../../../shared/modal-wrapper';
import { PopUp } from '../../../shared/pop-up';
import { FlexWrapper } from '../../../shared/flex-wrapper';
import { TextMd, TextSm, TextXs } from '../../../shared/texts';
import { QuestionTitle } from '../../../shared/question-title';
import { Button } from '../../../shared/button';

const Wrapper = styled(FlexWrapper)`
  width: 100%;
  height: 100%;
  padding: var(--screen_padding);
  align-items: center;
`;

const PopupStyled = styled(PopUp)`
    width: 100%;
`;

const QuestionTitleStyled = styled(QuestionTitle)`
  margin-top: min(26px, 7.6vw);
`;

const Poster = styled.div`
  margin-top: var(--screen_padding);
  width: min(157px, 41.8vw);
  height: min(211px, 56.26vw);
  background: url(${poster}) no-repeat center center;
  background-size: cover;
`;

const Answer = styled.div`
  --offset: min(12px, 3.2vw);
  display: flex;
  width: 100%;
  padding: min(7px, 1.8vw) var(--offset);
  padding-right: 0;
  align-items: baseline;
  border-radius: 10px;
  background: white;
  box-shadow: inset 0 0 0 3px var(--main_${({$isActive, $isAnswered, $isCorrect}) => (
      $isActive ? $isAnswered ? ($isCorrect ? 'green' : 'red') : 'blue' : ''
  )});
  
  & ${TextSm} {
    flex-shrink: 0;
  }
  
  & + & {
    margin-top: var(--offset);
  }
  
  &:last-of-type {
    margin-bottom: min(28px, 7.5vw);
  }
`;

const Number = styled(TextSm)`
  color: var(--main_blue);
  margin-right: min(14px, 3.7vw);
`;

const AdditionalText = styled(TextXs)`
  margin-left: min(14px, 3.7vw);
  color: var(--main_${({$isError}) => $isError ? 'red' : 'green'});
`;

export const PosterInteraction = ({onClose}) => {
    const [answer, setAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleClick = () => {
        if (isAnswered) {
            onClose();
            return;
        }

        setIsAnswered(true);
    }
    const handleChoose = (id) => {
        if (isAnswered) return;
        setAnswer(id);
    }

    return (
        <ModalWrapper>
            <Wrapper>
                <PopupStyled title={'Здесь ты у руля!'}>
                    <TextMd>
                        Вспомнишь, кто это тебе говорил?
                    </TextMd>
                    <Poster/>
                </PopupStyled>
                <QuestionTitleStyled>Выбери ответ</QuestionTitleStyled>
                <Answer
                    $isActive={answer === 1}
                    onClick={() => handleChoose(1)}
                    $isAnswered={isAnswered}
                    $isCorrect
                >
                    <Number>1</Number>
                    <TextSm>Наставник</TextSm>
                    {isAnswered && answer === 1 && (<AdditionalText>Абсолютно верно!</AdditionalText>)}
                </Answer>
                <Answer
                    $isActive={answer === 2}
                    onClick={() => handleChoose(2)}
                    $isAnswered={isAnswered}
                >
                    <Number>2</Number>
                    <TextSm>Максим</TextSm>
                    {isAnswered && answer === 2 && (
                        <AdditionalText $isError>
                            Почти! Так любит говорить твой{'\u00A0'}наставник
                        </AdditionalText>
                    )}
                </Answer>
                <Answer
                    $isActive={answer === 3}
                    onClick={() => handleChoose(3)}
                    $isAnswered={isAnswered}
                >
                    <Number>3</Number>
                    <TextSm>Один из стажеров</TextSm>
                    {isAnswered && answer === 3 && (
                        <AdditionalText $isError>
                            Почти! Так любит говорить твой{'\u00A0'}наставник
                        </AdditionalText>
                    )}
                </Answer>
                <Button type={'light'} onClick={handleClick}>
                    {!isAnswered ? 'Выбрать' : answer === 1 ? 'Супер' : 'Теперь понятно'}
                </Button>
            </Wrapper>
        </ModalWrapper>
    );
};
