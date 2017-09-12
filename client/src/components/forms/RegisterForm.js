import React, { Component } from "react";
import InlineError from "../../messages/InlineError";

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: {},
            data: {
                email: "",
                password: "",
                repeatPassword: ""
            }
        };
    }

    validateErrors = data => {
        const errors = {};
        if (data.email.indexOf("@") < 0 || !data.email.trim().length) errors.email = "Not a valid email!";
        if (data.password !== data.repeatPassword) errors.repeatPassword = "Passwords are not identical";
        if (!data.password || data.password.length < 6) errors.password = "Password has to be at least 6 characters long";
        return errors;
    };


    onChange = (e) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }});

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateErrors(this.state.data);
        if (Object.keys(errors).length) {
            this.setState({ errors });
        } else {
            this.props.register({ email: this.state.data.email, password: this.state.data.password });
            this.setState({ data: { email: "", password: "", repeatPassword: "" }, errors: {}});
        }
    };

    render(){

        const { data, errors } = this.state;
        const { serverError } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        {serverError && <InlineError text={serverError}/>} 
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                {errors.email && <InlineError text={errors.email}/>}
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="text" value={data.email} name="email" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                {errors.password && <InlineError text={errors.password}/>}
                                <label htmlFor="password">Password:</label>
                                <input className="form-control" type="password" value={data.password} name="password" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                {errors.repeatPassword && <InlineError text={errors.repeatPassword}/>}
                                <label htmlFor="repeatPassword">Repeat password:</label>
                                <input className="form-control" type="password" value={data.repeatPassword} name="repeatPassword" onChange={this.onChange}/>
                            </div>
                            <button className="btn btn-primary">Register!</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}

export default RegisterForm;