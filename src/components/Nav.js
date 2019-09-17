import React, {Component} from "react";
import "../styles/Nav.css";

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            navButtonStatus: "side-menu"
        }
    }

    toggle = () => {
        // const {navButtonStatus} = this.state; use to destructure
        if(this.state.navButtonStatus === "side-menu-close" || this.state.navButtonStatus === "side-menu") {
            this.setState({navButtonStatus: "side-menu-open"});
        } else if(this.state.navButtonStatus === "side-menu-open") {
            this.setState({navButtonStatus: "side-menu-close"});
        }
    }

    render() {
        const {navButtonStatus} = this.state;
        return (
            <>
                <nav className="nav-container">
                    <div className="site-title">
                        <h1>Start Bootstrap</h1>
                    </div>
                    <div>
                        <ul>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                            <button className="hamburger">
                                MENU
                                <span onClick={this.toggle}>&#9776;</span>
                            </button>
                        </ul>
                    </div>
                </nav>
                <div className={`${navButtonStatus} side-menu-routes`}>
                    <h4>SERVICES</h4>
                    <h4>PORTFOLIO</h4>
                    <h4>ABOUT</h4>
                    <h4>TEAM</h4>
                    <h4>CONTACT</h4>
                </div>
            </>
        )
    }
}