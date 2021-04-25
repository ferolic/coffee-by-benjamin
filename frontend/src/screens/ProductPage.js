import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { listProductDetails } from '../actions/productActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProductDetailsWrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
  margin-top: 80px;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: row;
  }
`;

const ProductDetailsLeft = styled.div`
  width: 100%;
  display: unset;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 48%;
    display: flex;
  }
`;

const ProductDesc = styled.div`
  height: auto;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const ProductTitle = styled.h2`
  font-size: 32px;
  line-height: 46px;
  font-weight: 800;
  order: 1;
  margin: 16px 0;
`;

const ProductPrice = styled.span`
  order: 1;
  display: block;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 20px;
  line-height: 32px;
`;

const ProductImageWrapper = styled.div`
  display: block;
  width: 100%;
  order: 99;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 700px;
  }
`;

const ProductDetailsRight = styled.div`
  display: flex;
  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45%;
  }
`;

const ProductInfo = styled.div`
  height: 100%;
  width: auto;
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 68px;
  font-weight: 800;
  order: 1;
  margin: 16px 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const Price = styled.span`
  order: 1;
  display: block;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 20px;
  line-height: 32px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const QtyContainer = styled.div`
  margin: 32px 0;
`;

const QtyInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 10px 10px 20px;
  border-radius: 8px;
  font-size: 20px;
  margin-left: 20px;
  max-width: 72px;
  line-height: 1.5;
`;

const ActionContainer = styled.div`
  margin: 32px 0;
`;

const StyledHR = styled.hr`
  margin-top: 30px;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const AboutProduct = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-top: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Wrapper>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      {loading ? (
        <h2> loading... </h2>
      ) : error ? (
        <h2> {error} </h2>
      ) : (
        <ProductDetailsWrapper>
          <ProductDetails>
            <ProductDetailsLeft>
              <ProductDesc>
                <ProductTitle> {product.name} </ProductTitle>
                <ProductPrice> € ${product.price} </ProductPrice>
              </ProductDesc>
              <ProductImageWrapper>
                <ProductImage src={product.img} alt={product.alt} />
              </ProductImageWrapper>
            </ProductDetailsLeft>

            <ProductDetailsRight>
              <ProductInfo>
                <Title> {product.name} </Title>
                <Price> € {product.price} </Price>
                <QtyContainer>
                  <label className="fw-600">
                    Quantity
                    <QtyInput
                      type="number"
                      min="0"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </label>
                </QtyContainer>

                <ActionContainer>
                  <span onClick={addToCartHandler}>
                    <Button text="Add To Cart" />
                  </span>
                  <Button text="Buy Now" dark />
                </ActionContainer>
                <StyledHR />
                <AboutProduct>
                  <div>
                    <meta charSet="utf-8" />
                    <span>{product.description}</span>
                  </div>
                </AboutProduct>
              </ProductInfo>
            </ProductDetailsRight>
          </ProductDetails>
        </ProductDetailsWrapper>
      )}
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;
