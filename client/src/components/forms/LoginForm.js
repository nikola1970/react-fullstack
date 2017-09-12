import React, { Component } from "react";
import InlineError from "../../messages/InlineError";

class LoginForm extends Component {

    state = {
        data: {
            email: "",
            password: ""
        },
        formErrors: {}
    };

    validateErrors = data => {
        const errors = {};
        if (data.email.indexOf("@") < 0 || !data.email.trim().length) errors.email = "Not a valid email!";
        if (!data.password || data.password.length < 6) errors.password = "Password has to be at least 6 characters long";
        return errors;
    };

    onChange = (e) => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateErrors(this.state.data);
        if (Object.keys(errors).length) {
            this.setState({ formErrors: errors });
        } else {
            this.props.login(this.state.data);
            this.setState({ data: { email: "", password: "" }, formErrors: {}});
        }
    };

    render(){

        const { email, password } = this.state.data;
        const { formErrors } = this.state;
        const { serverError } = this.props;

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    { serverError &&  <InlineError text={serverError} />}
                    <div className="form-group">
                        { formErrors.email &&  <InlineError text={formErrors.email} />}
                        <label htmlFor="email">Email:</label>
                        <input className="form-control" type="text" value={email} onChange={this.onChange} name="email" />
                    </div>
                    <div className="form-group">
                        { formErrors.password &&  <InlineError text={formErrors.password} />}
                        <label htmlFor="password">Password:</label>
                        <input className="form-control" type="password" value={password} onChange={this.onChange} name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;