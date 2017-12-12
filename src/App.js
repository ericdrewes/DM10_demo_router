import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import {HashRouter, Route, NavLink, Switch} from 'react-router-dom';
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
          <Navbar bsClass="App-header">
            <div className="flex">
              <NavLink activeClassName="active" exact to="/"> Home </NavLink>
              <NavLink activeClassName="active" to="/About"> About </NavLink>
              <NavLink activeClassName="active" to="/Contact"> Contact </NavLink>
            </div>
          </Navbar>
            <Switch className="">
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
