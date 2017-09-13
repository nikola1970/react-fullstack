import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth.actions";

class LoginPage extends Component {

    state = { serverError: "" };

    handleLogin = (credentials) => {
      this.props.login(credentials).then(res => {
          if (!res.data.success) {
              this.setState({ serverError: res.data.message });
          } else {
              this.props.history.push("/");
          }
      }).catch(err => this.setState({ serverError: err.response.statusText }));
    };

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-5">
                        <h1>Login:</h1>
                        <LoginForm login={this.handleLogin} serverError={this.state.serverError} />
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, { login })(LoginPage);