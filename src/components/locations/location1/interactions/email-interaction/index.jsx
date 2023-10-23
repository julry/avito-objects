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

export const EmailInteraction = ({ onClose }) => {
    const [part, setPart] = useState(0);

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
                <TextEmail onNext={() => setPart(prevPart => prevPart + 1)} />
            )}
            {part === 2 && (
                <>
                    <AttachmentEmail />
                    <BottomAbsoluteButton type="light" onClick={onClose}>Спасибо!</BottomAbsoluteButton>
                </>
            )}
        </ModalWrapper>
    );
};
