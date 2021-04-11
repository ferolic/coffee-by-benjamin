import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: unset;
  background-color: ${(props) => props.theme.colors.light};
  padding: 130px 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
  
  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;
  max-width: unset;
  width: 90%;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-top: 0;
    padding-left: 50px;
    padding-right: 50px;
    width: 90%;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  animation: animateOpacity 1.4s;
  
  @keyframes animateOpacity {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 900px;
    flex-direction: row;
  }
`;

const ContentDesc = styled.div`
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
  margin: 33.2px 0px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ContentImg = styled.img`
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

const StarterKit = () => {
  return (
    <Wrapper>
      <Header>
        <h2 className="title"> The Starter Kit </h2>
        <p className="desc">
          Get the freshest coffee experience into your kitchen. Our Starter Kit
          includes everything to turn you into a homeroaster. No prior knowledge
          required, just a love for coffee.
        </p>
      </Header>

      <Tabs className="tabs-wrapper">
        <TabList className="styled-ol">
          <Tab className="styled-li"> Roasting Tray </Tab>
          <Tab className="styled-li"> Green Coffees </Tab>
          <Tab className="styled-li"> Thermometer </Tab>
          <Tab className="styled-li"> Mobile App </Tab>
        </TabList>

        <TabPanel>
          <Content>
            <ContentDesc>
              <Title> Specifically designed roasting tray </Title>
              <Desc>
                We have specifically designed the tray for the roast process.
                The metal housing is of the same material as that of a
                professional roaster and is perforated all-over to ensure that
                the air supply can evenly roast the beans.
              </Desc>
              <a href="/shop">
                <Button text="Shop All Products" dark />
              </a>
            </ContentDesc>
            <ContentImg src="../img/tray.jpg" />
          </Content>
        </TabPanel>

        <TabPanel>
          <Content>
            <ContentDesc>
              <Title> Three premium green coffees </Title>
              <Desc>
                Three types of the highest quality coffee beans complete the
                package. Unroasted coffee beans from the east coast of Africa:
                from Kenya, Tanzania, and Ethiopia.
              </Desc>
              <a href="/shop">
                <Button text="Shop All Products" dark />
              </a>
            </ContentDesc>
            <ContentImg src="../img/coffees.jpg" />
          </Content>
        </TabPanel>

        <TabPanel>
          <Content>
            <ContentDesc>
              <Title> Bluetooth Thermometer </Title>
              <Desc>
                We want to make sure that your oven indicates the right
                temperature. Thanks to the supplied wireless Bluetooth
                thermometer, we assure you of an optimal roast!
              </Desc>
              <a href="/shop">
                <Button text="Shop All Products" dark />
              </a>
            </ContentDesc>
            <ContentImg src="../img/thermometer.jpg" />
          </Content>
        </TabPanel>

        <TabPanel>
          <Content>
            <ContentDesc>
              <Title> Coffee by Benjamin application </Title>
              <Desc>
                Download the Coffee by Benjamin app (iOS, Android) and connect
                your Bluetooth thermometer to keep track of the temperature,
                time and statistics of your roast.
              </Desc>
              <a href="/shop">
                <Button text="Shop All Products" dark />
              </a>
            </ContentDesc>
            <ContentImg src="../img/app.jpg" />
          </Content>
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

export default StarterKit;
