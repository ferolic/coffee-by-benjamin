import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getOrderDetails } from '../actions/orderActions';

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
  margin: 20px 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 24px;
    margin: 22px 0;
  }
`;

const OrderPage = ({ match, history }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

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
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order]);

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
                        {order.isDelivered ? (
                          <p>
                            Delivered At :
                            <strong >
                              {order.deliveredAt}
                            </strong>
                          </p>
                        ) : (
                          <p>
                            Status : {''}
                            <strong>
                              Not Delivered
                            </strong>
                          </p>
                        )}
                      </Card>
                    </Col>

                    <Col md={12}>
                      <Card className="p-4 mb-4">
                        <Title> Payment Method </Title>
                        <p>Method : {order.paymentMethod}</p>
                        {order.isPaid ? (
                          <p>
                            Paid on:
                            <strong>
                              {order.paidAt}
                            </strong>
                          </p>
                        ) : (
                          <p>
                            Status :
                            <strong>
                              {' '}
                              Not Paid{' '}
                            </strong>
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

                    <Button className="btn btn-block bg-dark"> Pay Now </Button>
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
