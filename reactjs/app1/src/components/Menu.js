import React, { Component } from "react";

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogedIn: false
        }
    }

    doLogIn = () => {
        this.setState({ isLogedIn: true })
    }

    guestUser = () => {
    
        if (this.state.isLogedIn === false) {
            
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Register
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.doLogIn} className="nav-link" href="#">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Forgot Password
                        </a>
                    </li>

                </>
            );
        }

    }

    user = () => {

        if (this.state.isLogedIn === true) {

            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Cart
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Checkout
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Change Password
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.doLogOut} className="nav-link" href="#">
                            Logout
                        </a>
                    </li>

                </>
            );

        }

    }

    doLogOut = () => {
        this.setState({ isLogedIn: false })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            My Menu
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarMenu"
                            aria-controls="navbarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Shop
                                    </a>
                                </li>
                                {this.guestUser()}
                                {this.user()}
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
        );
    }
}
