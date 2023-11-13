import { LocationWrapper } from '../shared/location-wrapper';
import { Location3 } from '../locations/location3';
import { useRef } from 'react';
import { useEffect } from 'react';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Screen5 = () => {
    const metrika = useRef(false);

    useEffect(() => {
        if (metrika.current) return;
        reachMetrikaGoal('location3');
        metrika.current = true;
    }, []);
    
    return (
    <LocationWrapper canPrev>
        <Location3 />
    </LocationWrapper>
);
    }