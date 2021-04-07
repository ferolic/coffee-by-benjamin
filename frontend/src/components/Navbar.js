import React from 'react';
import styled from 'styled-components';
import { MenuSvg, BrandingSvg, CartSvg } from './Svg';

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

const Navbar = () => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('navbar-scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <Wrapper className="navbar">
        <MenuSvg />
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
