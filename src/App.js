import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Navbar, Footer } from './components';
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
