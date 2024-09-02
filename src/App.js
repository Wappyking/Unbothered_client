import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PageTitle from "./components/PageTitle";
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  render() {
    return (
      <>
        <Router link={Link}>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>

              <Route
                exact
                path="/about"
                element={
                  ((<About />),
                  (<PageTitle title="Waps Tech Hive - About Us" />))
                }
              ></Route>
              <Route
                exact
                path="/contact-us"
                element={
                  ((<ContactUs />),
                  (<PageTitle title="Waps Tech Hive - Contact Us" />))
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
