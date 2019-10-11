import React, {Component} from 'react';
import Hamburger from "./components/hamburger/index";
import IconClass from "../../icons/classes/index";
import IconItems from "../../icons/items/index";
import IconPercentage from "../../icons/percentage/index";
import './index.css'

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            activeTab: props.activeTab
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            this.props.onScroll();
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.activeTab !== nextProps.activeTab) {
            this.setState({
                activeTab: nextProps.activeTab
            });
        }
    }

    toggle() {
        this.setState((prevState, props) => ({
            open: !prevState.open
        }));
    }

    selectTab(tabIndex) {
        this.props.onSelectTab(tabIndex);
        this.setState({
            activeTab: tabIndex
        });
    }

    render() {
        return (
            <div className={"navbar " + (this.state.open ? "open ": "") + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
                <div className={"navbar-content"}>
                    <div className={"navbar-header-row" }>
                        <h1 className={"navbar-header-title"}>tftbuild</h1>
                        <Hamburger theme={this.props.theme} onToggle={() => this.toggle()}/>
                    </div>
                    <div className={"navbar-items"}>
                        <div className={"navbar-item-row " + (this.state.activeTab === 0 ? "navbar-active-item-row ":"")} onClick={() => this.selectTab(0)}>
                            <h2 className={"navbar-item-row-title"}>ITEMS</h2>
                            <IconItems className={"navbar-item-row-icon " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}/>
                        </div>
                        <div className={"navbar-item-row " + (this.state.activeTab === 1 ? "navbar-active-item-row ":"")} onClick={() => this.selectTab(1)}>
                            <h2 className={"navbar-item-row-title"}>CLASSES</h2>
                            <IconClass className={"navbar-item-row-icon " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}/>
                        </div>
                        <div className={"navbar-item-row " + (this.state.activeTab === 2 ? "navbar-active-item-row ":"")} onClick={() => this.selectTab(2)}>
                            <h2 className={"navbar-item-row-title"}>CHAMPIONS</h2>
                            <IconPercentage className={"navbar-item-row-icon " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;