import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMyOrders } from '../actions/orderActions';

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
        <div>
          {orders.length === 0 ? (
            <p> You don't have any orders </p>
          ) : (
            <>
              {orders.map((order) => (
                <div key={order._id}>
                  <p> {order._id} </p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
