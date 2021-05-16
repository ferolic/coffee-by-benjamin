import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { listOrders } from '../actions/orderActions';

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

const OrderListPage = ({ history }) => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);

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
              <Title> Order List </Title>

              <Row>
                <Col md={12}>
                  {orders.map((order) => (
                    <div key={order._id}>
                      <Card className="p-4 my-3">
                        <Row>
                          <Col md={4} className="mb-2">
                            Id :
                            <Link
                              className="link font-weight-bold"
                              to={`/order/${order._id}`}
                            >
                              {order._id}
                            </Link>
                          </Col>

                          <Col md={2} className="mb-2">
                            Amount: $ {order.totalPrice}
                          </Col>

                          {order.isPaid ? (
                            <Col md={2} className="mb-2">
                              Payment :{' '}
                              <span className="text-success font-weight-bold">
                                Paid
                              </span>
                            </Col>
                          ) : (
                            <Col md={2} className="mb-2">
                              Payment :
                              <span className="text-danger font-weight-bold">
                                Not Paid
                              </span>
                            </Col>
                          )}

                          {order.isDelivered ? (
                            <Col md={2} className="mb-2">
                              Status : <br />
                              <span className="text-success font-weight-bold">
                                {order.deliveredAt.substring(0, 10)}
                              </span>
                            </Col>
                          ) : (
                            <Col md={2} className="mb-2">
                              Status : <br />
                              <span className="text-danger font-weight-bold">
                                Not Delivered
                              </span>
                            </Col>
                          )}

                          <Col md={2}>
                            <Link to={`/order/${order._id}`}>
                              <Button className="btn-sm bg-dark">
                                {' '}
                                Details{' '}
                              </Button>
                            </Link>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  ))}
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

export default OrderListPage;
