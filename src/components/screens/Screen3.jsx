import { Location1 } from '../locations/location1';
import { useState } from 'react';
import { GameHeader } from '../shared/GameHeader';

export const Screen3 = () => {
    const [isShownHeader, setIsShownHeader] = useState(false);

    return (
        <>
            {isShownHeader && <GameHeader isRules />}
            <Location1 onStart={() => setIsShownHeader(true)} />
        </>
    )
}