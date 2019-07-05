import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import braumImg from "../../../../resources/icons/champions/BraumSquare.png";
import lissandraImg from "../../../../resources/icons/champions/LissandraSquare.png";
import asheImg from "../../../../resources/icons/champions/AsheSquare.png";
import volibearImg from "../../../../resources/icons/champions/VolibearSquare.png";
import sejuaniImg from "../../../../resources/icons/champions/SejuaniSquare.png";
import aniviaImg from "../../../../resources/icons/champions/AniviaSquare.png";

class GlacialClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={4} title={"GLACIAL"} description={"(2x) 25%, (4x) 35%, (6x) 45% chance to stun for 2 seconds on hit"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={braumImg} champion={"braum"}/>
                        <ChampionIcon img={lissandraImg} champion={"lissandra"}/>
                        <ChampionIcon img={asheImg} champion={"ashe"}/>
                        <ChampionIcon img={volibearImg} champion={"volibear"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={sejuaniImg} champion={"sejuani"}/>
                        <ChampionIcon img={aniviaImg} champion={"anivia"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default GlacialClass;