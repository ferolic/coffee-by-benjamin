import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 13px 30px;
  display: inline-block;
  white-space: nowrap;
  border-radius: 8px;
  font-weight: 600;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0 4px 20px;
  flex: 1 1 0%;
  cursor: pointer;
  transition: transform 0.2s ease 0s;
  width: 240px;
  font-size: 15px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: ${(props) => (props.dark ? 'black' : 'white')};
  color: ${(props) => (props.dark ? 'white' : 'black')};

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 480px) {
    font-size: 18px;
    width: unset;
  }
`;

const Text = styled.p`
  line-height: 25px;
  margin: 0;
  padding: 0;
`;

const Button = ({ text, dark }) => {
  return (
    <StyledButton dark={dark}>
      <Text> {text} </Text>
    </StyledButton>
  );
};

export default Button;
