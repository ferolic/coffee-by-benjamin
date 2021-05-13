import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LoginPage = () => {
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
                <p className="lead text-sm"> Please sign in to continue. </p>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Coffee By Benjamin never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="bg-dark btn-sm" type="submit">
                  Login
                </Button>
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
