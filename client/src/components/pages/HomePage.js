import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth.actions";

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        { isAuthenticated ?
            <button onClick={() => logout()} className="btn btn-primary">Logout</button>
            :
            <Link to="/login">Login</Link>
        }
    </div>
);

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout })(HomePage);
