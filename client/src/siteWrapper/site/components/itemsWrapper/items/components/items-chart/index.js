import React, {Component} from 'react';
import itemData from "./config.json";
import ItemCard from "./components/item-card/index";
import './index.css'

class ItemsChart extends Component {

    constructor(props) {
        super(props);

        // possible items to select:
        // bf = bf sword
        // nlr = needlessly large rod
        // rb = recurve bow
        // tog = tear of goddess
        // cv = chain vest
        // nc = negatron cloak
        // gb = giants belt
        // g = golden spatula
        this.state = {
            selectedItems: []
        };
    }

    generateItemCards() {
        let items = itemData.items;
        let baseImgPath = "/resources/icons/items/";
        let fullItems = []; // items with both prereqs selected
        let partialItems = []; // items with 1 or 0 prereq selected

        for(let i = 0, len = items.length; i < len; i++) {
            let item = items[i];

            // true if both base items are selected
            let numPreReqs = (this.state.selectedItems.includes(item.buildsFrom[0].val) ? 1: 0) + (this.state.selectedItems.includes(item.buildsFrom[1].val) ? 1: 0)

            let itemEl = <ItemCard highlighted={numPreReqs===2} 
                          theme={this.props.theme}
                          title={item.name} 
                          mainImg={baseImgPath + item.icon}
                          secondaryLeftImg={baseImgPath + item.buildsFrom[0].icon}
                          secondaryLeftImgHighlighted={this.state.selectedItems.includes(item.buildsFrom[0].val)}
                          secondaryRightImg={baseImgPath + item.buildsFrom[1].icon}
                          secondaryRightImgHighlighted={this.state.selectedItems.includes(item.buildsFrom[1].val)}
                          description={item.desc}/>;

            // move highlighted items to the front of list
            if(numPreReqs === 2) {
                fullItems.push(itemEl);
            }
            else if(numPreReqs === 1) {
                partialItems.unshift(itemEl);
            }
            else {
                partialItems.push(itemEl);
            }
        }
        let result = fullItems.concat(partialItems);
        return result;
    }

    /**
     * handler for when user selects an item.
     * 
     * if item is already selected, de-selects it. Otherwise, selects it.
     * @param {string} item - item being selected
     */
    selectItem(item) {
        let selectedItems = this.state.selectedItems;
        let itemIndex = selectedItems.indexOf(item);
        
        (itemIndex === -1) ? selectedItems.push(item) : selectedItems.splice(itemIndex, 1);
        
        this.setState({
            selectedItems: selectedItems
        });

        
    }

    render() {
        return (
            <div className={"items-chart " + (this.props.className ? this.props.className: "") + (this.props.theme === "DARK" ? " dark-theme":" light-theme")}>
                <span className={"items-chart-title"}>Select items below to see what they build into!</span>
                <div className={"items-chart-base-items"}>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("bf") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/B._F._Sword_item.png"} onClick={() => this.selectItem("bf")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("nlr") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Needlessly_Large_Rod_item.png"} onClick={() => this.selectItem("nlr")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("rb") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Recurve_Bow_item.png"} onClick={() => this.selectItem("rb")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("tog") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Tear_of_the_Goddess_item.png"} onClick={() => this.selectItem("tog")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("cv") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Chain_Vest_item.png"} onClick={() => this.selectItem("cv")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("nc") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Negatron_Cloak_item.png"} onClick={() => this.selectItem("nc")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("gb") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/Giant's_Belt_item.png"} onClick={() => this.selectItem("gb")}/>
                        <img className={"items-chart-card-base-img " + (this.state.selectedItems.includes("gs") ? "items-chart-card-img-highlight":"")} src={"/resources/icons/items/GoldenSpatula.png"} onClick={() => this.selectItem("gs")}/>
                    </div>
                <div className={"items-chart-content"}>

                    {this.generateItemCards()}
                </div>
            </div>
        );
    }
}

export default ItemsChart;