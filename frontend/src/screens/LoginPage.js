import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { login } from '../actions/userActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Wrapper>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div>
        <Container>
          <Row className="justify-content-center align-items-center minh-75">
            <Col md={7}>
              <div className="text-center mt-4">
                <h4 className="mt-4"> SIGN IN </h4>
                <Form.Text className="text-muted">
                  Please sign in to continue.
                </Form.Text>
                {loading && <p className="text-muted"> Loading... </p>}
                {error && <p className="text-danger"> {error} </p>}
              </div>
              <Form onSubmit={submitHandler} className="my-4">
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    Coffee By Benjamin never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button className="bg-dark btn-sm" type="submit">
                  Login
                </Button>
                <p className="pt-3">
                  New user?{' '}
                  <Link to="/register" className="link">
                    Register
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default LoginPage;
