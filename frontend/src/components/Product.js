import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  display: none;
  
  &:nth-child(-n + 3) {
      display : block;
    }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const Popup = styled.div`
  display: ${(props) => (props.showPopup ? 'flex' : 'none')};
  position: absolute;
  z-index: 99;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.light};
  transition: all 0.2s ease 0s;
  transform: translateY(10px);
  opacity: 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  color: ${(props) => (props.dark ? 'white' : 'black')};
  background-color: ${(props) => (props.dark ? 'black' : 'white')};
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 13px 30px;
  white-space: nowrap;
  font-size: 20px;
  border-radius: 8px;
  font-weight: 600;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0 4px 20px;
  flex: 1 1 0%;
  cursor: pointer;
  transition: transform 0.2s ease 0s;
  align-self: center;
  display: inline-block;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 35px;
  display: inline-block;
  animation-name: btnTextAnimate;
  animation-timing-function: ease-in;

  @keyframes btnTextAnimate {
    0% {
      opacity: 0;
      transform: translateY(2px);
    }

    30% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  color: black;
  margin: 19.92px 0;
`;

const Price = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 30px 0;
`;

const Product = ({ product, showPopup }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Link to={`/product/${product._id}`}>
          <Image src={product.image} alt={product.alt} />
        </Link>
        <Popup showPopup={showPopup}>
          <StyledButton className="mr-10">
            <ButtonText> Add To Cart </ButtonText>
          </StyledButton>
          <Link to="/cart" className="link-btn">
            <StyledButton dark>
              <ButtonText> Buy Now </ButtonText>
            </StyledButton>
          </Link>
        </Popup>
      </ImageWrapper>
      <div>
        <Link to={`/product/${product._id}`}>
          <Title> {product.name} </Title>
        </Link>
        <Price> € {product.price} </Price>
      </div>
    </Wrapper>
  );
};

export default Product;
