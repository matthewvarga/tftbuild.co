import React, {Component} from 'react';
import './index.css'

class Toggle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: true
        };
    }

    toggleSwitch() {
        this.props.onToggle();
        this.setState((prevState, props) => ({
            active: !prevState.active
        }));
    }

    getActiveVal() {
        return this.state.active;
    }

    render() {
        return (
            <div className={"toggle " + (this.props.theme === "DARK" ? " dark-theme":" light-theme")}>
                <span className={"toggle-label " + (this.state.active ? "toggle-active-text":"")}>{this.props.labelOne}</span>
                <label class="switch">
                    <input type="checkbox" onClick={() => this.toggleSwitch()}></input>
                    <span class="slider round"></span>
                </label>
                <span className={"toggle-label " + (!this.state.active ? "toggle-active-text":"")}>{this.props.labelTwo}</span>
            </div>
        );
    }
}

export default Toggle;