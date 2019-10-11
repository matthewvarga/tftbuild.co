import React, {Component} from 'react';
import DropRates from "./components/drop-rates-table/index";
import './index.css'

class Champions extends Component {

    render() {
        return (
            <div id={this.props.id} className={"champions " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
                <h1 className={"champions-title"}>CHAMPIONS</h1>
                <div className={"champions-content"}>
                    <div className={"champion-drop-rate-table"}>
                        <h4 className={"champion-drop-rate-table-title"}>CHAMPION DROP RATES BY LEVEL</h4>
                        <DropRates theme={this.props.theme}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Champions;