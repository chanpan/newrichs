import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { server } from "../../constants";

import { login } from '../../actions/LoginAction';
import { connect } from 'react-redux';


class HeaderComponent extends Component {
    state={
        showLogout:false
    }
    componentDidMount() {
        //console.log(this.props);
        
    }
    static getDerivedStateFromProps(props, state) {
        console.log(localStorage.getItem(server.TOKEN_KEY));
        if (localStorage.getItem(server.TOKEN_KEY) != null) {
            return{
                showLogout:true
            };
        }else{
            return{
                showLogout:false
            };
        }
        // return null;
    } 
    render() {
        const { pathname } = this.props.location;
        const defaultnav = 'nav-link';
        const dashboard = pathname === "/dashboard" ? defaultnav + " active" : defaultnav;
        const user = pathname === "/user" ? defaultnav + " active" : defaultnav;
        return (
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/dashboard" className={dashboard}>
                            Dashboard
                        </Link> {' | '}
                        <Link to="/user" className={user}>
                            เจ้าหน้าที่
                        </Link> 
                        {this.state.showLogout && <Link to="/logout">
                        {' | '} ออกจากระบบ
                        </Link>}

                    </li>

                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ LoginReducer }) => ({
    LoginReducer,
});

const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderComponent));