import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Footer from '../components/Footer';

const Shop = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    padding-top: 40px;
  }
`;

const Wrapper = styled.div`
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

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const ShoppingPage = () => {
  return (
    <Shop>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <Wrapper>
        <ProductWrapper>
          <div className="w-48">
            <Product
              id="2"
              title="Moshi (300g)"
              alt="Moshi (300g) product shot"
              src="../img/moshi.webp"
              price="7.30"
              showPopup
            />
          </div>

          <div className="w-48">
            <Product
              id="3"
              title="Yirgachefe (300g)"
              alt="Yirgachefe (300g) product shot"
              src="../img/yirgachefe.webp"
              price="6.20"
              showPopup
            />
          </div>

          <div className="w-48">
            <Product
              id="4"
              title="East Africa variety pack (900g)"
              alt="East Africa variety pack (900g) shot"
              src="../img/africa.webp"
              price="20.00"
              showPopup
            />
          </div>
        </ProductWrapper>
      </Wrapper>
      <Footer />
    </Shop>
  );
};

export default ShoppingPage;
