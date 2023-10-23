import { useState } from 'react';
import styled from 'styled-components';
import { shakeWithStop } from '../../../../shared/keyframes';
import { ChatQuestion } from './chat-question';
import { PhoneHand } from './phone-hand';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;

  & .animated_object {
    animation: ${shakeWithStop} 1.3s cubic-bezier(.36,.07,.19,.97) both infinite;
  }
`;

export const PhoneInteraction = () => {
    const [stage, setStage] = useState(0);

    return (
        <Wrapper>
            {stage === 0 && <PhoneHand onClick={() => setStage(prevStage => prevStage + 1)}/>}
            {stage === 1 && <ChatQuestion />}
        </Wrapper>
    );
};
