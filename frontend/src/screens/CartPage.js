import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ShopCartWrapper = styled.div`
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

const Wrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 24px;
  line-height: 38px;
  font-weight: 800;
  text-align: center;
  margin: 33.3px 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const StyledTab = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

const TabTitle = styled.h3`
  display: none;
  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline-block;
    text-align: right;
    font-weight: 300;
    width: 12%;
    font-size: 15px;
    line-height: 16px;
    margin: 15px 0;
  }
`;

const LiWrapper = styled.div`
  flex: 1 0 auto;
  margin: 0;
  padding: 20px 0;
`;

const StyledLi = styled.li`
  position: relative;
  width: 100%;
  align-items: flex-start;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.05);
  border-image: initial;
  border-style: solid none none;
  height: auto;
  margin: 0 auto;
  display: block;
  padding: 10px 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: flex;
    margin: unset;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const LiLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  display: inline-block;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: flex;
    margin: unset;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  max-height: 120px;
  max-width: 120px;
`;

const ProductDesc = styled.div`
  display: inline-block;
  width: 50%;
  position: relative;
  margin-left: 27px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 55%;
    margin-top: 0px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  text-align: left;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    margin-bottom: 10px;
  }
`;

const Remove = styled.p`
  font-size: 15px;
  font-weight: 100;
  color: rgb(194, 62, 62);
  text-decoration: none;
  margin-top: 0;
  line-height: unset;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LiRight = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media ${(props) => props.theme.mediaQueries.large} {
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 50%;
  }
`;

const Price = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
  width: 33%;
  text-align: left;
  display: none;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline-block;
    white-space: nowrap;
  }
`;

const ChangeQtyWrapper = styled.div`
  float: none;
  border-radius: 3px;

  @media ${(props) => props.theme.mediaQueries.large} {
    float: right;
    white-space: nowrap;
  }
`;

const ChangeQtyBtn = styled.button`
  color: rgb(118, 118, 118);
  display: block;
  float: left;
  line-height: 16px;
  width: 25px;
  padding: 2px 0 3.5px;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 6px;
`;

const QtyText = styled.span`
  color: black;
  width: 28px;
  height: 21px;
  line-height: 23px;
  font-size: 15px;
  border: none;
  text-align: center;
  background: transparent;
  display: block;
  float: left;
  padding: 0;
  border-radius: 0;
`;

const TotalProductPrice = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  width: 24.5%;
  text-align: right;
  white-space: nowrap;
`;

const TotalPriceWrapper = styled.div`
  padding: 50px 0 10px;
`;

const StyledTotalPrice = styled.div`
  float: right;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding-bottom: 40px;
`;

const TotalPrice = styled.div`
  margin-left: 5px;
  color: black;
  text-align: right;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0;
`;

const ShippingCost = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.45);
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  float: right;
  
  & > * {
    margin-right: 0;
  }
`;

const CartPage = () => {
  return (
    <Cart>
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <ShopCartWrapper style={{ flex: '1 0 auto' }}>
        <Wrapper>
          <HeaderTitle> Your shopping cart </HeaderTitle>
          <StyledTab>
            <TabTitle> Price </TabTitle>
            <TabTitle> Quantity </TabTitle>
            <TabTitle> Total </TabTitle>
          </StyledTab>

          <LiWrapper>
            <StyledLi>
              <LiLeft>
                <ImageWrapper>
                  <StyledImage src="../img/kenya.webp" />
                </ImageWrapper>
                <ProductDesc>
                  <ProductTitle> Kenya (300g) </ProductTitle>
                  <Remove> Remove </Remove>
                </ProductDesc>
              </LiLeft>

              <LiRight>
                <Price> € 7.50 </Price>
                <ChangeQtyWrapper>
                  <ChangeQtyBtn> − </ChangeQtyBtn>
                  <QtyText> 2 </QtyText>
                  <ChangeQtyBtn> + </ChangeQtyBtn>
                </ChangeQtyWrapper>
                <TotalProductPrice> € 7.50 </TotalProductPrice>
              </LiRight>
            </StyledLi>
          </LiWrapper>

          <div className="pt-20">
            <TotalPriceWrapper>
              <StyledTotalPrice>
                <TotalPrice> € 7.50 </TotalPrice>
                <ShippingCost>
                  Shipping costs excluded (tax may apply)
                </ShippingCost>
                <BtnWrapper>
                  <Button text="Checkout" dark />
                </BtnWrapper>
              </StyledTotalPrice>
            </TotalPriceWrapper>
          </div>
        </Wrapper>
      </ShopCartWrapper>
      <Footer />
    </Cart>
  );
};

export default CartPage;
