import React, {Component} from 'react';
import Hamburger from "./components/hamburger/index";
import IconClass from "../icons/classes/index";
import IconItems from "../icons/items/index";
import IconPercentage from "../icons/percentage/index";
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
                <div className={"navbar-content"}>
                    <div className={"navbar-header-row" }>
                        <h1 className={"navbar-header-title"}>tftbuild</h1>
                        <Hamburger onToggle={() => this.toggle()}/>
                    </div>
                    <div className={"navbar-items"}>
                        <div className={"navbar-item-row"}>
                            <h2 className={"navbar-item-row-title"}>ITEMS</h2>
                            <IconItems className={"navbar-item-row-icon"}/>
                        </div>
                        <div className={"navbar-item-row"}>
                            <h2 className={"navbar-item-row-title"}>CLASSES</h2>
                            <IconClass className={"navbar-item-row-icon"}/>
                        </div>
                        <div className={"navbar-item-row"}>
                            <h2 className={"navbar-item-row-title"}>CHAMPIONS</h2>
                            <IconPercentage className={"navbar-item-row-icon"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;