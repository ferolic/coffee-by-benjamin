import React from 'react';
import styled from 'styled-components';
import { FbSvg, InstaSvg, TwitterSvg } from './Svg';

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding: 30px 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media ${(props) => props.theme.mediaQueries.large} {
    margin-top: 0;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const StyledSpan = styled.span`
  left: 0;
  height: 2px;
  margin-top: -30px;
  position: absolute;
  width: 100%;
  background-color: rgb(250, 250, 250);
  display: block;
`;

const CopyRight = styled.div`
  color: rgb(24, 24, 24);
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline-block;
    width: auto;
  }
`;

const LinksWrapper = styled.div`
  text-align: left;
  margin-left: 0;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline-block;
    text-align: left;
    margin-left: 40px;
    width: auto;
  }
`;

const LinkText = styled.p`
  display: block;
  padding: 0;
  color: rgb(24, 24, 24);
  transition: opacity 0.3s ease 0s;
  font-weight: 500;
  margin: 16px 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: inline;
    padding: 20px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const IconsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: auto;
    margin-top: 0;
  }
`;

const Icon = styled.div`
  display: inline-block;
  padding-right: 19px;
  transition: opacity 0.3s ease 0s;

  &:hover {
    opacity: 0.6;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledSpan></StyledSpan>
      <div>
        <CopyRight> © 2021 - Coffee by Benjamin </CopyRight>
        <LinksWrapper>
          <a href="/faq">
            <LinkText> FAQ </LinkText>
          </a>

          <a href="/privacy">
            <LinkText> Privacy Policy </LinkText>
          </a>

          <a href="/support">
            <LinkText> Support </LinkText>
          </a>

          <a href="/press-kit">
            <LinkText> Press Kit </LinkText>
          </a>
        </LinksWrapper>
      </div>

      <IconsWrapper>
        <Icon>
          <a
            href="https://www.instagram.com/coffeebybenjamin/"
            rel="noreferrer"
            target="_blank"
          >
            <InstaSvg />
          </a>
        </Icon>

        <Icon>
          <a
            href="https://www.facebook.com/coffeebybenjamin/"
            rel="noreferrer"
            target="_blank"
          >
            <FbSvg />
          </a>
        </Icon>

        <Icon>
          <a
            href="https://twitter.com/coffeebyben"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterSvg />
          </a>
        </Icon>
      </IconsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
