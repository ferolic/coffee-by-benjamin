import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

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
  display: ${(props) => (props.openVideo ? 'none' : 'block')};
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

const StyledIframe = styled.iframe`
  display: ${(props) => (props.openVideo ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 8px;
`;

const AboutDescWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: unset;
  padding: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0 0 130px;
  }
`;

const AboutDesc = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 900px;
    flex-direction: row;
  }
`;

const Content = styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 20px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45%;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 20px 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 4px;
  margin-bottom: 80px;
  border: 0;
  object-fit: cover;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45%;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const AboutPage = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const playVideo = () => {
    setOpenVideo((openVideo) => !openVideo);
  };

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
        <StyledIframe
          title="video"
          src="https://www.youtube.com/embed/kAvr2CCYYLA?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          openVideo={openVideo}
        ></StyledIframe>
        <VideoLink openVideo={openVideo} onClick={playVideo}></VideoLink>
      </VideoModelWrapper>

      <AboutDescWrapper>
        <AboutDesc>
          <Content>
            <Title> Everything you need to become a homeroaster </Title>
            <Desc>
              Coffee by Benjamin is your home roasting coffee experience. Want
              to know everything about roasting green coffee in your own oven?
              Our Starter Kit contains everything to turn you into a home
              roaster; a custom metal tray, Bluetooth thermometer, the Coffee by
              Benjamin app and three high quality coffees.
            </Desc>
          </Content>
          <StyledImage src="../img/roaster.jpg" />
        </AboutDesc>
      </AboutDescWrapper>

      <AboutDescWrapper>
        <AboutDesc className="row-reverse">
          <Content>
            <Title> The best beans for the freshest coffee </Title>
            <Desc>
              We only select raw coffee beans of the highest quality. All our
              coffees are specifically selected because of their home roasting
              capabilities. The Starter Kit contains three premium (AA)
              single-origin coffees, with various flavors and enough for a month
              of your own home roasted coffee.
            </Desc>
          </Content>
          <StyledImage src="../img/beans.jpg" />
        </AboutDesc>
      </AboutDescWrapper>

      <AboutDescWrapper>
        <AboutDesc>
          <Content>
            <Title>The Starter Kit is only the beginning of your journey</Title>
            <Desc>
              All out of coffee? Just reorder your favorite beans from our
              webshop! We plan to release new coffees from other regions on our
              website and app. If Coffee by Benjamin makes you excited about
              roasting, wait until you have experienced your own coffee roasts
              with beans from all over the world. This is only the beginning of
              your journey.
            </Desc>
          </Content>
          <StyledImage src="../img/desc3.jpg" />
        </AboutDesc>
      </AboutDescWrapper>
      <NewsLetter />
      <Footer />
    </About>
  );
};

export default AboutPage;
