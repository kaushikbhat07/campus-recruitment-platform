import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../Redux/Actions/AuthActions";

class Logout extends Component {
    state = {
        loggedOut: false,
    };

    componentDidMount() {
        if (!this.state.loggedOut) {
            this.props.actions.logout();
            this.props.actions.checkAuthStatus();
            this.setState({
                loggedOut: true,
            });
        }
    }

    render() {
        return <div>Logged out!</div>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        actions: {
            logout: bindActionCreators(authActions.logout, dispatch),
            checkAuthStatus: bindActionCreators(
                authActions.checkAuthStatus,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
