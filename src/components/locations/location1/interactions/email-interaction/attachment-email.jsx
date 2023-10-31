import styled from 'styled-components';
import { TextSm, TextXs } from '../../../../shared/texts';
import { EmailChart } from './email-chart';
import { EmailWrapper } from './email-wrapper';

const Content = styled.div`
  width: 100%;
  background: white;
  padding: min(17px, 4.5vw);
  border-radius: 0 0 10px 10px;
`;

const Table = styled.table`
  border-spacing: 0;
  margin-bottom: min(28px, 7vw);
`;

const Td = styled.td`
  padding: min(9px, 2.4vw) min(5px, 1.3vw) min(9px, 2.4vw) min(10px, 2.7vw);
  vertical-align: top;
  border: 1px solid var(--main_purple);
  border-collapse: collapse;
  ${({$borderRadius}) => $borderRadius};
`;

const TdLeft = styled(Td)`
  border-bottom: none;
  padding-right: min(10px, 2.7vw);
`;

const TdRight = styled(Td)`
  border-left: none;
  border-bottom: ${({$hasBottom}) => $hasBottom ? '1px solid var(--main_purple)' : 'none'};
`;

const Ul = styled.ul`
  --ul_padding: min(10px, 2.7vw);
  list-style-type: '— ';
  padding-left: calc(var(--ul_padding) + 8px);
  
  & li + li {
    margin-top: 5px;
  }
`;

const Chart = styled.div`
  width: 100%;
  height: min(125px, 33vw);
  
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const AttachmentEmail = (props) => (
    <EmailWrapper>
      <Content>
          <Table>
              <tr>
                  <TdLeft $borderRadius={'border-top-left-radius: 10px'}>
                      <TextSm>Проблема</TextSm>
                  </TdLeft>
                  <TdRight $borderRadius={'border-top-right-radius: 10px'}>
                      <TextXs>
                          высокая конкуренция в{'\u00A0'}Зеленоградске — {'\n'}столице кошек
                      </TextXs>
                  </TdRight>
              </tr>
              <tr>
                  <TdLeft>
                      <TextSm>Решение</TextSm>
                  </TdLeft>
                  <TdRight>
                      <TextXs>подключение тарифа{'\n'}«Максимальный»</TextXs>
                  </TdRight>
              </tr>
              <tr>
                  <Td $borderRadius={'border-bottom-left-radius: 10px'}>
                      <TextSm>Услуги</TextSm>
                  </Td>
                  <TdRight $hasBottom $borderRadius={'border-bottom-right-radius: 10px'}>
                      <Ul>
                          <li>
                              <TextXs>Автозагрузка объявлений</TextXs>
                          </li>
                          <li>
                              <TextXs>Оформление магазина</TextXs>
                          </li>
                          <li>
                              <TextXs>Скрытие конкурентов в{'\u00A0'}блоке рекомендаций</TextXs>
                          </li>
                          <li>
                              <TextXs>Информация о{'\u00A0'}компании на{'\u00A0'}каждом объявлении</TextXs>
                          </li>
                      </Ul>
                  </TdRight>
              </tr>
          </Table>
          <Chart>
              <EmailChart />
          </Chart>
      </Content>
      {props.children}
    </EmailWrapper>
);
