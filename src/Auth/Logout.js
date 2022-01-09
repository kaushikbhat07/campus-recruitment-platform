import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../Redux/Actions/AuthActions";

class Logout extends Component {
    componentDidMount() {
        this.props.actions.logout();
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
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
