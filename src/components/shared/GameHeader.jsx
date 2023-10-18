import { useMemo, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import info from '../../assets/images/infoSign.svg';
import { Rules } from '../locations/Rules';
import { useProgress } from '../../hooks/useProgress';
import { TOTAL_OBJECTS } from '../../constants';
import { ButtonNoIcon } from './Button';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  top: min(5.5vw, 20px);
  transform: translateX(-50%);
  background: white;
  border-radius: 20px;
  width: 89%;
  padding: min(9px, 2.4vw) min(14px, 3.7%);
  z-index: 99;
`;

const LogoStyled = styled.div`
  width: min(56px, 14.9vw);
  height: min(16px, 4.2vw);
  background: url(${logo}) no-repeat center center;
  background-size: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.p`
  --countFont: min(18px, 4.8vw);
  margin-top: -2px;
  font-size: max(var(--countFont), 15px);
`;

const Picked = styled.span`
  color: var(--main_green);
`;

const InfoButton = styled.div`
  width: min(23px, 6.1vw);
  height: min(23px, 6.1vw);
  background: url(${info}) no-repeat center center;
  background-size: cover;
  opacity: ${({disabled}) => disabled ? 0.2 : 1};
  margin-left: 20px;
`;

export const GameHeader = ({ isRules }) => {
    const [isShownRules, setIsShownRules] = useState(isRules);
    const { pickedObjects } = useProgress();
    const isFinished = useMemo(() => pickedObjects?.length >= TOTAL_OBJECTS, [pickedObjects]);

    return (
        <>
            <Wrapper>
                <LogoStyled />
                <InfoWrapper>
                    {isFinished ? (
                        <ButtonNoIcon type='action'>Дать ответ</ButtonNoIcon>
                    ) : (
                        <Count>
                            <Picked>{pickedObjects?.length ?? 0}</Picked>/{TOTAL_OBJECTS}
                        </Count>
                    )}
                    <InfoButton onClick={() => setIsShownRules(true)} disabled={isShownRules}/>
                </InfoWrapper>
            </Wrapper>
            {isShownRules && <Rules onClose={() => setIsShownRules(false)}/>}
        </>
    );
};