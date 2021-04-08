import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const StyledLink = styled.a`
  height: 16px;
`;

const NavWrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    display: block;
    vertical-align: middle;
  }
`;

const Nav = styled.a`
  color: ${(props) => props.theme.colors.linkPrimary};
  font-weight: 500;
  margin-right: 16px;
  transition: color 0.3s ease 0s;
  line-height: 22px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: ${(props) => (props.hideOnMobile ? 'none' : 'block')};
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

const SideNav = styled.a`
  display: block;
  font-size: 20px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.linkPrimary};
  font-weight: 500;
  margin-bottom: 16px;
`;

const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

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
              <SideNav href="/about"> About </SideNav>
              <SideNav href="/shop"> Shop </SideNav>
            </div>

            <div className="link-secondary">
              <SideNav href="/support"> Support </SideNav>
              <SideNav href="/faq"> FAQ </SideNav>
              <SideNav href="/privacy"> Privacy Policy </SideNav>
              <SideNav href="/press-kit"> Press Kit </SideNav>
            </div>
          </div>
        </SideNavbar>

        <StyledLink href="/">
          <BrandingSvg />
        </StyledLink>
        <NavWrapper>
          <Nav href="/about" hideOnMobile>
            About
          </Nav>
          <Nav href="/shop" hideOnMobile>
            Shop
          </Nav>
          <Nav href="/cart">
            <CartSvg />
          </Nav>
        </NavWrapper>
      </Wrapper>
    </div>
  );
};

export default Navbar;
