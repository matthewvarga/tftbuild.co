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
        console.log("toggle");
        this.props.onToggle();
        this.setState((prevState, props) => ({
            active: !prevState.active
        }));
    }

    getActiveVal() {
        return this.state.active;
    }

    render() {
        console.log("active: " + this.state.active);
        return (
            <div className={"toggle"}>
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