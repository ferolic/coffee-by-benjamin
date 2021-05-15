import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Image, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createOrder } from '../actions/orderActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 24px;
`;

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push('/shipping');
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, order, error, success } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <Wrapper>
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <Container>
          <div className="py-4">
            <CheckoutSteps step1 step2 step3 />
          </div>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={12}>
                  <Card className="p-4 mb-4">
                    <Title> Shipping Address</Title>
                    <Desc>
                      {cart.shippingAddress.address}, <br />
                      {cart.shippingAddress.city},
                      {cart.shippingAddress.postalCode} <br />
                      {cart.shippingAddress.country}.
                    </Desc>
                  </Card>
                </Col>

                <Col md={12}>
                  <Card className="p-4 mb-4">
                    <Title> Order Items </Title>
                    {cart.cartItems.map((item, index) => (
                      <div key={index}>
                        <Row className="mb-4">
                          <Col md={3}>
                            <Image src={item.img} alt={item.alt} fluid />
                          </Col>
                          <Col md={9}>
                            <Link
                              to={`/products/${item.product}`}
                              className="product-link"
                            >
                              <h3> {item.name} </h3>
                            </Link>
                            <Desc>
                              {item.qty} x ${item.price} = $
                              {item.qty * item.price}
                            </Desc>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col md={4}>
              <Card className="p-4 mb-4">
                <Title> ORDER SUMMARY </Title>

                <Row className="mb-3">
                  <Col> Products Price </Col>
                  <Col>$ {cart.itemsPrice}</Col>
                </Row>

                <Row className="mb-3">
                  <Col>Shipping</Col>
                  <Col>$ {cart.shippingPrice}</Col>
                </Row>

                <Row className="mb-3">
                  <Col>Tax</Col>
                  <Col>$ {cart.taxPrice}</Col>
                </Row>

                <Row className="mb-3">
                  <Col>Total</Col>
                  <Col>
                    <strong> $ {cart.totalPrice}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {error && <p> {error} </p>}
                    {loading && <p> Loading... </p>}
                  </Col>
                </Row>

                <Button
                  className="btn bg-dark btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default PlaceOrderScreen;
