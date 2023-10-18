import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LOCATION_START_DELAY } from '../../constants';
import { ModalWrapper } from './ModalWrapper';
import { PopUp } from './PopUp';
import { TextMd } from './texts';

const PopUpStyled = styled(PopUp)`
  position: absolute;
  top: 26vh;
  left: 50%;
  transform: translateX(-50%);
`;

export const LocationStart = ({title, text, onDisappear}) => {
    const [isFinished, setIsFinished] = useState(false);
    const timerRef = useRef();

    useEffect(() => {
        if (timerRef.current) return;

        timerRef.current = setTimeout(() => setIsFinished(true), LOCATION_START_DELAY);
        return () => {
            timerRef.current = null
        }
    }, []);

    useEffect(() => {
        if (isFinished) onDisappear?.();
    }, [isFinished]);

    return (
        <ModalWrapper>
            <PopUpStyled title={title} isMain>
                <TextMd>
                    {text}
                </TextMd>
            </PopUpStyled>
        </ModalWrapper>
    );
};
