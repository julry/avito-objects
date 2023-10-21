import styled from 'styled-components';
import { TextMd } from './texts';

export const QuestionTitle = styled(TextMd)`
  padding: 5px 20px 6px;
  border-radius: 20px;
  background: var(--main_blue);
  color: white;
  width: max-content;
  margin: 0 auto min(16px, 4.2vw);
`;