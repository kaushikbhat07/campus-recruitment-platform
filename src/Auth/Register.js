import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as authActions from "../Redux/Actions/AuthActions";
import { bindActionCreators } from "redux";
import RegisterForm from "./RegisterForm";

class Register extends Component {
    state = {
        form: {
            validated: false,
        },
        register: {},
    };

    componentDidUpdate() {
        // console.log(this.props.user);
    }

    componentDidMount() {
        // console.log(this.props.user);
    }

    /**
     * Copy pastas the form values to state
     * @param {DOM event} event
     */
    handleFormChange = (event) => {
        this.setState({
            register: {
                ...this.state.register,
                [event.target.name]: event.target.value,
            },
        });
        console.log(this.state.register);
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
            console.log(this.state.register);

            this.props.actions.register(this.state.register);
            this.props.actions.checkAuthStatus();
        }
    };

    render() {
        const form = this.state.form;

        return (
            <Row>
                <Card body className="shadow">
                    <h5>Admin Register</h5>
                    <hr />

                    <RegisterForm
                        form={form}
                        handleSubmit={this.handleSubmit}
                        handleFormChange={this.handleFormChange}
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
            register: bindActionCreators(authActions.register, dispatch),
            checkAuthStatus: bindActionCreators(
                authActions.checkAuthStatus,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
