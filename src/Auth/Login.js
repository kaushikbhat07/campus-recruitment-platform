import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import * as authActions from "../Redux/Actions/AuthActions";
import { bindActionCreators } from "redux";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjWgDqwaMPRxYmg_SuH3S9AFnWF1PrdYw",
    authDomain: "campus-hire.firebaseapp.com",
    projectId: "campus-hire",
    storageBucket: "campus-hire.appspot.com",
    messagingSenderId: "497233302397",
    appId: "1:497233302397:web:b5141527fc94bb3a75f214",
    measurementId: "G-YDZ38Z0T13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    state = {
        form: {
            validated: false,
        },
        login: {},
    };

    componentDidMount() {
        this.props.actions.checkAuthStatus();
    }
    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        this.setState({
            login: {
                ...this.state.login,
                [event.target.name]: event.target.value,
            },
        });
        console.log(this.state.login);
    };

    /**
     * Shows error/success message under forms
     */
    validateForm = () => {
        const formUpdatedState = {
            ...this.state.form,
            validated: true,
        };
        this.setState({ form: formUpdatedState });
    };

    /**
     * Does bootstrap form validation
     * @param {DOM event} event
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log("NO GO for submission");
            event.stopPropagation();

            this.validateForm();
        } else {
            this.validateForm();

            console.log("OK for submission");
            console.log(this.state.login);

            this.props.actions.login(this.state.login);
        }
    };

    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: "/student/loggedIn",
        // We will display Google and Facebook as auth providers.
        signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    };

    render() {
        const form = this.state.form;

        return (
            <Row>
                <Card body className="shadow">
                    <h5>Student Login</h5>
                    <hr />

                    {/* <LoginForm
                        form={form}
                        handleSubmit={this.handleSubmit}
                        handleFormChange={this.handleFormChange}
                    /> */}
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebaseApp.auth()}
                    />
                </Card>
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
            login: bindActionCreators(authActions.login, dispatch),
            checkAuthStatus: bindActionCreators(
                authActions.checkAuthStatus,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
