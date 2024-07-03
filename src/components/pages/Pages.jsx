import React from "react";
import { Header } from "../common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Footer } from "../common/Footer";
import { Details } from "../home/details/Details";

import Shop from "./Shop";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/cart/:id">
            <Details />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* Default route */}
          {/* <Route path="/">
            <Redirect to="/Signup" />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
