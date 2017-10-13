import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Hometemp from './components/temphome';
import Header from './components/Header';

import Registration from './pages/Registration';

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>

        <Route exact path="/" component={Home} /> 
        <Route component={NoMatch} />
        <Route exact path='/' component={Hometemp} /> 
        <Route exact path='/registration'  component={Registration}/>
      </Switch>
      <Footer />

    </div>
  </Router>

export default App;
