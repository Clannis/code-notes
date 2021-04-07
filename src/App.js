import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { mainWindow } from './components/mainWindow';
import { preferencesWindow } from './components/preferencesWindow';
import './assets/sass/main.scss';


const App = () => {

  return (
    <Router>
      <Route exact path="/" component={mainWindow}></Route>
      <Route path="/preferences" component={preferencesWindow}></Route>
    </Router>
  );
}

export default App
