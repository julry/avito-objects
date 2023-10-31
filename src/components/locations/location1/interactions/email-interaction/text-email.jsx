import styled from 'styled-components';
import { TextSm } from '../../../../shared/texts';
import { EmailWrapper } from './email-wrapper';
import { Button } from '../../../../shared/button';

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
  grid-template-columns: max-content 1fr;
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

const ButtonStyled = styled(Button)`
  background: var(--main_purple);
  margin-top: min(22px, 5.8vw);
`;

export const TextEmail = ({ onNext }) => (
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
                  <ButtonStyled type="dark" onClick={onNext}>Изучить документ</ButtonStyled>
              </Message>
          </RightPart>
      </Content>
    </EmailWrapper>
);
