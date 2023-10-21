import { useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationField } from './location-field';
import { LocationStart } from '../../shared/location-start';
import { PosterInteraction } from './interactions/poster-interaction';
import { OBJECTS_LENGTH } from './constants';
import { NoteInteraction } from './interactions/note-interaction';
import { FolderInteraction } from './interactions/folder-interaction';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & .object {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }
  
  & #note_object {
    opacity: ${({$clicked}) => $clicked === 'note' ? 0 : 1};
  }
`;

export const Location2 = () => {
    const { next, progress, isFinished, setPickedObjects } = useProgress();
    // const [isStartPopup, setIsStartPopup] = useState(!isFinished);
    const [isStartPopup, setIsStartPopup] = useState(false);
    const [clicked, setClicked] = useState(null);
    const [picked, setPicked] = useState([]);

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
        <Wrapper $isHideAdditional={isStartPopup} $clicked={clicked}>
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
        </Wrapper>
    );
};
