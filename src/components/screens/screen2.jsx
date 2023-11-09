import { useState } from 'react';
import styled from 'styled-components';
import meetingBg from '../../assets/images/meeting-bg.svg';
import male from '../../assets/images/male.svg';
import female from '../../assets/images/female.svg';
import { useProgress } from '../../hooks/useProgress';
import { SEX_TYPES } from '../../constants';
import { FlexWrapper } from '../shared/flex-wrapper';
import { LogoHead } from '../shared/logo-head';
import { HighlightedText, TextMd } from '../shared/texts';
import { Button } from '../shared/button';
import { Input } from '../shared/Input';
import { Hexagon } from '../shared/hexagon';

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  padding: var(--screen_padding);
  align-items: center;
  z-index: 1;
`;

const TextWrapper = styled.div`
  margin-top: min(81px, 21.6vw);
  width: 100%;
`;

const InputStyled = styled(Input)`
  margin: min(28px, 7.4vw) min(32px, 8.5vw);
  width: 100%;
`;

const SexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: min(14.4vw, 54px);
`;

const SexBlock = styled(FlexWrapper)`
  align-items: center;
`;

const SexTitle = styled(Hexagon)`
  margin-bottom: min(13px, 3.46vw);
  color: white;
  text-align: center;
  width: 42px;
  height: 33px;
`;

const SexImage = styled.div`
  background: white url(${({src}) => src}) no-repeat center center;
  background-size: cover;
  box-shadow: ${({$isActive}) => $isActive ? '0 0 0 3px var(--main_purple)' : '0 0 20px rgba(0, 0, 0, 0.10)'};
  width: calc((100vw - 2 * var(--screen_padding) - 10px) / 2);
  height: calc((100vw - 2 * var(--screen_padding) - 10px) / 2);
  border-radius: 12px;
  cursor: pointer;
  
  @media screen and (min-width: 640px) {
    height: calc((56vh - 60px - 2 * var(--screen_padding)) / 2);
    width: calc((56vh - 60px - 2 * var(--screen_padding)) / 2);
    min-height: calc((310px - 2 * var(--screen_padding)) / 2);
    min-width: calc((310px - 2 * var(--screen_padding)) / 2);
  }
`;

const Image = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  height: 68.5vw;
  max-height: 40vh;
  background: url(${meetingBg}) no-repeat center 0;
  background-size: cover;
`;

export const Screen2 = () => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const {next, updateProgress} = useProgress();

    const handleNext = () => {
        updateProgress({ name, sex });
        next();
    };

    return (
        <>
            <Wrapper>
                <LogoHead />
                <TextWrapper>
                    <TextMd>
                        <HighlightedText color={'purple'} $isFirstWord>Давай знакомиться</HighlightedText>,
                        {'\n'}
                        чтобы коллеги знали, как к{'\u00A0'}тебе правильно{'\u00A0'}обращаться.
                    </TextMd>
                </TextWrapper>
                <InputStyled
                    placeholder={'Имя'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <SexWrapper>
                    <SexBlock>
                        <SexTitle onClick={() => setSex(SEX_TYPES.male)}>
                            <TextMd>
                                M
                            </TextMd>
                        </SexTitle>
                        <SexImage
                            onClick={() => setSex(SEX_TYPES.male)}
                            src={male}
                            $isActive={sex === SEX_TYPES.male}
                        />
                    </SexBlock>
                    <SexBlock>
                        <SexTitle onClick={() => setSex(SEX_TYPES.female)}>
                            <TextMd>
                                Ж
                            </TextMd>
                        </SexTitle>
                        <SexImage
                            onClick={() => setSex(SEX_TYPES.female)}
                            src={female}
                            $isActive={sex === SEX_TYPES.female}
                        />
                    </SexBlock>
                </SexWrapper>
                <Button type={'dark'} onClick={handleNext} disabled={!name || !sex}>
                    Готово
                </Button>
            </Wrapper>
            <Image />
        </>
    );
};
