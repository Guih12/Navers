
import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './components/login/Login'
import NaverCadastre from './components/NaverCadastre/NaverCadastre';
import Naver from './components/navers/Naver';
import Navers from './components/navers/Navers';
import UpdateNavers from './components/navers/UpdateNavers';
import ProjectCadastre from './components/projectCadastre/ProjectCadastre';
import Project from './components/projects/Project';
import Projects from './components/projects/Projects';
import UpdateProject from './components/projects/UpdateProject';
import Signup from './components/signup/Signup';

function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={Signup}/>
        <div className="container">
          <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/navers" component={Navers} />
            <Route path="/cadastre-naver/" component={NaverCadastre} />
            <Route path="/naver/:id" component={Naver} />
            <Route path="/naver-update/:id" component={UpdateNavers} />
            <Route path="/projects" component={Projects} />
            <Route path="/cadastre-project" component={ProjectCadastre} />
            <Route path="/project/:id" component={Project} />
            <Route path="/project-update/:id" component={UpdateProject} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
