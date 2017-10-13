import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Header from './components/Header';
=======



import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
>>>>>>> 425d50fbdb55e5ecf6ea122b772f8f481201f9e4
import Home from './pages/Home';
import NoMatch from "./pages/NoMatch";
import Hometemp from './components/temphome';
<<<<<<< HEAD
=======
import Header from './components/Header';

>>>>>>> 425d50fbdb55e5ecf6ea122b772f8f481201f9e4
import Registration from './pages/Registration';
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Header component={Header} />
      <Switch>

        <Route exact path="/" component={Home} /> 
        <Route component={NoMatch} />
        <Route exact path='/' component={Hometemp} /> 
        <Route exact path='/registration'  component={Registration}/>
      </Switch>
<<<<<<< HEAD
      {/* <Footer component={Footer} /> */}
=======
      <Footer />

>>>>>>> 425d50fbdb55e5ecf6ea122b772f8f481201f9e4
    </div>
  </Router>

export default App;
