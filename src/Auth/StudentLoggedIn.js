import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as authActions from "../Redux/Actions/AuthActions";
import { bindActionCreators } from "redux";

class StudentLoggedIn extends Component {
    componentDidMount() {
        this.props.actions.checkAuthStatus();
    }

    render() {
        return (
            <Row>
                {/* <Card body className="shadow"> */}
                <Alert variant="success">Student Login Success!</Alert>
                {/* </Card> */}
            </Row>
        );
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
            checkAuthStatus: bindActionCreators(
                authActions.checkAuthStatus,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentLoggedIn);
