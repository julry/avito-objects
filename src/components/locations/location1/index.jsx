import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationStart } from '../../shared/location-start';
import { LocationField } from './location-field';
import { LocationChat } from './location-chat';
import { PersonInteraction } from './interactions/person-interaction';
import { OBJECTS_LENGTH } from './constants';
import { EmailInteraction } from './interactions/email-interaction';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & .object, & #person_location1 {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }

  & .object {
    cursor: pointer;
  }
`;

export const Location1 = ({ onStart }) => {
    const { next, progress, isFinished, setPickedObjects } = useProgress();
    const [isStartPopup, setIsStartPopup] =  useState(!isFinished);
    const [isChat, setIsChat] = useState(false);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);

    const isShowObjects = useMemo(() => isStartPopup || isChat, [isStartPopup, isChat]);

    const handleDisappear = () => {
        setIsStartPopup(false);
        setIsChat(true);
    };

    const handleStart = () => {
        setIsChat(false);
        onStart?.();
    };

    const handleObjectClick = (id) => {
        setClicked(id);
        if (picked.includes(id)) return;
        setPicked(prevPicked => [...prevPicked, id]);
        setPickedObjects(id);
    };

    const handleClose = () => {
        if (picked.length === OBJECTS_LENGTH) next();
        else setClicked(null);
    }

    return (
        <Wrapper $isHideAdditional={isShowObjects}>
            {isStartPopup && (
                <LocationStart text={'Место силы'} title={'Твое рабочее место'} onDisappear={handleDisappear} />
            )}
            <LocationField onObjectClick={handleObjectClick}/>
            {isChat && <LocationChat name={progress.name} onStart={handleStart} />}
            {clicked === 'gosha' && (
                <PersonInteraction onClose={handleClose} />
            )}
            {clicked === 'email' && (
                <EmailInteraction onClose={handleClose} />
            )}
        </Wrapper>
    );
};
