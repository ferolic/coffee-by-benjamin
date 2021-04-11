import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(rgb(250, 250, 250) 0%, rgb(255, 255, 255) 100%);
  display: none;
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: block;
  }
`;

const Header = styled.div`
  width: 100%;
  max-width: 632px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 96px;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  line-height: 46px;
  text-align: center;
  color: black;
  margin: 0 0 32px;
  font-weight: 800;
`;

const HeaderDesc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
`;

const StyledBody = styled.div`
  width: 100%;
  max-width: 1308px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 40px;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 38px;
  text-align: left;
  color: black;
  margin: 0 0 32px;
  font-weight: 800;
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 312px;
  margin: auto;
  border-radius: 4px;
  object-fit: contain;
  mix-blend-mode: multiply;
`;

const MobileStarterKit = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle> The Starter Kit </HeaderTitle>
        <HeaderDesc>
          Get the freshest coffee experience into your kitchen. Our Starter Kit
          includes everything to turn you into a homeroaster. No prior knowledge
          required, just a love for coffee.
        </HeaderDesc>
      </Header>
      <div className="overflow-hidden">
        <StyledBody>
          <Content>
            <Title> Specifically designed roasting tray </Title>
            <Desc>
              We have specifically designed the tray for the roast process. The
              metal housing is of the same material as that of a professional
              roaster and is perforated all-over to ensure that the air supply
              can evenly roast the beans.
            </Desc>
          </Content>
          <StyledImage src="../img/tray.jpg" />
        </StyledBody>

        <StyledBody>
          <Content>
            <Title>
              Three Premium <br /> green coffees
            </Title>
            <Desc>
              Three types of high-quality coffee beans (32 OZ / 900g in total
              weight) complete the package. Raw coffee beans from the east coast
              of Africa: from Kenya, Tanzania,
              <br />
              and Ethiopia.
            </Desc>
          </Content>
          <StyledImage src="../img/coffees.jpg" />
        </StyledBody>

        <StyledBody>
          <Content>
            <Title>Bluetooth Thermometer</Title>
            <Desc>
              We want to make sure that your oven indicates the right
              temperature. Thanks to the supplied wireless Bluetooth
              thermometer, we assure you of an optimal roast!
            </Desc>
          </Content>
          <StyledImage src="../img/thermometer.jpg" />
        </StyledBody>

        <StyledBody>
          <Content>
            <Title>Coffee by Benjamin app</Title>
            <Desc>
              Download the Coffee by Benjamin app and connect your Bluetooth
              thermometer to keep track of the temperature, time and statistics
              of your roast.
            </Desc>
          </Content>
          <StyledImage src="../img/app.jpg" />
        </StyledBody>
      </div>
    </Wrapper>
  );
};

export default MobileStarterKit;
