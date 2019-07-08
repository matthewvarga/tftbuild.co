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
        this.setState((prevState, props) => ({
            active: !prevState.active
        }));
    }

    render() {
        return (
            <div className={"toggle"}>
                <span className={"toggle-label " + (this.state.active ? "toggle-active-text":"")}>{this.props.labelOne}</span>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
                <span className={"toggle-label " + (this.state.active ? "":"toggle-active-text")} onClick={() => this.toggleSwitch()}>{this.props.labelTwo}</span>
            </div>
        );
    }
}

export default Toggle;