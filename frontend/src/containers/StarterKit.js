import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: unset;
  background-color: ${(props) => props.theme.colors.light};
  padding: 130px 0;

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

const TabsWrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const StyledOl = styled.ol`
  display: flex;
  justify-content: space-around;
  padding-left: 0px;
`;

const StyledLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 20px;
  font-size: 20px;
  line-height: 32px;
  width: 25%;
  padding-bottom: 10px;
  border-bottom: 3px solid rgb(239, 239, 239);
  position: relative;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textSecondary};

  &::after {
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: none;
    content: '';
    position: absolute;
    bottom: -3px;
    display: block;
  }
`;

const TabContentWrapper = styled.div`
  position: relative;
  height: 400px;
  margin: 40px 0 0;
`;

const TabContent = styled.div`
  position: absolute;
  width: 100%;
  opacity: 1;
  z-index: 2;
  transition: opacity 0.5s ease 0s;
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

      <TabsWrapper>
        <StyledOl>
          <StyledLi> Roasting Tray </StyledLi>
          <StyledLi> Green Coffees </StyledLi>
          <StyledLi> Thermometer </StyledLi>
          <StyledLi> Mobile App </StyledLi>
        </StyledOl>
        <TabContentWrapper>
          <TabContent>
            <div>
              <Content>
                <ContentDesc>
                  <Title>Specifically designed roasting tray</Title>
                  <Desc>
                    We have specifically designed the tray for the roast
                    process. The metal housing is of the same material as that
                    of a professional roaster and is perforated all-over to
                    ensure that the air supply can evenly roast the beans.
                  </Desc>
                  <a href="/shop">
                    <Button text="Shop All Products" dark />
                  </a>
                </ContentDesc>
                <ContentImg src="../img/tray.jpg" />
              </Content>
            </div>
          </TabContent>
        </TabContentWrapper>
      </TabsWrapper>
    </Wrapper>
  );
};

export default StarterKit;
