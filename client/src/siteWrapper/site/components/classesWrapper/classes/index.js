import React, {Component} from 'react';
import classData from "./config.json";
import ClassCardWrapper from "./components/classCardWrapper/index";
import ChampionIcon from "./components/champion-icon/index";
import './index.css'

class Classes extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * getChampionRowIcons builds the individual champion icons within the card
     * @param {*} championRow 
     */
    _getChampionRowIcons(championRow) {
        let result = [];

        let imageBasePath = "/resources/icons/champions/";

        for(let i = 0, len = championRow.length; i < len; i++) {
            let champion = championRow[i];
            let imgPath = imageBasePath + champion.icon;

            result.push(
                <ChampionIcon img={imgPath} champion={champion.name} tier={champion.tier} cost={champion.cost}/>
            )
        }

        return result;
    }

    /**
     * getChampionRows builds the html rows for the champion icons within the card
     * @param {*} classChampions 
     */
    _getChampionRows(classChampions) {
        let result = [];

        for(let row = 0, len = classChampions.length; row < len; row++) {
            result.push(
                <div className={"champion-row"}>
                    {this._getChampionRowIcons(classChampions[row])}
                </div>
            )
        }

        return result;
    }

    /**
     * getClassCards buils the html card containing the information for each class.
     */
    _getClassCards() {
        let classes = classData.classes;
        let result = [];

        for(let i = 0, len = classes.length; i < len; i ++) {
            let curClass = classes[i];

            result.push(
                <ClassCardWrapper theme={this.props.theme} num={curClass.champions[0].length} title={curClass.name} description={curClass.desc}>
                    <div className={"class-card-champions"}>
                        {this._getChampionRows(curClass.champions)}
                    </div>
                </ClassCardWrapper>
            )
        }

        return result;
    }


    render() {
        return (
            <div id={this.props.id} className={"classes " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
                <h1 className={"classes-title"}>CLASSES</h1>
                <div className={"classes-content"}>
                    {this._getClassCards()}
                </div>
            </div>
        );
    }
}

export default Classes;