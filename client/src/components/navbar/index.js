import React, {Component} from 'react';
import Hamburger from "./components/hamburger/index";
import './index.css'

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState((prevState, props) => ({
            open: !prevState.open
        }));
    }

    render() {
        return (
            <div className={"navbar " + (this.state.open ? "open": "")}>
                <div className={"navbar-header-row" }>
                    <h1 className={"navbar-header-title"}>tftbuild</h1>
                    <Hamburger onToggle={() => this.toggle()}/>
                </div>
            </div>
        );
    }
}

export default NavBar;