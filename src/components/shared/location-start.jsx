import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LOCATION_START_DELAY } from '../../constants';
import { ModalWrapper } from './modal-wrapper';
import { PopUp } from './pop-up';
import { TextMd } from './texts';

const PopUpStyled = styled(PopUp)`
  position: absolute;
  top: 26vh;
  left: 50%;
  transform: translateX(-50%);
  min-width: 63.5%;
  text-align: center;
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
    }, [isFinished, onDisappear]);

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
