import { Location1 } from '../locations/location1';
import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { LocationWrapper } from '../shared/location-wrapper';

export const Screen3 = () => {
    const { isFinished } = useProgress();
    const [isShownHeader, setIsShownHeader] = useState(isFinished);

    return (
        <LocationWrapper canNext isRules={!isFinished} isShownHeader={isShownHeader}>
            <Location1 onStart={() => setIsShownHeader(true)} canNext/>
        </LocationWrapper>
    )
}