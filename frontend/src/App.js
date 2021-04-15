import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import ShoppingPage from './screens/ShoppingPage';
import ProductPage from './screens/ProductPage';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/product/:id" component={ProductPage} />
      </div>
    </Router>
  );
};

export default App;
