import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import gravesImg from "../../../../resources/icons/champions/GravesSquare.png";
import pykeImg from "../../../../resources/icons/champions/PykeSquare.png";
import gangplankImg from "../../../../resources/icons/champions/GangplankSquare.png";
import missfortuneImg from "../../../../resources/icons/champions/MissfortuneSquare.png";

class PirateClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"PIRATE"} description={"(3x) earn up to 4 extra gold after each pvp round"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={gravesImg}/>
                        <ChampionIcon img={pykeImg}/>
                        <ChampionIcon img={gangplankImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={missfortuneImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default PirateClass;