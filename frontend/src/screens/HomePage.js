import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import StarterKit from '../containers/StarterKit';
import MobileStarterKit from '../containers/MobileStarterKit';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.main};

  @media ${(props) => props.theme.mediaQueries.large} {
    min-height: 95vh;
    padding-top: 40px;
    background-size: 100%;
    background-position: 20% 40%;
    background-repeat: no-repeat;
  }
`;

const Showcase = styled.div`
  width: 100%;
  max-width: 2100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex: 1 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const ShowcaseTitle = styled.h2`
  font-size: 32px;
  line-height: 46px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 32px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    line-height: 68px;
    max-width: 100%;
  }
`;

const ShowcaseDesc = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 32px 0;
  color: ${(props) => props.theme.colors.textPrimary};

  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 90%;
  }
`;

const ShowcaseTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShowcaseText = styled.div`
  display: block;
  padding: 25px;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0;
  }
`;

const QrCodeWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    margin-top: 80px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const QrCode = styled.img`
  width: 42px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 72px;
  }
`;

const QrCodeDesc = styled.div`
  padding-left: 8px;
  font-weight: bold;
`;

const ShowcaseImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: row;
    width: 50%;
  }
`;

const ScrollIcon = styled.div`
  width: 23px;
  height: 35px;
  background-image: url('../img/scroll.svg');
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  left: calc(50% - 13px);
  bottom: 30px;
  opacity: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    opacity: 1;
  }
`;

const CoffeeWrapper = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 130px 0;
  }
`;

const CoffeeHeader = styled.div`
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

const CoffeeProductWrapper = styled.div`
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

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p> loading... </p>
      ) : error ? (
        <p> {error} </p>
      ) : (
        <Wrapper>
          <Header>
            <Navbar />
            <Showcase>
              <ShowcaseTextWrapper>
                <ShowcaseText>
                  <ShowcaseTitle>
                    Speciality coffee made by you. This is the home roasting
                    kit.
                  </ShowcaseTitle>
                  <ShowcaseDesc>
                    Discover coffee like never before. We provide a complete
                    toolkit for you to start roasting at home.
                  </ShowcaseDesc>
                  <Link to="/cart/60857dbc35e69d17e4ca7f58?qty=1">
                    <Button text="Buy For €99" />
                  </Link>
                  <Link to="/about">
                    <Button text="Watch Video" dark />
                  </Link>
                  <Link to="/download" className="show-on-mobile">
                    <Button text="Download app" dark />
                  </Link>
                  <QrCodeWrapper>
                    <QrCode src="../img/qrcode.png" />
                    <QrCodeDesc>
                      Scan to download the app (iOS, Android)
                    </QrCodeDesc>
                  </QrCodeWrapper>
                </ShowcaseText>
              </ShowcaseTextWrapper>
              <ShowcaseImg src="../img/showcase.jpg" />
            </Showcase>
            <ScrollIcon> </ScrollIcon>
          </Header>
          <CoffeeWrapper>
            <CoffeeHeader>
              <h2 className="title"> Our Coffees </h2>
              <p className="desc">
                This is our selection of high quality raw coffee beans suitable
                for home roasting.
              </p>
            </CoffeeHeader>
            <CoffeeProductWrapper>
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </CoffeeProductWrapper>
            <Link to="/shop">
              <ShopAllProductsWrapper>
                <ShopAllProducts>
                  <ShopAllProductsText> Shop All Products </ShopAllProductsText>
                </ShopAllProducts>
              </ShopAllProductsWrapper>
            </Link>
          </CoffeeWrapper>
          <StarterKit />
          <MobileStarterKit />
          <NewsLetter />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Home;
