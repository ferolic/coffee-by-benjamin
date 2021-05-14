import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <Wrapper>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Container>
        <Row className="justify-content-center align-items-center minh-75">
          <Col md={6}>
            <CheckoutSteps step1 step2 />
            <Card className="p-4">
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label as="legend">Select Method</Form.Label>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="PayPal or Credit Card"
                      id="PayPal"
                      name="paymentMethod"
                      value="PayPal"
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="custom-checkbox"
                    ></Form.Check>
                  </Col>
                </Form.Group>

                <Button type="submit" className="btn btn-sm bg-dark">
                  Continue
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default PaymentPage;
