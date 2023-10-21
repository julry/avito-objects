import { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper } from '../../../../shared/modal-wrapper';
import { Button } from '../../../../shared/button';
import { Monitor } from './monitor';
import { TextEmail } from './text-email';
import { AttachmentEmail } from './attachment-email';

const MonitorStyled = styled(Monitor)`
  position: absolute;
  inset: 0;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: min(28px, 7.5vw);
  left: 50%;
  transform: translateX(-50%);
`;

export const EmailInteraction = ({ onClose }) => {
    const [part, setPart] = useState(0);

    return (
        <ModalWrapper>
            {part === 0 && (
                <>
                    <MonitorStyled />
                    <ButtonStyled type="light" onClick={() => setPart(prevPart => prevPart + 1)}>
                        Посмотреть
                    </ButtonStyled>
                </>
            )}
            {part === 1 && (
                <TextEmail onNext={() => setPart(prevPart => prevPart + 1)} />
            )}
            {part === 2 && (
                <>
                    <AttachmentEmail />
                    <ButtonStyled type="light" onClick={onClose}>Спасибо!</ButtonStyled>
                </>
            )}
        </ModalWrapper>
    )
}