import React, {Component} from 'react';
import ItemsTable from "./components/items-table/index";
import ItemsChart from "./components/items-chart/index";
import Toggle from "./components/toggle/index";
import './index.css'

class Items extends Component {

    constructor(props) {
        super(props);

        this.state = {
            interactiveItemViewIsActive: true
        }
    }

    toggleItemView() {

        let toggle = this.refs["items-toggle"];
        let toggleVal = !toggle.getActiveVal();

        this.setState({
            interactiveItemViewIsActive: toggleVal
        });
    }

    render() {
        return (
            <div id={this.props.id} className={"items " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
                <h1 className={"items-title"}>ITEMS</h1>
                <Toggle theme={this.props.theme} ref={"items-toggle"} labelOne={"Interactive Chart"} labelTwo={"Simple Grid"} onToggle={() => (this.toggleItemView())}/>
                <div className={"items-content"}>
                    <ItemsChart theme={this.props.theme} className={(this.state.interactiveItemViewIsActive ? "items-content-visible": "")}/>
                    <ItemsTable theme={this.props.theme} className={(!this.state.interactiveItemViewIsActive ? "items-content-visible": "")}/>
                </div>
            </div>
        );
    }
}

export default Items;