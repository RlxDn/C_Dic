import React, { Component } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Recommendation from "./components/Recommendation";
import Auction from "./components/Auction";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Home from "./components/Home";

const Body = styled.div`
  width: 100%;
  height: 100%;
`;
const NavWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 5vh;
  background-color: rgb(235, 239, 241);
`;
const Nav = styled.button`
  flex-grow: 0.1;
  height: 5vh;
  width: 40vh;
  border: none;
  background-color: #2e2e2e;
  color: gray;
  &:hover {
    color: orange;
  }
`;

class App extends Component {
  render() {
    return (
      <Body>
        <BrowserRouter>
          <NavWrapper>
            <Nav>
              <Link className="Link" to="/home">
                Home
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/rec">
                Recommendation
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/auc">
                Auction
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/con">
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/faq">
                FAQ
              </Link>
            </Nav>
          </NavWrapper>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/rec" component={Recommendation} />
            <Route path="/auc" component={Auction} />
            <Route path="/faq" component={FAQ} />
            <Route path="/con" component={Contact} />
          </Switch>
        </BrowserRouter>
      </Body>
    );
  }
}

export default App;
