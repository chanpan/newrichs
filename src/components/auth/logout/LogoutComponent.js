import React, { Component } from 'react';
import { logout } from '../../../actions/LoginAction';
import { connect } from 'react-redux';

class LogoutComponent extends Component {
    componentDidMount() {
        this.props.logout(this.props.history);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

// export default LogoutComponent;
const mapStateToProps = ({ LoginReducer }) => ({
    LoginReducer,
});

const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);