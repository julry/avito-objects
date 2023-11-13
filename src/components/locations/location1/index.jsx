import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationStart } from '../../shared/location-start';
import { BottomAbsoluteButton } from '../../shared/button';
import { PersonInteraction } from './interactions/person-interaction';
import { EmailInteraction } from './interactions/email-interaction';
import { LocationField } from './location-field';
import { LocationChat } from './location-chat';
import { OBJECTS_LENGTH } from './constants';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  & .object, & .person_location1 {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }

  & .object {
    cursor: pointer;
  }

  & #monitor_loc1 {
    display: ${({$isShowMonitor}) => $isShowMonitor ? 'block' : 'none'};
  }

  & #email_loc1 {
    opacity: ${({$isShowMonitor, $isHideAdditional}) => $isHideAdditional || $isShowMonitor ? 0 : 1};
  }
`;

export const Location1 = ({ onStart }) => {
    const { next, progress, isFinished, setPickedObjects, sex } = useProgress();
    const [isStartPopup, setIsStartPopup] =  useState(!isFinished);
    const [isChat, setIsChat] = useState(false);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);
    const [isSawEmail, setIsSawEmail] = useState(false);

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
        setIsSawEmail(false);
        if (picked.length === OBJECTS_LENGTH) next();
        else setClicked(null);
    }

    return (
        <Wrapper $isHideAdditional={isShowObjects} $isShowMonitor={clicked === 'email' && !isSawEmail}>
            {isStartPopup && (
                <LocationStart text={'Место силы'} title={'Твое рабочее место'} onDisappear={handleDisappear} />
            )}
            <LocationField onObjectClick={handleObjectClick}/>
            {isChat && <LocationChat name={progress.name} onStart={handleStart} />}
            {clicked === 'gosha' && <PersonInteraction onClose={handleClose} sex={sex}/>}
            {clicked === 'email' && (
                isSawEmail ? ( <EmailInteraction onClose={handleClose} />) : (
                    <BottomAbsoluteButton type="light" onClick={() => setIsSawEmail(true)}>
                        Посмотреть
                    </BottomAbsoluteButton>
                )
            )
           }
        </Wrapper>
    );
};
