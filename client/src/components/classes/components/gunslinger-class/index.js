import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import tristanaImg from "../../../../resources/icons/champions/TristanaSquare.png";
import gravesImg from "../../../../resources/icons/champions/GravesSquare.png";
import lucianImg from "../../../../resources/icons/champions/LucianSquare.png";
import gangplankImg from "../../../../resources/icons/champions/GangplankSquare.png";
import missfortuneImg from "../../../../resources/icons/champions/MissfortuneSquare.png";

class GunslignerClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"GUNSLINGER"} description={"50% chance each attack to hit (2x) an additional, (4x) all targets in range"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={tristanaImg} champion={"tristana"}/>
                        <ChampionIcon img={gravesImg} champion={"graves"}/>
                        <ChampionIcon img={lucianImg} champion={"lucian"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={gangplankImg} champion={"gangplank"}/>
                        <ChampionIcon img={missfortuneImg} champion={"missfortune"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default GunslignerClass;