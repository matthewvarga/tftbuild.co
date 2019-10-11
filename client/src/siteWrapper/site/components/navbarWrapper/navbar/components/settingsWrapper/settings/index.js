import React, {Component} from 'react';
import IconSettings from "../../../../../icons/settings/index";
import Toggle from "../../../../../toggle/index";
import './index.css'

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            activeTab: props.activeTab
        }
    }
   
    toggleTheme() {
        let toggle = this.refs["settings-dark-mode-toggle"];
        toggle.getActiveVal() ? this.props.setTheme("LIGHT"): this.props.setTheme("DARK");
    }

    render() {
        return (
            <div className={"settings " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
                <div className={"settings-title-row"}>
                    <h2 className={"settings-title-row-text"}>SETTINGS</h2>
                    <IconSettings className={"settings-title-row-icon"}/>
                </div>
                <div className={"settings-option"}>
                    <span className={"settings-option-label"}>Dark Mode</span>
                    <Toggle ref={"settings-dark-mode-toggle"} active={false} onToggle={() => (this.toggleTheme())}/>
                </div>
            </div>
        );
    }
}

export default Settings;