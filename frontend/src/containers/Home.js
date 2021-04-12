import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

import Coffees from './Coffees';
import StarterKit from './StarterKit';
import MobileStarterKit from './MobileStarterKit';
import NewsLetter from './NewsLetter';

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

const Showcase = styled.div`
  width: 100%;
  max-width: 2100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex: 1 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const ShowcaseTitle = styled.h2`
  font-size: 32px;
  line-height: 46px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 32px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    line-height: 68px;
    max-width: 100%;
  }
`;

const ShowcaseDesc = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 32px 0;
  color: ${(props) => props.theme.colors.textPrimary};

  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 90%;
  }
`;

const ShowcaseTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShowcaseText = styled.div`
  display: block;
  padding: 25px;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0;
  }
`;

const QrCodeWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    margin-top: 80px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const QrCode = styled.img`
  width: 42px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 72px;
  }
`;

const QrCodeDesc = styled.div`
  padding-left: 8px;
  font-weight: bold;
`;

const ShowcaseImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: row;
    width: 50%;
  }
`;

const ScrollIcon = styled.div`
  width: 23px;
  height: 35px;
  background-image: url('../img/scroll.svg');
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  left: calc(50% - 13px);
  bottom: 30px;
  opacity: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    opacity: 1;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Navbar />
        <Showcase>
          <ShowcaseTextWrapper>
            <ShowcaseText>
              <ShowcaseTitle>
                Speciality coffee made by you. This is the home roasting kit.
              </ShowcaseTitle>
              <ShowcaseDesc>
                Discover coffee like never before. We provide a complete toolkit
                for you to start roasting at home.
              </ShowcaseDesc>
              <a href="/product/1">
                <Button text="Buy For €99" />
              </a>
              <a href="/about">
                <Button text="Watch Video" dark />
              </a>
              <a href="/download" className="show-on-mobile">
                <Button text="Download app" dark />
              </a>
              <QrCodeWrapper>
                <QrCode src="../img/qrcode.png" />
                <QrCodeDesc>Scan to download the app (iOS, Android)</QrCodeDesc>
              </QrCodeWrapper>
            </ShowcaseText>
          </ShowcaseTextWrapper>
          <ShowcaseImg src="../img/showcase.jpg" />
        </Showcase>
        <ScrollIcon> </ScrollIcon>
      </Header>
      <Coffees />
      <StarterKit />
      <MobileStarterKit />
      <NewsLetter />
      <Footer />
    </Wrapper>
  );
};

export default Home;
