import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background-color: rgb(214, 228, 228);
  padding: 0 10px;
`;

const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;
  max-width: unset;
  width: 90%;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 160px 50px 160px 50px;
    max-width: 990px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 46px;
  font-weight: 800;
  margin-top: 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    line-height: 68px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledInput = styled.input`
  -webkit-box-align: stretch;
  align-items: stretch;
  box-shadow: rgb(207 223 222) 0 0 3px 3px;
  height: 64px;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 5px 25px;
  font-size: 16pt;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  width: 70%;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 60%;
  }
`;

const StyledButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 0 5px 5px 0;
  background-color: rgb(243, 243, 243);
  color: rgb(85, 85, 85);
  font-size: 16pt;
  display: inline-block;
  vertical-align: middle;
  appearance: none;
  top: 0;
  right: 10px;
  border: none;
  outline: none;
  transition: background-color 0.3s ease 0s;
`;

const NewsLetter = () => {
  return (
    <Wrapper>
      <Header>
        <Title>
          Subscribe to our newsletter for news, tips and special deals
        </Title>
        <Desc>
          Let us keep you informed about everything Coffee by Benjamin and be
          one of the first to know about news, tips and special deals.
        </Desc>
        <form>
          <StyledInput type="email" placeholder="Your email" />
          <StyledButton> → </StyledButton>
        </form>
      </Header>
    </Wrapper>
  );
};

export default NewsLetter;
