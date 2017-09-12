import React, { Component } from "react";
import InlineError from "../../messages/InlineError";

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: {},
            data: {
                email: "",
                password: ""
            }
        };
    }


    onChange = (e) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state.data);
        this.setState({ data: { email: "", password: "" }});
    };

    render(){

        const { data } = this.state;
        const { serverError } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        {serverError && <InlineError text={serverError}/>} 
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="text" value={data.email} name="email" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input className="form-control" type="text" value={data.password} name="password" onChange={this.onChange}/>
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