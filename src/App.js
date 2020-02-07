import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

/** components */
import DashboardComponent from './components/dashboard';
import HeaderComponent from './components/header';
import UserComponent from './components/user';
import LoginComponent from './components/auth/login';
import LogoutComponent from './components/auth/logout/LogoutComponent';
import RegisterComponent from './components/auth/register/RegisterComponent';


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Route exact={true} path="/" component={() => (<Redirect to="/login" />)} />
      <Route path="/dashboard" component={DashboardComponent} />
      <Route path="/user" component={UserComponent} />
      <Route path="/register" component={RegisterComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/logout" component={LogoutComponent}/>
       
    </Router>
  );
}

export default App;
