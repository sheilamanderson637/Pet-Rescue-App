import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NoMatch from "./pages/NoMatch";
import Hometemp from './components/temphome';
import Registration from './pages/Registration';
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Header component={Header} />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path='/hometemp' component={Hometemp} /> 
        <Route exact path='/registration'  component={Registration}/>
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer component={Footer} /> */}
    </div>
  </Router>

export default App;
