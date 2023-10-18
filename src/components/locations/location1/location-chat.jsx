import { useEffect, useMemo, useState } from 'react';
import { getMessages } from './utils';
import { ButtonCentered } from '../../shared/Button';
import styled from 'styled-components';
import { ModalWrapper } from '../../shared/ModalWrapper';
import { Chat } from '../../shared/Chat';
import buddy from '../../../assets/images/buddyFull.svg';
import { LocationQuestion } from './location-question';
import { LocationAnswer } from './location-answer';

const ModalWrapperStyled = styled(ModalWrapper)`
  padding: 20px 16px;
`;

const ChatStyled = styled(Chat)`
  margin: 0 auto 20px;
`;

const Buddy = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 58.93vw; //221
  max-height: 33vh;
  width: 52.26vw; //196
  max-width: 29.3vh;
  background: url(${buddy}) no-repeat;
  background-size: contain;
`;

export const LocationChat = ({ name, onStart }) => {
    const [part, setPart] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(null);

    const buttonTitle = useMemo(() => ({
        0: 'Далее',
        1: 'Задать',
        2: 'Спасибо, увидимся!',
    }), []);

    const partComponent = useMemo(() => ({
        0: () => <ChatStyled messages={getMessages(name)} />,
        1: () => <LocationQuestion chosenAnswer={questionNumber} onChooseAnswer={(q) => setQuestionNumber(q)}/>,
        2: () => <LocationAnswer chosenAnswer={questionNumber} />,
    }), [questionNumber, setQuestionNumber]);

    useEffect(() => {
        if (part > 2) onStart?.();
    }, [part]);

    return (
        <ModalWrapperStyled>
            {partComponent[part]?.()}
            <ButtonCentered
                type='light'
                disabled={part === 1 && !questionNumber}
                onClick={() => setPart(prev => prev + 1)}
            >
                {buttonTitle[part]}
            </ButtonCentered>
            {part !== 2 && <Buddy/>}
        </ModalWrapperStyled>
    )
}