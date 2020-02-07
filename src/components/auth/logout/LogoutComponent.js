import React, { Component } from 'react';
import { logout,getToken } from '../../../actions/LoginAction';
import { connect } from 'react-redux';

class LogoutComponent extends Component {
    componentDidMount() {
        this.props.logout(this.props.history);
        this.props.getToken();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

// export default LogoutComponent;
const mapStateToProps = ({ LoginReducer,tokenReducer }) => ({
    LoginReducer,tokenReducer
});

const mapDispatchToProps = {
    logout,
    getToken
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);