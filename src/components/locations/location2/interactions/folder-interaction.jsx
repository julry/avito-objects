import { useState } from 'react';
import styled from 'styled-components';
import bookClosed from '../../../../assets/images/bookClosed.svg';
import bookOpened from '../../../../assets/images/bookOpened.svg';
import { useProgress } from '../../../../hooks/useProgress';
import { SEX_TYPES } from '../../../../constants';
import { ModalWrapper } from '../../../shared/modal-wrapper';
import { PopUp } from '../../../shared/pop-up';
import { TextMd } from '../../../shared/texts';
import { Button, ButtonNoIcon } from '../../../shared/button';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: var(--screen_padding);
  width: 100%;
  text-align: center;
`;

const Question = styled.div`
  visibility: ${({$isOpened}) => $isOpened ? 'hidden' : 'visible'};
`;

const Book = styled.div`
  margin-top: var(--screen_padding);
  background: no-repeat center center;
  background-size: contain;
  height: min(139px, 37.06vw);
`;

const BookClosed = styled(Book)`
  width: min(160px, 42.6vw);
  background-image: url(${bookClosed});
`;

const BookOpened = styled(Book)`
  width: min(183px, 42.6vw);
  background-image: url(${bookOpened});
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: min(33px, 8.8vw);
`;

const ButtonStyled = styled(ButtonNoIcon)`
  color: var(--main_${({$color}) => $color});
  padding-left: min(36px, 9.6vw);
  padding-right: min(36px, 9.6vw);
  background: white;
`;

const Opened = styled.div`
  position: absolute;
  top: var(--screen_padding);
  left: var(--screen_padding);
  right: var(--screen_padding);
`;

const CloseBtn = styled(Button)`
  margin-top: min(33px, 8.8vw);
`;

export const FolderInteraction = ({onClose}) => {
    const { sex } = useProgress();
    const [isOpened, setIsOpened] = useState(false);

    return (
        <ModalWrapper>
            <Wrapper>
                <Question $isOpened={isOpened}>
                    <PopUp title={'Папка «Выгодно»'}>
                        <TextMd>
                            В папке должно быть что-то полезное... в{'\u00A0'}теории.
                            Но она закрытая, а{'\u00A0'}еще на{'\u00A0'}ней имя твоего наставника.
                            Не{'\u00A0'}похоже, что это официальные документы, бумага разноцветная…
                        </TextMd>
                        <BookClosed/>
                    </PopUp>
                    <ButtonsWrapper>
                        <ButtonStyled $color={'blue'} onClick={() => setIsOpened(true)}>Открыть</ButtonStyled>
                        <ButtonStyled $color={'red'} onClick={onClose}>Не открывать</ButtonStyled>
                    </ButtonsWrapper>
                </Question>
                {isOpened && (
                    <Opened>
                        <PopUp>
                            <TextMd>
                                Ой, кажется, это гид по интересным странам и выгодным маршрутам… Зря открыл{sex === SEX_TYPES.female ? 'а' : ''}
                            </TextMd>
                            <BookOpened />
                        </PopUp>
                        <CloseBtn type="light" onClick={onClose}>Упс</CloseBtn>
                    </Opened>
                )}
            </Wrapper>
        </ModalWrapper>
    );
};
