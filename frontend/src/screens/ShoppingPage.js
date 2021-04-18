import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Button from '../components/Button';
import axios from 'axios';

const Shop = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

const FirstProductWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  flex: 1 1 100%;
  min-width: 300px;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex: 0 0 100%;
    margin-bottom: 64px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 48%;
    min-width: unset;
  }
`;

const FirstProductImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 48%;
    margin: 0;
  }
`;

const FirstProductImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const FirstProductInfoWrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45%;
  }
`;

const FirstProductTitle = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  color: black;
  margin: 20px 0 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    margin-top: 0;
  }
`;

const FirstProductPrice = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.45);
  margin: 30px 0px;
`;

const FirstProductBtnWrapper = styled.div`
  position: relative;
  margin-top: 20px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const ShoppingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Shop>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Wrapper>
        <ProductWrapper>
          <FirstProductWrapper>
            <FirstProductImageWrapper>
              <Link to="/products/607c03215d5e1805384c5355">
                <FirstProductImage src="../img/kit.webp" />
              </Link>
            </FirstProductImageWrapper>
            <FirstProductInfoWrapper>
              <Link to="/product/1a">
                <FirstProductTitle> Home roasting kit </FirstProductTitle>
              </Link>
              <FirstProductPrice> € 99.00 </FirstProductPrice>
              <FirstProductBtnWrapper>
                <Button text="Add To Cart" />
                <Button text="Buy Now" dark />
              </FirstProductBtnWrapper>
            </FirstProductInfoWrapper>
          </FirstProductWrapper>

          {products
            .filter((product) => product._id !== '607c03215d5e1805384c5355')
            .map((product) => (
              <div className="w-48" key={product._id}>
                <Product product={product} showPopup />
              </div>
            ))}
        </ProductWrapper>
      </Wrapper>
      <Footer />
    </Shop>
  );
};

export default ShoppingPage;
