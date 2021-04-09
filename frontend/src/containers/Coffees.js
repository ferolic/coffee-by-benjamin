import React from 'react';
import styled from 'styled-components';
import Product from '../components/Product';

const Wrapper = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 130px 0;
  }
`;

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;
  max-width: unset;
  width: 90%;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0 50px 100px 50px;
    width: 90%;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 32px;
  line-height: 46px;
  font-weight: 800;
  text-align: center;
  margin: 0 auto 30px;
  max-width: 700px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    line-height: 68px;
  }
`;

const HeaderDesc = styled.p`
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0 auto;
  max-width: 900px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const ShopAllProductsWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 245px;
  margin: 0 auto;
`;

const ShopAllProducts = styled.div`
  color: rgb(255, 255, 255);
  background-color: rgb(24, 24, 24);
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 13px 30px;
  display: inline-block;
  white-space: nowrap;
  font-size: 20px;
  border-radius: 8px;
  font-weight: 600;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
  flex: 1 1 0%;
  cursor: pointer;
  transition: transform 0.2s ease 0s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ShopAllProductsText = styled.p`
  line-height: 25px;
  margin: 0px;
  padding: 0px;
`;

const Coffees = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle> Our Coffees </HeaderTitle>
        <HeaderDesc>
          This is our selection of high quality raw coffee beans suitable for
          home roasting.
        </HeaderDesc>
      </Header>
      <ProductWrapper>
        <Product
          id="1"
          title="Kenya (300g)"
          alt="Kenya (300g) product shot"
          src="../img/kenya.webp"
          price="7.50"
        />

        <Product
          id="2"
          title="Moshi (300g)"
          alt="Moshi (300g) product shot"
          src="../img/moshi.webp"
          price="7.30"
        />

        <Product
          id="3"
          title="Yirgachefe (300g)"
          alt="Yirgachefe (300g) product shot"
          src="../img/yirgachefe.webp"
          price="6.20"
        />
      </ProductWrapper>
      <a href="/shop">
        <ShopAllProductsWrapper>
          <ShopAllProducts>
            <ShopAllProductsText> Shop All Products </ShopAllProductsText>
          </ShopAllProducts>
        </ShopAllProductsWrapper>
      </a>
    </Wrapper>
  );
};

export default Coffees;
