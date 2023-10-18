import { useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { LocationField } from './location-field';
import { LocationStart } from '../../shared/LocationStart';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  & .object {
    opacity: ${({$isHideAdditional}) => $isHideAdditional ? 0 : 1};
  }
`;

export const Location3 = () => {
    const { next, progress } = useProgress();
    const [isStartPopup, setIsStartPopup] = useState(true);

    return (
        <Wrapper $isHideAdditional={isStartPopup}>
            <LocationField onObjectClick={(id) => console.log(id)}/>
            {isStartPopup && (
                <LocationStart
                    title={'Чилл-переговорка'}
                    text={'Тихое место, которое\nподходит для\nпродуктивной работы'}
                    onDisappear={() => setIsStartPopup(false)}
                />
            )}
        </Wrapper>
    );
};
