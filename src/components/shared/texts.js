import styled from 'styled-components';
import capLeftG from '../../assets/images/capLeftGreen.svg';
import capRightG from '../../assets/images/capRightGreen.svg';
import capLeftB from '../../assets/images/capLeftBlue.svg';
import capRightB from '../../assets/images/capRightBlue.svg';

export const TextMd = styled.p`
  font-size: 16px;

  @media screen and (min-height: 700px) {
    font-size: 17px;
  }
  
  @media screen and (min-height: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px){
    font-size: 13px;
  }

  @media screen and (max-height: 600px) {
    font-size: 13px;
  }
  
  @media screen and (min-height: 900px) {
    font-size: 20px;
  }
`;

export const TextSm = styled.p`
  font-size: 14px;
  line-height: 125%;

  @media screen and (max-width: 320px){
    font-size: 12px;
  }

  @media screen and (max-height: 600px) {
    font-size: 12px;
  }
  
  @media screen and (min-height: 700px) {
    font-size: 15px;
  }
  
  @media screen and (min-height: 900px) {
    font-size: 17px;
  }
`;

export const TextXs = styled.p`
  font-size: 12px;
  line-height: 125%;

  @media screen and (max-width: 320px){
    font-size: 10px;
  }

  @media screen and (max-height: 600px) {
    font-size: 10px;
  }

  @media screen and (min-height: 700px) {
    font-size: 13px;
  }

  @media screen and (min-height: 900px) {
    font-size: 16px;
  }
`;

export const HighlightedText = styled.span`
  background: var(--main_${({color}) => color});
  border-radius: 20px;
  color: white;
  padding: 0 7px 2px;
  margin-left: ${({$isFirstWord}) => $isFirstWord ? '-7px' : 0};
`;

export const UnderlinedText = styled.span`
  position: relative;

  --capImageLeft_blue: url(${capLeftB});
  --capImageRight_blue: url(${capRightB});
  --capImageRight_green: url(${capRightG});
  --capImageLeft_green: url(${capLeftG});
  --underline-color: var(--main_${({color}) => color});
  --underline-intrinsic-width: 2;
  --underline-width: 2;
  --underline-cap-width: 1px;
  --underline-offset-y: 0px;
  --underline-padding-x: 0px;
  --underline-width-scale: calc(var(--underline-width) / var(--underline-intrinsic-width));

  padding: 0 calc(var(--underline-padding-x) + calc(var(--underline-cap-width) * var(--underline-width-scale)));
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-repeat: no-repeat;

  background-image:
          linear-gradient(180deg, var(--underline-color), var(--underline-color)),
          var(--capImageLeft_${({color}) => color}),
          var(--capImageRight_${({color}) => color});
  background-position-x:
          calc(var(--underline-cap-width) * var(--underline-width-scale)),
          0,
          100%;
  background-position-y: calc(100% - var(--underline-offset-y) * -1);
  background-size:
          calc(100% - calc(var(--underline-cap-width) * var(--underline-width-scale) * 2)) calc(var(--underline-width) * 1px),
          auto calc(var(--underline-width) * 1px),
          auto calc(var(--underline-width) * 1px);
`;

export const TextDivider = styled.span`
  display: block;
  margin-bottom: 5px;
`;
