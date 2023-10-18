import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationStart } from '../../shared/LocationStart';
import { LocationField } from './location-field';
import { LocationChat } from './location-chat';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & .object, & #person_location1 {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }
`;

export const Location1 = ({ onStart }) => {
    const { next, progress } = useProgress();
    const [isStartPopup, setIsStartPopup] =  useState(true);
    const [isChat, setIsChat] = useState(false);

    const isShowObjects = useMemo(() => isStartPopup || isChat, [isStartPopup, isChat]);

    const handleDisappear = () => {
        setIsStartPopup(false);
        setIsChat(true);
    };

    const handleStart = () => {
        setIsChat(false);
        onStart?.();
    };

    return (
        <Wrapper $isHideAdditional={isShowObjects}>
            {isStartPopup && (
                <LocationStart text={'Место силы'} title={'Твое рабочее место'} onDisappear={handleDisappear} />
            )}
            <LocationField onObjectClick={(id) => console.log(id)}/>
            {isChat && <LocationChat name={progress.name} onStart={handleStart} />}
        </Wrapper>
    );
};
