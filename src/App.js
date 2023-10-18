import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FlexWrapper } from './components/shared/FlexWrapper';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';

const Wrapper = styled(FlexWrapper)`
  --main_blue: #00AAFF;
  --main_green: #04E061;
  --main_purple: #965EEB;
  --main_red: #FF4053;
  height: ${({height}) => height}px;
  overflow-x: hidden;
  align-items: center;
  white-space: pre-line;
`;

const ComponentWrapper = styled(FlexWrapper)`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 640px) {
    max-width: calc(56vh - 40px);
    min-width: 375px;
    border: 3px solid black;
    border-radius: 20px;
    margin: 20px 0;
  }
`;


function App() {
  const [height, setHeight] = useState(100);
  const progress = useProgressInit();
  const {screen} = progress;

  const Component = screen?.component || (() => null);

  useEffect(() => {
    function handleResize() {
      const viewportHeight = document.documentElement.clientHeight;
      setHeight(viewportHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <ProgressProvider value={progress}>
        <Wrapper height={height}>
          <ComponentWrapper>
            <Component />
          </ComponentWrapper>
        </Wrapper>
      </ProgressProvider>
  );
}

export default App;
