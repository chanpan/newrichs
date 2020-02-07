import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Redirect ,Switch} from "react-router-dom";
import './App.css';

/** components */
import DashboardComponent from './components/dashboard';
import HeaderComponent from './components/header';
import UserComponent from './components/user';
import LoginComponent from './components/auth/login';
import LogoutComponent from './components/auth/logout/LogoutComponent';
import RegisterComponent from './components/auth/register/RegisterComponent';
import { server } from "./constants";

import { getToken } from './actions/LoginAction';
import { connect } from 'react-redux';

const isLoggedIn = ()=>{
  return localStorage.getItem(server.TOKEN_KEY) != null
}
// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      isLoggedIn() === true ? (
        <Component {...props}/>
      )
      :
      (<Redirect to="/login"/>)
    }
  />
);



class App extends Component {
  componentDidMount(){
    this.props.getToken();
  } 
 
  render() {
    // console.log(this.props.tokenReducer);
    let {token} = this.props.tokenReducer;
    return (
      
      <Router>

      {token !== null && <HeaderComponent /> }  
      <Route exact={true} path="/" component={() => (<Redirect to="/login" />)} />
      <SecuredRoute path="/dashboard" component={DashboardComponent}/>
      <SecuredRoute path="/user" component={UserComponent} />
      <SecuredRoute path="/logout" component={LogoutComponent}/>

      <Route path="/register" component={RegisterComponent} />
      <Route path="/login" component={LoginComponent} />
    </Router>
    );
  }

} 
// export default App;

const mapStateToProps = ({ tokenReducer }) => ({
  tokenReducer,
});

const mapDispatchToProps = {
  getToken
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
