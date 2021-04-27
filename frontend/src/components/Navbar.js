import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuSvg, BrandingSvg, CartSvg, CloseSvg } from './Svg';

const Wrapper = styled.div`
  padding: 20px 25px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: unset;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: transparent;
  height: 60px;
  z-index: 999;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const StyledLink = styled(Link)`
  height: 16px;
`;

const NavWrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    display: block;
    vertical-align: middle;
  }
`;

const Nav = styled(Link)`
  color: ${(props) => props.theme.colors.linkPrimary};
  font-weight: 500;
  margin-right: 16px;
  transition: color 0.3s ease 0s;
  line-height: 22px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: ${(props) => (props.hideonmobile ? 'none' : 'block')};
  }

  &:hover {
    color: ${(props) => props.theme.colors.linkSecondary};
  }
`;

const MenuSvgWrapper = styled.div`
  display: ${(props) => (props.openSideNav ? 'none' : 'block')};
  z-index: 999;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const CloseSvgWrapper = styled.div`
  display: ${(props) => (props.openSideNav ? 'block' : 'none')};
  z-index: 999;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const SideNavbar = styled.div`
  display: ${(props) => (props.openSideNav ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.light};
  padding: 20px 25px;
  z-index: 500;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const SideNav = styled(Link)`
  display: block;
  font-size: 20px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.linkPrimary};
  font-weight: 500;
  margin-bottom: 16px;
`;

const QtyNo = styled.div`
  position: absolute;
  top: -5px;
  right: -9px;
  width: 15px;
  box-sizing: content-box;
  height: 15px;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  font-size: 10px;
  line-height: 15px;
  background-color: red;
  display: ${(props) => (props.ItemInCart ? 'block' : 'none')};
`;

const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const openSlide = () => {
    setOpenSideNav(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSlide = () => {
    setOpenSideNav(false);
    document.body.style.overflow = 'visible';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.querySelector('.navbar').classList.add('navbar-scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('navbar-scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Wrapper className="navbar">
        <MenuSvgWrapper onClick={openSlide} openSideNav={openSideNav}>
          <MenuSvg />
        </MenuSvgWrapper>

        <CloseSvgWrapper onClick={closeSlide} openSideNav={openSideNav}>
          <CloseSvg />
        </CloseSvgWrapper>

        <SideNavbar openSideNav={openSideNav}>
          <div className="mt-50">
            <div className="mb-32">
              <SideNav to="/about" onClick={closeSlide}>
                About
              </SideNav>
              <SideNav to="/shop" onClick={closeSlide}>
                Shop
              </SideNav>
            </div>

            <div className="link-secondary">
              <SideNav to="/support" onClick={closeSlide}>
                Support
              </SideNav>
              <SideNav to="/faq" onClick={closeSlide}>
                FAQ
              </SideNav>
              <SideNav to="/privacy" onClick={closeSlide}>
                Privacy Policy
              </SideNav>
              <SideNav to="/press-kit" onClick={closeSlide}>
                Press Kit
              </SideNav>
            </div>
          </div>
        </SideNavbar>

        <StyledLink to="/">
          <BrandingSvg />
        </StyledLink>
        <NavWrapper>
          <Nav to="/about" hideonmobile="true">
            About
          </Nav>
          <Nav to="/shop" hideonmobile="true">
            Shop
          </Nav>
          <Nav to="/cart" className="p-relative">
            <CartSvg />
            <QtyNo ItemInCart={cartItems.length > 0}>
              {cartItems.reduce((acc, item) => acc + item.qty, 0)}
            </QtyNo>
          </Nav>
        </NavWrapper>
      </Wrapper>
    </div>
  );
};

export default Navbar;
