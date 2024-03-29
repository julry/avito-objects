import { useState } from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/finalBg.svg';
import { LogoHead } from '../shared/logo-head';
import { HighlightedText, TextDivider, TextMd, UnderlinedText } from '../shared/texts';
import { Button } from '../shared/button';
import { useProgress } from '../../hooks/useProgress';
import { SEX_TYPES } from '../../constants';
import { Input } from '../shared/Input';
import { FlexWrapper } from '../shared/flex-wrapper';

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

const ButtonWrapper = styled.div`
  margin-top: calc(1.2 * var(--screen_padding));
  display: flex;
  justify-content: center;
`;

const Form = styled(FlexWrapper)`
  width: calc(100% - var(--screen_padding) * 2);
  background: white;
  margin: var(--screen_padding) auto 0;
  border-radius: 12px;
  padding: min(5.5vw, 20px) min(16px, 4.2vw);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  margin: var(--screen_padding) 0;
  
  & input {
    width: 100%;
  }
`;

const SendButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--main_purple);
  width: min(48px, 12.8vw);
  min-width: 30px;
  height: min(48px, 12.8vw);
  min-height: 30px;
  margin-left: 8px;
  
  &:disabled {
    opacity: 0.5;
  }
  
  & svg {
    width: 48%;
    height: 37.5%;
  }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  background-color: var(--main_purple);
  border-radius: 3px;
  margin: 3px min(10px, 2.6vw) 0 0;

  @media screen and (min-height: 750px) {
    width: 15px;
    height: 15px;
  }
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 11px;
  font-weight: 300;
  width: 100%;
  text-align: left;
  
  & ${InputRadioButton}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 6.5px;
    display: inline-block;
    width: 2px;
    height: 7px;
    background: white;
    border-radius: 3px;
    transform: rotate(39deg);

    @media screen and (min-height: 750px) {
      left: 7.5px;
      width: 3px;
      height: 8px;
    }
  }

 & ${InputRadioButton}:checked + ${RadioIconStyled}:before {
   content: '';
   position: absolute;
   top: 5.5px;
   left: 4px;
   display: inline-block;
   width: 2px;
   height: 4px;
   background: white;
   border-radius: 3px;
   transform: rotate(-45deg);

   @media screen and (min-height: 750px) {
     width: 3px;
     height: 6px;
   }
 }
`;

const Link = styled.a`
  color: inherit;
`;

const SentData = styled.div`
  display: flex;
  margin: var(--screen_padding) 0;
  align-items: center;
  
  & svg {
    margin-left: 8px;
  }
`;

export const Screen8 = () => {
    const { progress } = useProgress();
    const [isAgreed, setIsAgreed] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [contact, setContact] = useState('');

    const handleSubmit = () => {
        if (isSending) return;
        setIsSend(true);
    };

    return (
        <>
            <Wrapper>
                <LogoHead $centered/>
                <TextWrapper>
                    <TextMd>
                        {progress.isFinalCorrect ? (
                            <>
                                <HighlightedText color="green">Правильно!</HighlightedText>{'\u00A0\u00A0'}
                                Ты сегодня здорово поработал{progress.sex === SEX_TYPES.female ? 'а ' : ' '}
                                и{'\u00A0'}отлично справил{progress.sex === SEX_TYPES.female ? 'ась' : 'ся'} с{'\u00A0'}задачей.{'\u00A0'}
                            </>
                        ) : (
                            <>
                                <HighlightedText color="red">Это неверный ответ</HighlightedText>,{'\u00A0'}
                                но ты все равно отлично сегодня поработал{progress.sex === SEX_TYPES.female ? 'а' : ''}!
                                <TextDivider />
                            </>
                        )
                        }
                        <UnderlinedText color="blue">Продажи </UnderlinedText> — это{'\u00A0'}важная составляющая любого бизнеса, поэтому
                        в{'\u00A0'}Авито выстроена программа обучения, а{'\u00A0'}коллеги всегда готовы прийти на{'\u00A0'}помощь.
                        <TextDivider />
                        Прокачай навыки еще больше на {'\n'}<HighlightedText color="blue">стажировке в
                        {'\u00A0'}отделе продаж</HighlightedText>{'\u00A0'}Авито!
                    </TextMd>
                </TextWrapper>
                <ButtonWrapper>
                    <Button type="dark">Откликнуться</Button>
                </ButtonWrapper>
                {progress.isFinalCorrect && (
                    <Form>
                        <TextMd>
                            У тебя получилось собрать достаточно подсказок
                            и{'\u00A0'}дать верный ответ, а{'\u00A0'}это дорогого стоит!
                            Лови свою возможность поучаствовать
                            в{'\u00A0'}розыгрыше призов от{'\u00A0'}Авито
                        </TextMd>
                        {isSend ? (
                            <SentData>
                                <TextMd>Данные отправлены</TextMd>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.54143 10.0964C0.756867 9.3118 0.756866 8.03976 1.54143 7.2552C2.326 6.47063 3.59803 6.47063 4.3826 7.2552L10.7105 13.5831C9.14137 15.1522 6.5973 15.1522 5.02817 13.5831L1.54143 10.0964Z" fill="#965EEB"/>
                                    <path d="M15.8572 1.72744C16.5095 0.942215 17.6749 0.83447 18.4601 1.48679C19.2453 2.1391 19.353 3.30446 18.7007 4.08968L10.8162 13.5808C9.51152 15.1512 7.18081 15.3667 5.61036 14.0621L15.8572 1.72744Z" fill="#965EEB"/>
                                </svg>
                            </SentData>
                        ): (
                            <>
                                <InputWrapper>
                                    <Input
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder={'+7 (999) 123-45-67 / E-mail'}
                                    />
                                    <SendButton
                                        disabled={!isAgreed || !contact || isSending}
                                        onClick={handleSubmit}
                                    >
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0981034 8.80573C0.0981033 9.50316 0.66348 10.0685 1.36091 10.0685L17.8943 10.0685L12.9394 15.1084C12.4514 15.6047 12.4554 16.4019 12.9483 16.8934C13.445 17.3886 14.2495 17.3859 14.7429 16.8875L21.9396 9.61735C22.3837 9.16866 22.3813 8.44523 21.9341 7.99953L14.7361 0.824909C14.2426 0.333001 13.4441 0.333045 12.9506 0.825011C12.4549 1.31919 12.455 2.12204 12.9508 2.61613L17.8943 7.54293L1.36091 7.54293C0.66348 7.54293 0.0981034 8.10831 0.0981034 8.80573Z" fill="white"/>
                                        </svg>
                                    </SendButton>
                                </InputWrapper>
                                <RadioButtonLabel>
                                    <InputRadioButton
                                        type="checkbox"
                                        value={isAgreed}
                                        checked={isAgreed}
                                        onChange={() => setIsAgreed(prevAgreed => !prevAgreed)}
                                    />
                                    <RadioIconStyled/>
                                    <span>
                                         Я согласен(а) на <Link href={'https://fut.ru/personal_data_policy/'} target="_blank">
                                        обработку персональных данных</Link> и получение информационных сообщений
                                     </span>
                                </RadioButtonLabel>
                            </>
                        )}

                    </Form>
                )}
            </Wrapper>
            <Background />
        </>
    )
}