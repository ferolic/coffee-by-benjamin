import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Coffees from './Coffees';

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
              <h1 className="title">
                Speciality coffee made by you. This is the home roasting kit.
              </h1>
              <p className="desc">
                Discover coffee like never before. We provide a complete toolkit
                for you to start roasting at home.
              </p>
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
    </Wrapper>
  );
};

export default Home;
