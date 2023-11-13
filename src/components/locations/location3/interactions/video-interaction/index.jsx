import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../shared/flex-wrapper';
import { MessageWrapper } from '../../../../shared/message-wrapper';
import { QuestionVideo } from './question-video';
import { AnswerVideo } from './answer-video';

const ModalWrapper = styled(FlexWrapper)`
  position: absolute;
  inset: 0;
  z-index: 100;
`;

const Wrapper = styled(FlexWrapper)`
  width: 100%;
  height: 100%;
  padding: var(--screen_padding);
  align-items: center;
  justify-content: ${({$isCentered}) => $isCentered ? 'center' : 'flex-start'};;
  z-index: 2;
`;

export const VideoInteraction = ({ onClose, onChangePart }) => {
    const [part, setPart] = useState(0);
    const [questions, setQuestions] = useState([]);
    const $timeout = useRef(null);

    const handleWrapperClick = () => {
        if (part !== 0) return;

        if ($timeout.current) {
            clearTimeout($timeout.current);
            $timeout.current = null;
        }

        setPart(prevPart => prevPart + 1);
    }

    useEffect(() => {
        if (part === 0)
            $timeout.current = setTimeout(() => setPart(prevPart => prevPart + 1), 6000);

        return () => {
            if ($timeout.current) {
                clearTimeout($timeout.current);
                $timeout.current = null;
            }
        }
    }, [part]);

    const handleNextQuestions = (selectedQuestions) => {
        setQuestions(selectedQuestions);
        setPart(prevPart => prevPart + 1);
        onChangePart?.()
    };

    return (
        <ModalWrapper onClick={handleWrapperClick}>
            <Wrapper $isCentered={part === 0}>
                {part === 0 && (
                    <MessageWrapper
                        type="main"
                        text={
                            'Коллеги, привет! \n\n' +
                            'Спасибо, что пришли на мастер-класс. ' +
                            'Сегодня поговорим о тарифах Авито и инструментах, ' +
                            'которые мы используем для улучшения эффективности бизнеса клиентов.'
                        }
                    />
                )}
                {part === 1 && <QuestionVideo onNext={handleNextQuestions} />}
                {part === 2 && <AnswerVideo questions={questions} onNext={onClose} />}
            </Wrapper>
        </ModalWrapper>
    );
};
