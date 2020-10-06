import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import { Navbar, Footer } from './components';
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/about"]}><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="*" exact={true}><NotFound /></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
