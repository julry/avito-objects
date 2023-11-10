import { useState } from 'react';
import styled from 'styled-components';
import people from '../../../../../assets/images/zoomedPeople.svg';
import { LocationStart } from '../../../../shared/location-start';
import { QuestionChat } from './question-chat';
import { AnswerChat } from './answer-chat';

const People = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: min(50.9vh, 83vw);
  background: url(${people}) center 100% no-repeat;
  background-size: cover;
  z-index: ${({$isFront}) => $isFront ? 101 : 10};
`;

export const PeopleInteraction = ({onClose}) => {
    const [stage, setStage] = useState(0);

    const handleChooseQuestion = (id) => {
        if (id === '1') setStage(prevStage => prevStage + 1);
        else onClose();
    }

    return (
        <>
            {stage === 0 && (
                <LocationStart
                    title={'Компания стажеров'}
                    text={'Время познакомиться\nс коллегами!'}
                    onDisappear={() => setStage(prevStage => prevStage + 1)}
                />
            )}
            {stage === 1 && (<QuestionChat onChooseQuestion={handleChooseQuestion} />)}
            {stage === 2 && (<AnswerChat onClose={onClose} />)}
            <People $isFront={stage === 0} />
        </>
    );
};
