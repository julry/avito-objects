import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationStart } from '../../shared/location-start';
import { CupInteraction } from './interactions/cup-interaction';
import { VideoInteraction } from './interactions/video-interaction';
import { InternsInteraction } from './interactions/interns-interaction';
import { LocationField } from './location-field';
import { OBJECTS_LENGTH } from './constants';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  
  & #cup {
    opacity: ${({$isCupHidden, $isHideAdditional}) => $isCupHidden || $isHideAdditional ? 0 : 1};
  }

  & #video {
    opacity: ${({$isVideoHidden, $isHideAdditional}) => $isVideoHidden || $isHideAdditional ? 0 : 1};
  } 
  
  & #laptop_people {
    opacity: ${({$isVideoHidden}) => $isVideoHidden ? 0 : 1};
  }

   & .object {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }

  & #laptop_maxim {
    opacity: ${({$isMaxShown}) => $isMaxShown ? 1 : 0};
  }

  & #maxim_active {
    display: ${({$isVideoHidden, $isLaptopInactive}) => $isVideoHidden && !$isLaptopInactive ? 'block' : 'none'};
  }

  & #maxim_inactive {
    display: ${({$isVideoHidden, $isLaptopInactive}) => $isVideoHidden && $isLaptopInactive ? 'block' : 'none'};
  }
`;

export const Location3 = () => {
    const { next, isFinished, setPickedObjects } = useProgress();
    const [isStartPopup, setIsStartPopup] = useState(!isFinished);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);
    const [isLaptopInactive, setIsLaptopInactive] = useState(false);

    const isCupHidden = useMemo(() => clicked === 'cup',[clicked]);
    const isVideoHidden = useMemo(() => clicked === 'video',[clicked]);

    const handleObjectClick = (id) => {
        setClicked(id);
        if (picked.includes(id)) return;
        setPicked(prevPicked => [...prevPicked, id]);
        setPickedObjects(id);
    };

    const handleClose = () => {
        setIsLaptopInactive(false);
        if (picked.length === OBJECTS_LENGTH) next();
        else setClicked(null);
    };

    return (
        <Wrapper
            $isHideAdditional={isStartPopup}
            $isCupHidden={isCupHidden}
            $isVideoHidden={isVideoHidden}
            $isMaxShown={isVideoHidden}
            $isLaptopInactive={isLaptopInactive}
        >
            <LocationField onObjectClick={handleObjectClick}/>
            {isStartPopup && (
                <LocationStart
                    title={'Чилл-переговорка'}
                    text={'Тихое место, которое\nподходит для\nпродуктивной работы'}
                    onDisappear={() => setIsStartPopup(false)}
                />
            )}
            {clicked === 'cup' && <CupInteraction onClose={handleClose} />}
            {clicked === 'video' && <VideoInteraction onClose={handleClose} onChangePart={() => setIsLaptopInactive(true)}/>}
            {clicked === 'meeting' && <InternsInteraction onClose={handleClose} />}
        </Wrapper>
    );
};
