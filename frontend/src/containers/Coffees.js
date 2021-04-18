import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../components/Product';
import axios from 'axios';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <Header>
        <h2 className="title"> Our Coffees </h2>
        <p className="desc">
          This is our selection of high quality raw coffee beans suitable for
          home roasting.
        </p>
      </Header>
      <ProductWrapper>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ProductWrapper>
      <Link to="/shop">
        <ShopAllProductsWrapper>
          <ShopAllProducts>
            <ShopAllProductsText> Shop All Products </ShopAllProductsText>
          </ShopAllProducts>
        </ShopAllProductsWrapper>
      </Link>
    </Wrapper>
  );
};

export default Coffees;
