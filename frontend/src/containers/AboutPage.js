import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const About = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    padding-top: 40px;
  }
`;

const HeaderTop = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    width: 100%;
    height: 130px;
  }
`;

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;
  max-width: unset;
  width: 90%;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0 50px 100px 0;
    width: 90%;
  }
`;

const VideoModelWrapper = styled.div`
  width: 80vw;
  min-width: 20em;
  height: 400px;
  margin: 0 auto 117px;
  background-color: gray;
  background-size: cover;
  background-position: center center;
  box-shadow: rgb(0 0 0 / 15%) 0 10px 40px;
  border-radius: 8px;
  background-image: url('../img/video-still.jpg');
  object-fit: contain;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 950px;
    height: 578px;
  }
`;

const VideoLink = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-image: url('../img/play.svg');

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 140px;
    height: 140px;
  }
`;

const AboutPage = () => {
  return (
    <About>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <HeaderTop></HeaderTop>
      <Header>
        <h2 className="title">
          We are on a mission to turn coffee lovers into home roasters
        </h2>
        <p className="desc">
          Coffee roasting is simple. You don't require expensive equipment or
          need the knowledge to do so. We provide you all the tools you need to
          get started and discover coffee in a new way. Benjamin is not a
          specific person, but a figure from our history that represents
          everyone. You can create speciality coffee at home.
        </p>
      </Header>
      <VideoModelWrapper>
          <VideoLink></VideoLink>
      </VideoModelWrapper>
    </About>
  );
};

export default AboutPage;
