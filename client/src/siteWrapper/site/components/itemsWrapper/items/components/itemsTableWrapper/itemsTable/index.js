import React, {Component} from 'react';
import itemData from "./config.json";
import './index.css'

class Items extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCol: null,
            selectedRow: null
        }
    }

    handleTileClick(row, col) {
        // if we select an item from header row, we want to highlight only that column,
        // so se the selected row to be larger than max number of rows.
        //
        // similarily for columns.
        row = (row === 0) ? 9:row;
        col = (col === 0) ? 9:col;

        // if we are deselecting item
        if(row === this.state.selectedRow && col === this.state.selectedCol) {
            row = null;
            col = null;
        }

        // update
        this.setState({
            selectedCol: col,
            selectedRow: row,
        });

    }

    getRowData(row) {
        let items = itemData.items;
        let result = [];

        let imageBasePath = "/resources/icons/items/";

        for(let col = 0, len = items[row].length; col < len; col++) {
            if(items[row][col] != null) {
                let item = items[row][col];
                let imgPath = imageBasePath + item.icon;

                result.push(
                    <div className={"item-tile " +
                        (
                            (
                                (this.state.selectedCol === null && this.state.selectedRow === null) ? "" :
                                (
                                    (
                                        (row === this.state.selectedRow && col <= this.state.selectedCol) || 
                                        (col === this.state.selectedCol && row <= this.state.selectedRow)
                                    ) ? "item-tile-highlight":"item-tile-darken"
                                )

                            )
                        )}
                        data-item data-item-tile-row={row} 
                        data-item-tile-col={col} 
                        onClick={() => this.handleTileClick(row, col)}>
                        
                        <img className={"item-img"} src={imgPath}/>
                        <p className={"item-desc"}> {item.desc} </p>
                    </div>
                    
                )
            }
            else {
                result.push(
                    <div className={"item-tile"}>
                    </div>
                )
            }
        }

        return result;
    }

    generateTable() {
        let items = itemData.items;

        let result = [];

        for(let i=0, len=items.length; i < len; i++) { 
            result.push(
                <div className={"item-row"}>
                    {this.getRowData(i)}
                </div>
            )
        }

        return result;
    }

    toggleItemView() {
        
    }

    render() {
        return (
            <div className={"items-table " + (this.props.className ? this.props.className: "") + (this.props.theme === "DARK" ? " dark-theme":" light-theme") + (this.props.descriptionVisibility === false ? "" :" hide-descriptions")}>
                {this.generateTable()}
            </div>
        );
    }
}

export default Items;