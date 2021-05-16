import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getOrderDetails, payOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET } from '../constants/orderConstants';

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

const OrderTitle = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.textSecondary};
  text-transform: uppercase;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 24px;
  }
`;

const OrderPage = ({ match, history }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || order._id !== orderId || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successPay, history, userInfo]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <>
      {loading ? (
        <p> Loading... </p>
      ) : error ? (
        <p> {error} </p>
      ) : (
        <Wrapper>
          <div className="navbar-wrapper">
            <Navbar />
          </div>
          <div>
            <Container className="my-4">
              <OrderTitle> ORDER {order._id} </OrderTitle>
              <p className="text-muted mb-4"> Your order has been placed </p>
              <Row>
                <Col md={8}>
                  <Row>
                    <Col md={12}>
                      <Card className="p-4 mb-4">
                        <Title> Shipping </Title>
                        <p>Name : {order.user.name}</p>
                        <p>
                          Email : {''}
                          <a
                            className="product-link"
                            href={`mailto:${order.user.email}`}
                          >
                            {order.user.email}
                          </a>
                        </p>
                        <p>
                          Address :{order.shippingAddress.address},{' '}
                          {order.shippingAddress.city}{' '}
                          {order.shippingAddress.postalCode},{' '}
                          {order.shippingAddress.country}
                        </p>
                        {order.isPaid && (
                          <>
                            {order.isDelivered ? (
                              <p>
                                Delivered At :
                                <strong>{order.deliveredAt}</strong>
                              </p>
                            ) : (
                              <p>
                                Status : {''}
                                <strong>Not Delivered</strong>
                              </p>
                            )}
                          </>
                        )}
                      </Card>
                    </Col>

                    <Col md={12}>
                      <Card className="p-4 mb-4">
                        <Title> Payment Method </Title>
                        <p>Method : {order.paymentMethod}</p>
                        {order.isPaid ? (
                          <p>
                            Paid on: {''}
                            <strong>{order.paidAt.substring(0, 10)}</strong>
                          </p>
                        ) : (
                          <p>
                            Status :<strong> Not Paid </strong>
                          </p>
                        )}
                      </Card>
                    </Col>

                    <Col md={12}>
                      <Card className="p-4 mb-4">
                        <Title> ORDER ITEMS </Title>
                        {order.orderItems.length === 0 ? (
                          <p> Currently you don't have any orders </p>
                        ) : (
                          <>
                            {order.orderItems.map((item, index) => (
                              <div key={index}>
                                <Row className="mb-4">
                                  <Col md={3}>
                                    <Image
                                      src={item.img}
                                      alt={item.alt}
                                      fluid
                                    />
                                  </Col>
                                  <Col md={9}>
                                    <Link
                                      to={`/products/${item.product}`}
                                      className="product-link"
                                    >
                                      <h3> {item.name} </h3>
                                    </Link>
                                    <p>
                                      {item.qty} x ${item.price} = $
                                      {item.qty * item.price}
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            ))}
                          </>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Col>

                <Col md={4}>
                  <Card className="p-4 mb-4">
                    <Title> Order Summary </Title>
                    <Row className="mb-3">
                      <Col> Products Price: </Col>
                      <Col> ${order.itemsPrice} </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col> Shipping: </Col>
                      <Col> ${order.shippingPrice} </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col> Tax: </Col>
                      <Col> ${order.taxPrice} </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col> Total: </Col>
                      <Col> ${order.totalPrice} </Col>
                    </Row>

                    {!order.isPaid && (
                      <>
                        {loadingPay && <p> Loading... </p>}
                        {errorPay && (
                          <p className="text-danger"> {errorPay} </p>
                        )}
                        {!sdkReady ? (
                          <p> Connecting paypal... </p>
                        ) : (
                          <PayPalButton
                            amount={order.totalPrice}
                            onSuccess={successPaymentHandler}
                          />
                        )}
                      </>
                    )}
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default OrderPage;
