import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.main};

  @media ${(props) => props.theme.mediaQueries.large} {
    min-height: 95vh;
    padding-top: 40px;
    background-size: 100%;
    background-position: 20% 40%;
    background-repeat: no-repeat;
  }
`;

const Home = () => {

  return (
    <Wrapper>
      <Header>
        <Navbar />
      </Header>
    </Wrapper>
  );
};

export default Home;
