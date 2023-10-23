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
  height: 100%;
  width: 100%;
  
  & .object {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }
  
  & #cup {
    opacity: ${({$isCupHidden}) => $isCupHidden ? 0 : 1};
  }

  & #video {
    opacity: ${({$isVideoHidden}) => $isVideoHidden ? 0 : 1};
  }
`;

export const Location3 = () => {
    const { next, isFinished, setPickedObjects } = useProgress();
    const [isStartPopup, setIsStartPopup] = useState(!isFinished);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);

    const isCupHidden = useMemo(() => clicked === 'cup',[clicked]);
    const isVideoHidden = useMemo(() => clicked === 'video',[clicked]);

    const handleObjectClick = (id) => {
        setClicked(id);
        if (picked.includes(id)) return;
        setPicked(prevPicked => [...prevPicked, id]);
        setPickedObjects(id);
    };

    const handleClose = () => {
        if (picked.length === OBJECTS_LENGTH) next();
        else setClicked(null);
    };

    return (
        <Wrapper
            $isHideAdditional={isStartPopup}
            $isCupHidden={isCupHidden}
            $isVideoHidden={isVideoHidden}
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
            {clicked === 'video' && <VideoInteraction onClose={handleClose} />}
            {clicked === 'meeting' && <InternsInteraction onClose={handleClose} />}
        </Wrapper>
    );
};
