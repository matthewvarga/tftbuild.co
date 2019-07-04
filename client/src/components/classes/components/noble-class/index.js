import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import vayneImg from "../../../../resources/icons/champions/VayneSquare.png";
import fioraImg from "../../../../resources/icons/champions/FioraSquare.png";
import garenImg from "../../../../resources/icons/champions/GarenSquare.png";
import lucianImg from "../../../../resources/icons/champions/LucianSquare.png";
import leonaImg from "../../../../resources/icons/champions/LeonaSquare.png";
import kayleImg from "../../../../resources/icons/champions/KayleSquare.png";
import './index.css'

class NobleClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"NOBLE"} description={"(3x)1 Ally, (6x)All Allies Gains 100 Armor and 35 HP on Hit"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={vayneImg}/>
                        <ChampionIcon img={fioraImg}/>
                        <ChampionIcon img={garenImg}/>
                        <ChampionIcon img={lucianImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={leonaImg}/>
                        <ChampionIcon img={kayleImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default NobleClass;