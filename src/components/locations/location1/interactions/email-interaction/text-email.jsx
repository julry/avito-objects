import styled from 'styled-components';
import { EmailWrapper } from './email-wrapper';
import { TextDivider, TextSm } from '../../../../shared/texts';
import { useEffect, useRef, useState } from 'react';
import { shake } from '../../../../shared/keyframes';

const Content = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const LeftPart = styled.div`
  display: flex;
  justify-content: center;
  padding: min(25px, 6.6vw) 0;
  background: #F4F5FA;
  width: 17%;
  flex-shrink: 0;
  border-bottom-left-radius: 5px;
`;

const RightPart = styled.div`
  flex-grow: 1;
  background: white;
  border-bottom-right-radius: 5px;
`;

const Header = styled.div`
  padding: min(27px, 7.2vw) min(18px, 4.8vw) min(16px, 4.2vw);
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: min(15px, 4vw);
  border-bottom: 1px solid #F4F5FA;
  
  @media screen and (max-width: 320px) {
    padding-left: 10px;
    padding-right: 0;
    grid-template-columns: 46px 1fr;
  }
`;

const Title = styled(TextSm)`
    color: #7F8394;
`;

const Message = styled.div`
    padding: min(17px, 4.5vw) min(15px, 4vw) min(17px, 4.5vw) var(--screen_padding);
`;

const Attachment = styled.div`
  border-radius: 50%;
  background: var(--main_purple);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 27px 0 0 -1px;
  width: 33px;
  height: 33px;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  animation: ${({$isAnimated}) => $isAnimated ? shake : ''} 1.3s cubic-bezier(.36,.07,.19,.97) both infinite;
`;

