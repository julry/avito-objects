import styled from 'styled-components';
import { TextSm } from './texts';

const Wrapper = styled.div`
  padding: min(14px, 4vw) min(16px, 4.2vw);
  border-radius: 12px 12px ${({$type}) => $type === 'main' ? '0 12px' : '12px 0'};
  background: white;
`;

const Title = styled(TextSm)`
  color: var(--main_${({$type, color}) => $type === 'main' ? 'blue' : color});
  margin-bottom: 3px;
`;

export const MessageWrapper = ({ title, text, type, color, ...props}) => (
    <Wrapper {...props} $type={type}>
        <Title $type={type} color={color}>{title}</Title>
        <TextSm>{typeof text === 'function' ? text() : text}</TextSm>
    </Wrapper>
);
