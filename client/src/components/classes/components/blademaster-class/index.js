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
            <ClassCard title={"BLADEMASTER"} description={"(3x) 35% chance to strike twice, (6x) 35% chance to strike thrice"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={fioraImg}/>
                        <ChampionIcon img={shenImg}/>
                        <ChampionIcon img={aatroxImg}/>
                        <ChampionIcon img={gangplankImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={dravenImg}/>
                        <ChampionIcon img={yasuoImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default BlademasterClass;