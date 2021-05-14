import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import ShoppingPage from './screens/ShoppingPage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import UserProfilePage from './screens/UserProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={UserProfilePage} />
      </div>
    </Router>
  );
};

export default App;
