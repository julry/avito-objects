import styled from 'styled-components';
import { MessageWrapper } from './MessageWrapper';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({$type}) => $type === 'main' ? 'space-between' : 'flex-end'};
  flex-direction: ${({$type}) => $type === 'main' ? 'row' : 'row-reverse'};

  & + & {
    margin-top: min(20px, 5.3vw);
  }
  
  & div:last-child {
    ${({$type}) => $type === 'main' ? 'margin-left: 8px' : 'margin-right: 8px'};
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: min(42px, 11.2vw);
  height: min(42px, 11.2vw);
  background: url(${({src}) => src}) no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
`;

export const Message = ({ className, type, avatar, ...props }) => (
    <Wrapper className={className} $type={type}>
        <MessageWrapper type={type} {...props} />
        <Avatar src={avatar}/>
    </Wrapper>
)
