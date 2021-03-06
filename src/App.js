
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <div>
            <Navbar bsClass="App-header">
              <div className="flex">
                <NavLink activeClassName="active" exact to="/"> Home </NavLink>
                <NavLink activeClassName="active" to="/About"> About </NavLink>
                <NavLink activeClassName="active" to="/Contact"> Contact </NavLink>
                <NavLink activeClassName="active" to={`/Random/${Math.floor(Math.random() * 50)}`}> Random </NavLink>
              </div>
            </Navbar>
             {routes}
          </div>
     
      </div>
    );
  }
}

export default App;
