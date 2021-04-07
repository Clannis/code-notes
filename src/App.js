import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { MainWindow } from './containers/MainWindow';
import { PreferencesWindow } from './containers/PreferencesWindow';
import './assets/sass/main.scss';


const App = () => {

  return (
    <Router>
      <Route exact path="/" component={MainWindow}></Route>
      <Route path="/preferences" component={PreferencesWindow}></Route>
    </Router>
  );
}

export default App
