import React, { Component } from "react";
import api from "../../api";
import RegisterForm from "../forms/RegisterForm";


class RegisterPage extends Component {

    state = {
        serverError: ""
    };

    onRegister = (newUser) => {
        api.user.register(newUser).then(res => {
           if (!res.data.success) {
               this.setState({serverError: res.data.message})
           } else {
               this.props.history.push("/login");
           }
        });
    };


    render(){
        return(
            <div>
                <h1>Register:</h1>
                <RegisterForm register={this.onRegister} serverError={this.state.serverError} />
            </div>
        );
    }
}

export default RegisterPage;