import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import fioraImg from "../../../../resources/icons/champions/FioraSquare.png";
import shenImg from "../../../../resources/icons/champions/ShenSquare.png";
import aatroxImg from "../../../../resources/icons/champions/AatroxSquare.png";
import gangplankImg from "../../../../resources/icons/champions/GangplankSquare.png";
import dravenImg from "../../../../resources/icons/champions/Draven_GladiatorSquare.png";
import yasuoImg from "../../../../resources/icons/champions/YasuoSquare.png";

class BlademasterClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={4} title={"BLADEMASTER"} description={"(3x) 35% chance to strike twice, (6x) 35% chance to strike thrice"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={fioraImg} champion={"fiora"}/>
                        <ChampionIcon img={shenImg} champion={"shen"}/>
                        <ChampionIcon img={aatroxImg} champion={"aatrox"}/>
                        <ChampionIcon img={gangplankImg} champion={"gangplank"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={dravenImg} champion={"draven"}/>
                        <ChampionIcon img={yasuoImg} champion={"yasuo"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default BlademasterClass;