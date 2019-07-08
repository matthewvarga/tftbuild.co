import React, {Component} from 'react';
import DropRates from "./components/drop-rates-table/index";
import './index.css'

class Champions extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"champions"}>
                <h1 className={"champions-title"}>CHAMPIONS</h1>
                <div className={"champions-content"}>
                    <div className={"champion-drop-rate-table"}>
                        <h4 className={"champion-drop-rate-table-title"}>CHAMPION DROP RATES BY LEVEL</h4>
                        <DropRates/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Champions;