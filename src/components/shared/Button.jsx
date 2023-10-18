import styled from 'styled-components';
import { TextMd } from './texts';

const TYPE_TO_BG = {
    dark: '#303030',
    light: '#FFFFFF',
    action: 'var(--main_green)'
}

const TYPE_TO_COLOR = {
    dark: '#FFFFFF',
    light: '#303030',
    action: '#FFFFFF'
}

const TYPE_TO_ARROW = {
    dark: '#353535',
    light: '#FFFFFF'
}

const ButtonStyled = styled.button`
  position: relative;
  z-index: 44;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 600ms;
  background: ${({$type, disabled}) => disabled ? '#BEBEC2' : TYPE_TO_BG[$type]};
`;

const ButtonContent = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  flex-direction: ${({$isReverse}) => $isReverse ? 'row-reverse' : 'row'};
  width: 100%;
  transition: color 600ms;
  color: ${({$type, disabled}) => disabled ? '#FFFFFF' : TYPE_TO_COLOR[$type]};
  
  & path {
    transition: fill 600ms;
    fill: ${({$type, disabled}) => disabled ? '#BEBEC2' : TYPE_TO_ARROW[$type]};
  }
  
  & div {
    margin: 3px ${({$isReverse}) => $isReverse ? '10px 0 0' : '0 0 10px'};
    transition: background 600ms;
    background: ${({$type, disabled}) => disabled ? '#FFFFFF' : TYPE_TO_COLOR[$type]};
    ${({$isReverse}) => $isReverse ? 'transform: scale(-1, 1)' : ''};
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: min(19px, 5.06vw);
  height: min(19px, 5.06vw);
  min-width: 14px;
  min-height: 14px;
  
  & svg {
    width: 57%;
    height: 57%;
  }
`;

export const Button = ({className, type, children, disabled, onClick, isReverse}) => (
    <ButtonStyled className={className} disabled={disabled} $type={type} onClick={onClick}>
        <ButtonContent $type={type} disabled={disabled} $isReverse={isReverse}>
            <TextMd>{children}</TextMd>
            <ArrowWrapper>
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.02028 5.55731C1.02028 5.22011 1.29353 4.94686 1.63654 4.94104L9.44447 4.94686C9.78748 4.95267 10.0607 5.22592 10.0665 5.56893C10.0665 5.91776 9.79329 6.19101 9.44447 6.19101L1.63654 6.19682C1.29353 6.20264 1.02028 5.92939 1.02028 5.58056L1.02028 5.55731Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.54334 2.2435C6.7817 2.00513 7.17704 2.00513 7.4154 2.24349L10.2932 5.12132C10.5374 5.3655 10.5316 5.75502 10.2932 5.99339L7.4154 8.87122C7.17123 9.1154 6.78752 9.1154 6.54334 8.87122C6.30497 8.63285 6.29916 8.24333 6.53752 8.00496L8.9735 5.56898L6.53752 3.13301C6.29916 2.89464 6.29334 2.50512 6.53752 2.26094L6.54334 2.2435Z"/>
                </svg>
            </ArrowWrapper>
        </ButtonContent>
    </ButtonStyled>
);

export const ButtonCentered = styled(Button)`
    margin: 0 auto;
`;

export const ButtonNoIcon = ({className, type, children, disabled, onClick}) => (
    <ButtonStyled className={className} disabled={disabled} $type={type} onClick={onClick}>
        <ButtonContent $type={type} disabled={disabled}>
            <TextMd>{children}</TextMd>
        </ButtonContent>
    </ButtonStyled>
);

