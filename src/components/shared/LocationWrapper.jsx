import { GameHeader } from './GameHeader';

export const LocationWrapper = ({ children }) => (
    <>
        <GameHeader />
        {children}
    </>
)