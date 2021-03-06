import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        {/* This is a Default route, */}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
// continue from 2:44
export default App;
