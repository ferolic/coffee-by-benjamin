import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ShoppingPage from './containers/ShoppingPage';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop" component={ShoppingPage} />
      </div>
    </Router>
  );
};

export default App;
