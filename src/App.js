import React from 'react';
import Login from "./components/Login/login";
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div id="app"> 

      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/devices' component={Devices} />
          <Route component={() => <div>NotFound</div>} />
        </Switch>

      </HashRouter>
      

    </div>
  );
}

export default App;
