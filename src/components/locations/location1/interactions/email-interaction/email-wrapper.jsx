import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2 * var(--screen_padding));
  border-radius: 5px 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 15px;
  background: var(--main_blue);
  border-radius: 10px 10px 0 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const FakeButton = styled.div`
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background: var(--main_${({color}) => color});
  margin-left: 6px;
`;

export const EmailWrapper = ({ children }) => (
  <Wrapper>
    <Header>
      <ButtonsWrapper>
        <FakeButton color={"green"} />
        <FakeButton color={"purple"} />
        <FakeButton color={"red"} />
      </ButtonsWrapper>
    </Header>
    {children}
  </Wrapper>
);
