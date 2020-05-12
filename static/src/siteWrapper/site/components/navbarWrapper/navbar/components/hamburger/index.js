import React, {Component} from 'react';
import './index.css'

class Hamburger extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: this.props.open !== undefined ? this.props.open : false
        };
    }

    toggle() {
        this.props.onToggle();
        this.setState((prevState, props) => ({
            open: !prevState.open
        }));
    }

    render() {
        return (
            <div className={"hamburger " + (this.state.open ? "open ":"") + (this.props.theme === "DARK" ? "dark-theme":"light-theme")} onClick={() => this.toggle()}>
                <span className={"hamburger-bar"}></span>
                <span className={"hamburger-bar"}></span>
                <span className={"hamburger-bar"}></span>
                <span className={"hamburger-bar"}></span>
            </div>
        );
    }
}

export default Hamburger;