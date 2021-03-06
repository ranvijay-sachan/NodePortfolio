import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Nav from "../components/nav";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Blog from "./blog";
import Article from "../components/article";

export default class Layout extends React.Component {
  constructor() {
    super();
    ReactGA.initialize("UA-111422776-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    const main = () => (
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
    );
    return (
      <div>
        <BrowserRouter>
          <div id="center-stripe">
            <Nav />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={main} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/blog"}
              component={Blog}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/blog/:id"}
              component={Article}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
