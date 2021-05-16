import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { listMyOrders } from '../actions/orderActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OrderWrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 24px;
  line-height: 38px;
  font-weight: 800;
  text-align: center;
  margin: 19.92px 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 40px;
    line-height: 56px;
    margin: 33.3px 0;
  }
`;

const HeaderDesc = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  margin-top: 0;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.textPrimary};

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
    text-decoration: underline;
  }
`;

const UserProfilePage = ({ history }) => {
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      dispatch(listMyOrders());
    }
  }, [userInfo, dispatch, history]);

  return (
    <>
      {loadingOrders ? (
        <p> Loading... </p>
      ) : errorOrders ? (
        <p> {errorOrders} </p>
      ) : (
        <Wrapper>
          <div className="navbar-wrapper">
            <Navbar />
          </div>
          {orders.length === 0 ? (
            <OrderWrapper>
              <HeaderTitle> My Orders </HeaderTitle>
              <HeaderDesc>
                you don't have any orders,
                <StyledLink to="/shop"> Shop Now </StyledLink>
              </HeaderDesc>
            </OrderWrapper>
          ) : (
            <>
              <Container className="my-1">
                <HeaderTitle> My Orders </HeaderTitle>
                <Row>
                  <Col md={8}>
                    {orders.map((order) => (
                      <div key={order._id}>
                        <Card className="p-4 mb-4">
                          <Row>
                            <Col>
                              <Row>
                                <Col md={7}>
                                  <p>
                                    Id :{' '}
                                    <StyledLink to={`/order/${order._id}`}>
                                      {order._id}
                                    </StyledLink>
                                  </p>
                                </Col>
                                <Col md={3}>
                                  Price :{' '}
                                  <span className="font-weight-bold">
                                    $ {order.totalPrice}
                                  </span>
                                </Col>
                              </Row>
                              <p>
                                Products :{' '}
                                {order.orderItems.map((item) => (
                                  <StyledLink className="pr-4 font-weight-bold">
                                    {item.name}
                                  </StyledLink>
                                ))}
                              </p>

                              {order.isPaid ? (
                                <p> Payment: Paid </p>
                              ) : (
                                <p>Payment : Not Paid </p>
                              )}
                              <StyledLink to={`/order/${order._id}`}>
                                <Button className="btn-sm bg-dark">
                                  Details
                                </Button>
                              </StyledLink>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    ))}
                  </Col>
                  <Col md={4}></Col>
                </Row>
              </Container>
            </>
          )}
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default UserProfilePage;
