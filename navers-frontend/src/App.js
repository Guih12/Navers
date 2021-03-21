
import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/login/Login'
import NaverCadastre from './components/NaverCadastre/NaverCadastre';
import Navers from './components/navers/Navers';

function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <div className="container">
          <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/navers" component={Navers} />
            <Route path="/cadastre-naver" component={NaverCadastre} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
