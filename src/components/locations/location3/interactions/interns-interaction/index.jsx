import { useState } from 'react';
import styled from 'styled-components';
import interns from '../../../../../assets/images/interns.svg';
import { LocationStart } from '../../../../shared/location-start';
import { QuestionChat } from './question-chat';

const People = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: min(32vh, 52vw);
  background: url(${interns}) center 100% no-repeat;
  background-size: cover;
  z-index: 101;
`;

export const InternsInteraction = ({onClose}) => {
    const [stage, setStage] = useState(0);

    return (
        <>
            {stage === 0 && (
                <LocationStart
                    title={'Встреча со стажёрами'}
                    text={'Интересно, о чем они\nразговаривают?'}
                    onDisappear={() => setStage(prevStage => prevStage + 1)}
                />
            )}
            {stage === 1 && (<QuestionChat onClose={onClose} />)}
            {stage === 0 && <People />}
        </>
    );
};
