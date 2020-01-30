import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import authApi from '../../utils/authAPI';
import store from "../../store";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            errors: {}
        };
    }

    static getDerivedStateFromProps(props, state) {
        // if (props.auth.isAuthenticated) {
        //     this.props.history.push("/dashboard") // push user to dashboard when they login
        // }
        return {
            errors: props.errors,
            isAuthenticated: props.auth.isAuthenticated,
        }

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("Will recieve props")
    //     if (nextProps.auth.isAuthenticated) {
    //         this.props.history.push("/dashboard") // push user to dashboard when they login
    //     }
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         })
    //     }
    // }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            name: this.state.name,
            password: this.state.password
        };

        authApi.login((res)=> {
            store.dispatch (loginUser (res))
        }, userData)

        // console.log(store.getState().auth)

        // this.props.loginUser(userData);

        // console.log(this.state.isAuthenticated)
        // if (this.state.isAuthenticated) {
        //     this.props.history.push("/dashboard") // push user to dashboard when they login
        // }

        // console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Username</label>
                        <span>
                            {errors.name}
                        </span>
                        <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <span>
                            {errors.password}
                        </span>
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                        />
                    </div>

                    <button type="submit">Login</button>

                </form>

            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
