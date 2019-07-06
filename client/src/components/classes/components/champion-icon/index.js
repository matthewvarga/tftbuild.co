import React, {Component} from 'react';
import './index.css'

class ChampionIcon extends Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        // list of all the img tags for the selected champion
        let allSelectedChampions = document.querySelectorAll("[data-champion='"+this.props.champion+"']");

        if(!allSelectedChampions.length) {
            // something went wrong, we clicked on a champion, but were unable to find their el
            console.log("error");
            return;
        }

        // determine if they are already highlighted
        let isHighlighted = (window.getComputedStyle(allSelectedChampions[0]).getPropertyValue("opacity") != 1);

        // either highlight or remove highlight from all of the selected champions
        for(let i = 0, len = allSelectedChampions.length; i < len; i++) {
            let championElement = allSelectedChampions[i];
            championElement.style.opacity = isHighlighted ? "1" : "0.4";
        }
    }

    render() {
        return (
            <div className={"champion-icon"} onClick={() => this.handleClick()}>
                <div className={"champion-icon-tier " + "tier-"+this.props.tier}>{this.props.tier}</div>
                <img src={this.props.img} className={"champion-icon-img"} data-champion={this.props.champion}/>
            </div>
        );
    }
}

export default ChampionIcon;