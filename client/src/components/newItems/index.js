import React, {Component} from 'react';
import itemData from "./config.json";
import './index.css'

class NewItems extends Component {

    constructor(props) {
        super(props);
    }

    generateItemCards() {
        let items = itemData.items;
        let baseImgPath = "/resources/icons/items/";
        let result = [];

        for(let i = 0, len = items.length; i < len; i++) {
            let item = items[i];
            result.push(
                    <div className={"new-item-card"}>
                        <span className={"new-item-card-title"}>{item.name}</span>
                        <div className={"new-item-card-content"}>
                            <img className={"new-item-card-main-img"} src={baseImgPath + item.icon}/>
                            <span className={"new-item-builds-from"}>builds from</span>
                            <div className={"new-item-card-secondary-items-row"}>
                                <img className={"new-item-card-secondary-img"} src={baseImgPath + item.buildsFrom[0].icon}/>
                                <img className={"new-item-card-secondary-img"} src={baseImgPath + item.buildsFrom[1].icon}/>
                            </div>
                            <p className={"new-item-card-desc"}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
            )
        }

        return result;
    }

    render() {
        return (
            <div className={"new-items"}>
                <div className={"new-items-content"}>
                    {this.generateItemCards()}
                </div>
            </div>
        );
    }
}

export default NewItems;