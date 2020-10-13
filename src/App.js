import React, { Component } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import School from "./components/School";
import Cafe from "./components/Cafe";
import QnA from "./components/QnA";
import Kor from "./components/Kor";
import Land from "./components/Land";
import Home from "./components/Home";

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
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
  width: 20vh;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #dfdfdf;
    color: #848484;
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
              <Link className="Link" to="/atschool">
                AtSchool
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/cafe">
                Restaurant
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/kor">
                Korean Food
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/land">
                Landmark
              </Link>
            </Nav>
            <Nav>
              <Link className="Link" to="/qna">
                Q&A
              </Link>
            </Nav>
          </NavWrapper>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/atschool" component={School} />
            <Route path="/cafe" component={Cafe} />
            <Route path="/qna" component={QnA} />
            <Route path="/kor" component={Kor} />
            <Route path="/land" component={Land} />
          </Switch>
        </BrowserRouter>
      </Body>
    );
  }
}

export default App;
