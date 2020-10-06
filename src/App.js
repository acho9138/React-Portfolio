import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import { Navbar, Footer } from './components';
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;

/* <Redirect to="/about" />
          </Route> */