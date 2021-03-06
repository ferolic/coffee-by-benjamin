import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuSvg, BrandingSvg, CartSvg, CloseSvg } from './Svg';
import { logout } from '../actions/userActions';

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
  animation: ${(props) =>
    props.scrolled ? ' 0.5s ease 0s 1 normal none running animateNav;' : ''};
  position: ${(props) => (props.scrolled ? 'fixed' : '')};
  top: ${(props) => (props.scrolled ? '0' : '')};
  background: ${(props) => (props.scrolled ? 'white' : '')};
  box-shadow: ${(props) =>
    props.scrolled ? 'rgb(0 0 0 / 12%) 0px 2px 8px' : ''};

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }

  @keyframes animateNav {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
  text-transform: capitalize;

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
  font-size: 17px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.linkPrimary};
  font-weight: 500;
  margin-bottom: 16px;
  text-transform: capitalize;

  &:hover {
    color: ${(props) => props.theme.colors.linkPrimary};
  }
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
  const [scroll, setScroll] = useState(false);
  const [offset, setOffset] = useState(0);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const openSlide = () => {
    setOpenSideNav(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSlide = () => {
    setOpenSideNav(false);
    document.body.style.overflow = 'visible';
  };

  const logoutHandler = () => {
    setOpenSideNav(false);
    document.body.style.overflow = 'visible';
    dispatch(logout());
  };

  const logoutHandler2 = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      if (offset > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, [offset]);

  return (
    <div>
      <Wrapper scrolled={scroll}>
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
              {userInfo && (
                <SideNav to="/profile" onClick={closeSlide}>
                  {userInfo.name}
                </SideNav>
              )}
              {userInfo && (
                <SideNav to="/profile" onClick={logoutHandler}>
                  Logout
                </SideNav>
              )}
            </div>

            <div className="link-secondary">
              <SideNav to="/" onClick={closeSlide}>
                Support
              </SideNav>
              <SideNav to="/" onClick={closeSlide}>
                FAQ
              </SideNav>
              <SideNav to="/" onClick={closeSlide}>
                Privacy Policy
              </SideNav>
              <SideNav to="/" onClick={closeSlide}>
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
          {userInfo && (
            <Nav to="/profile" hideonmobile="true">
              {userInfo.name}
            </Nav>
          )}

          {userInfo && (
            <Nav to="/" onClick={logoutHandler2} hideonmobile="true">
              Logout
            </Nav>
          )}
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
