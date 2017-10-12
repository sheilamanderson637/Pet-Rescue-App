import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App;
