import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const HexagonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: -28%;
  right: -28%;
`;

export const Hexagon = (props) => (
  <Wrapper {...props}>
    <Content>{props.children}</Content>
    <HexagonWrapper>
      <svg
        width="66"
        height="35"
        viewBox="0 0 66 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.7636 1.24028L12.4409 0.960172C10.3673 0.946117 8.4556 2.03388 7.40663 3.82602L1.09124 14.6422C0.0422731 16.4344 0.0273515 18.6357 1.05207 20.4207L7.24142 31.3217C8.26599 33.1279 10.1628 34.2415 12.2364 34.2555L53.538 34.5355C55.6115 34.5495 57.5232 33.4618 58.5722 31.6696L64.9088 20.8536C65.9577 19.0614 65.9726 16.8601 64.9479 15.0751L58.7586 4.1741C57.734 2.36791 55.816 1.25419 53.7636 1.24028Z"
          fill="#965EEB"
        />
        <rect
          x="6.065"
          y="8.06509"
          width="54"
          height="19"
          rx="9.5"
          transform="rotate(0.388369 6.065 8.06509)"
          fill="#965EEB"
        />
      </svg>
    </HexagonWrapper>
  </Wrapper>
);
