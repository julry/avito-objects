import { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { BottomAbsoluteButton } from '../../../../shared/button';
import { Monitor } from './monitor';
import { TextEmail } from './text-email';
import { AttachmentEmail } from './attachment-email';

const MonitorStyled = styled(Monitor)`
  position: absolute;
  inset: 0;
`;


const PrevBtn = styled.button`
    outline: none;
    border: none;
    background: var(--main_purple);
    border-radius: 50%;
    --btnSize: min(9vw, 34px);
    width: var(--btnSize);
    height: var(--btnSize);
    position: absolute;
    top: calc(0px - var(--btnSize) - 10px);
    left: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const EmailInteraction = ({ onClose }) => {
    const [part, setPart] = useState(0);
    const [isPrev, setIsPrev] = useState(false);

    const handlePrev = () => {
        setIsPrev(true);
        setPart(prevPart => prevPart - 1);
    };

    return (
        <ModalWrapper>
            {part === 0 && (
                <>
                    <MonitorStyled />
                    <BottomAbsoluteButton type="light" onClick={() => setPart(prevPart => prevPart + 1)}>
                        Посмотреть
                    </BottomAbsoluteButton>
                </>
            )}
            {part === 1 && (
                <>
                    <TextEmail onNext={() => setPart(prevPart => prevPart + 1)} />
                    {isPrev && (
                        <BottomAbsoluteButton type="light" onClick={onClose}>
                            Все понятно
                        </BottomAbsoluteButton>
                    )}
                </>
            )}
            {part === 2 && (
                <>
                    
                    <AttachmentEmail>
                    <PrevBtn onClick={handlePrev}>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6961 9.22202C18.6961 9.84432 18.1918 10.3486 17.5588 10.3593L3.14924 10.3486C2.5162 10.3379 2.01192 9.83359 2.00119 9.20056C2.00119 8.5568 2.50547 8.05252 3.14924 8.05252L17.5588 8.04179C18.1918 8.03106 18.6961 8.53534 18.6961 9.1791L18.6961 9.22202Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50343 15.3376C8.06353 15.7775 7.33393 15.7775 6.89403 15.3376L1.58299 10.0266C1.13235 9.57597 1.14308 8.8571 1.58299 8.41719L6.89403 3.10616C7.34466 2.65552 8.0528 2.65552 8.50343 3.10616C8.94334 3.54606 8.95407 4.26493 8.51416 4.70483L4.01856 9.20044L8.51416 13.696C8.95407 14.1359 8.9648 14.8548 8.51416 15.3055L8.50343 15.3376Z" fill="white"/>
                        </svg>
                    </PrevBtn>
                    </AttachmentEmail> 
                    <BottomAbsoluteButton type="light" onClick={onClose}>Спасибо!</BottomAbsoluteButton>
                </>
            )}
        </ModalWrapper>
    );
};