export const TextEmail = ({ onNext }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const $interval = useRef();
  const $timeout = useRef();

  useEffect(() => {
      $interval.current = setInterval(() => {
          if ($timeout.current) {
              $timeout.current = null;
              clearTimeout($timeout.current);
          }
          setIsAnimated(true);
          $timeout.current = setTimeout(() => {
              setIsAnimated(false);
          }, 1300);
      }, 4000);

      return () => {
          clearInterval($interval.current);
          clearTimeout($timeout.current);
          $interval.current = null;
          $timeout.current = null;
      }
  }, []);

  return (
      <EmailWrapper>
          <Content>
              <LeftPart>
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.51007 0.924168L9.545 6.42875L16.5799 0.91636C16.3301 0.822665 16.0646 0.775818 15.7835 0.775818H3.29086C3.00978 0.775818 2.74431 0.822665 2.49445 0.908552L2.51007 0.924168ZM1.27642 1.9392C1.06561 2.28275 0.948486 2.68876 0.948486 3.11819V10.9261C0.948486 12.2144 1.99475 13.2685 3.29086 13.2685H15.7835C17.0718 13.2685 18.1259 12.2144 18.1259 10.9261V3.11819C18.1259 2.68095 18.0088 2.27494 17.798 1.93139L10.0057 8.02156C9.71677 8.24018 9.31857 8.24018 9.03749 8.02156L1.24519 1.92358L1.27642 1.9392Z" fill="#7F8394"/>
                  </svg>
              </LeftPart>
              <RightPart>
                  <Header>
                      <Title>От кого:</Title>
                      <TextSm>Наставник</TextSm>
                      <Title>Тема:</Title>
                      <TextSm>Полезная информация</TextSm>
                  </Header>
                  <Message>
                      <TextSm>
                          Привет еще раз!
                          {'\n\n'}
                          Ну как, справляешься с{'\u00A0'}задачей?
                          Хочу тебе немного помочь.
                          У нас есть несколько продуктов, которые мы{'\u00A0'}предлагаем клиентам
                          для{'\u00A0'}повышения эффективности работы с{'\u00A0'}нами.
                          {'\n\n'}
                          Например, в{'\u00A0'}марте к{'\u00A0'}нам обратилась компания «PetFriend».
                          Они продают корм для котиков в{'\u00A0'}Зеленоградске. Смотри, что мы для них сделали
                      </TextSm>
                      <Attachment $isAnimated={isAnimated} onClick={onNext}>
                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.13758 20.5031C6.31702 20.5031 5.517 20.3474 4.75965 20.0401C3.97498 19.7219 3.27135 19.2548 2.66818 18.6519C2.065 18.0489 1.59795 17.3451 1.27988 16.5604C0.972654 15.803 0.816895 15.003 0.816895 14.1825C0.816895 13.3619 0.972654 12.5616 1.27988 11.8043C1.59795 11.0196 2.06523 10.316 2.66818 9.71282L2.66976 9.71124L10.9984 1.42256C11.4277 0.993433 11.9289 0.660694 12.4878 0.434052C13.0271 0.215312 13.5966 0.104248 14.1809 0.104248C14.7648 0.104248 15.3344 0.215312 15.8739 0.434052C16.4328 0.660694 16.9337 0.993433 17.3633 1.42256C17.7927 1.85192 18.1252 2.35306 18.3521 2.91199C18.5708 3.4515 18.6816 4.02104 18.6816 4.60525C18.6816 5.18947 18.5708 5.75901 18.3521 6.29852C18.1252 6.85745 17.7927 7.35837 17.3633 7.78795L9.05298 16.0978C8.79451 16.3563 8.49314 16.5563 8.15634 16.6931C7.83173 16.8247 7.48883 16.8915 7.13736 16.8915C6.78588 16.8915 6.44321 16.8247 6.11837 16.6931C5.7818 16.5565 5.48021 16.3563 5.22174 16.0978C4.96327 15.8396 4.76326 15.538 4.62669 15.2014C4.49554 14.8766 4.42872 14.5339 4.42872 14.1825C4.42872 13.831 4.49553 13.4881 4.62714 13.1635C4.76349 12.8269 4.96372 12.5251 5.22219 12.2666L12.884 4.60503C13.2366 4.25242 13.8084 4.25242 14.161 4.60503C14.5136 4.95763 14.5136 5.52943 14.161 5.88203L6.49919 13.5436C6.32853 13.7145 6.23463 13.9414 6.23463 14.1825C6.23463 14.4235 6.32853 14.6502 6.49919 14.8208C6.66963 14.9915 6.89649 15.0854 7.13758 15.0854C7.37867 15.0854 7.60554 14.9915 7.77597 14.8208L16.0863 6.51072C16.5954 6.00168 16.8757 5.32491 16.8757 4.60525C16.8757 3.8856 16.5954 3.20861 16.0863 2.69979C15.5775 2.19053 14.9007 1.91016 14.1809 1.91016C13.461 1.91016 12.784 2.19053 12.2754 2.69957L12.2738 2.70115L3.94451 10.9905C3.51357 11.4217 3.17993 11.9239 2.95306 12.4831C2.73409 13.0237 2.62281 13.5958 2.62281 14.1825C2.62281 14.7691 2.73409 15.3409 2.95329 15.8816C3.18038 16.4412 3.5138 16.9435 3.94541 17.3746C4.37657 17.8058 4.87907 18.1397 5.43822 18.3665C5.97909 18.5859 6.55089 18.6972 7.13758 18.6972C7.72428 18.6972 8.2963 18.5859 8.83694 18.3665C9.39655 18.1397 9.89859 17.806 10.33 17.3746L18.6304 9.07421C18.983 8.7216 19.5548 8.7216 19.9072 9.07421C20.2598 9.42681 20.2598 9.99861 19.9072 10.3512L11.6068 18.6516C11.0038 19.2546 10.3002 19.7216 9.51529 20.0399C8.75839 20.3474 7.95814 20.5031 7.13758 20.5031Z" fill="white"/>
                          </svg>
                      </Attachment>
                  </Message>
              </RightPart>
          </Content>
      </EmailWrapper>
  );
};
