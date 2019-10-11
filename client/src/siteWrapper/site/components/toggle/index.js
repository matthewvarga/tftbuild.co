import React, {Component} from 'react';
import './index.css'

class Toggle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: props.active != undefined ? props.active : true
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

    // update toggle to proper position
    componentDidMount() {
        let checkbox = this.refs["toggle-checkbox"];
        checkbox.checked = !this.state.active;
    }

    render() {
        return (
            <div className={"toggle " + (this.props.theme === "DARK" ? " dark-theme":" light-theme")}>
                {this.props.labelOne && <span className={"toggle-label " + (this.state.active ? "toggle-active-text":"")}>{this.props.labelOne}</span>}
                <label class="switch">
                    <input ref={"toggle-checkbox"} type="checkbox" onClick={() => this.toggleSwitch()}></input>
                    <span class="slider round"></span>
                </label>
                {this.props.labelTwo && <span className={"toggle-label " + (!this.state.active ? "toggle-active-text":"")}>{this.props.labelTwo}</span>}
            </div>
        );
    }
}

export default Toggle;