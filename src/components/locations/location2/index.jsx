import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationStart } from '../../shared/location-start';
import { PosterInteraction } from './interactions/poster-interaction';
import { NoteInteraction } from './interactions/note-interaction';
import { FolderInteraction } from './interactions/folder-interaction';
import { PeopleInteraction } from './interactions/people-interaction';
import { PhoneInteraction } from './interactions/phone-interaction';
import { LocationField } from './location-field';
import { OBJECTS_LENGTH } from './constants';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & .object {
    cursor: pointer;
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }
  
  & .people {
    opacity: ${({$isPeopleHidden}) => $isPeopleHidden ? 0 : 1};
  }
  
  & #note_object {
    opacity: ${({$isFirstHandHidden}) => $isFirstHandHidden ? 0 : 1};
  }
  
  & #poster_ready {
    opacity: ${({$showReadyPoster}) => $showReadyPoster ? 1 : 0};
  }
`;

export const Location2 = () => {
    const { isFinished, setPickedObjects } = useProgress();
    const [isStartPopup, setIsStartPopup] = useState(!isFinished);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);
    const [isAllPicked, setIsAllPicked] = useState(false);

    const handleObjectClick = (id) => {
        setClicked(id);
        if (picked.includes(id)) return;
        setPicked(prevPicked => [...prevPicked, id]);
        setPickedObjects(id);
    };

    const handleClose = () => {
        setClicked(null);
        if (picked.length === OBJECTS_LENGTH) {
            setPickedObjects('phoneChat');
            setIsAllPicked(true);
        }
    };

    const showReadyPoster = useMemo(() => picked.includes('poster'), [picked]);
    const isFirstHandHidden = useMemo(() => (
        clicked === 'note' || clicked === 'people' || isAllPicked
    ), [clicked, isAllPicked]);
    const isPeopleHidden = useMemo(() => clicked === 'people', [clicked]);
    const isHideAdditional = useMemo(() => isStartPopup || isAllPicked, [isStartPopup, isAllPicked]);

    return (
        <Wrapper 
            $isHideAdditional={isHideAdditional}
            $isFirstHandHidden={isFirstHandHidden} 
            $isPeopleHidden={isPeopleHidden}
            $showReadyPoster={showReadyPoster}
        >
            <LocationField onObjectClick={handleObjectClick}/>
            {isStartPopup && (
                <LocationStart
                    title={'Кухня-ретровагон'}
                    text={'Отправляйся навстречу правильным решениям'}
                    onDisappear={() => setIsStartPopup(false)}
                />
            )}
            {clicked === 'poster' && (
                <PosterInteraction onClose={handleClose} />
            )}
            {clicked === 'note' && (
                <NoteInteraction onClose={handleClose} />
            )}
            {clicked === 'folder' && (
                <FolderInteraction onClose={handleClose} />
            )}
            {clicked === 'people' && (
                <PeopleInteraction onClose={handleClose} />
            )}
            {isAllPicked && (
                <PhoneInteraction />
            )}
        </Wrapper>
    );
};
