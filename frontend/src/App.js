import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Vote from './components/pages/Vote';
import Help from './components/pages/Help';
// import SignUp from './components/pages/SignUp';
import Upload from './components/Upload';
import Otp from './components/Otp';
import Buy from './components/Buy';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/vote' component={Upload} />
          <Route path='/help' component={Help} />
          <Route path='/otp' component={Otp}/>
          <Route path='/voting' component={Buy}/>
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
