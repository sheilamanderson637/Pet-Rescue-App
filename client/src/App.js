import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NoMatch from "./pages/NoMatch";
import Hometemp from './components/temphome';
import Registration from './pages/Registration';
import Results from './pages/Resultstest';
import DogQuestionnaire from './pages/DogQuestionnaire'
import Account from "./pages/Account";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Header component={Header} />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path='/hometemp' component={Hometemp} /> 
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/dogform' component={DogQuestionnaire}/>
        <Route exact path="/account" component={Account} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer component={Footer} /> */}
    </div>
  </Router>

export default App;
