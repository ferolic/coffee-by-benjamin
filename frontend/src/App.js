import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    background-color: ${(props) => props.theme.colors.main};
  }
`;

const App = () => {
  return <Wrapper>My app</Wrapper>;
};

export default App;
