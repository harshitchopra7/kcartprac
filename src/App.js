import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Mobiles from './Mobiles/Mobiles';
import Televisions from './Televisions/Televisions';
import 'tachyons';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mobiles">
            <Header />
            <Mobiles />
          </Route>
          <Route path="/televisons">
            <Header />
            <Televisions />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>Check Out</h1>
          </Route>
          <Route path="/contact">
            <Header />
            <h1>Contact</h1>
          </Route>
          <Route path="/myorders">
            <Header />
            <h1>My orders</h1>
          </Route>
          <Route path="/myaccount">
            <Header />
            <h1>My account</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
