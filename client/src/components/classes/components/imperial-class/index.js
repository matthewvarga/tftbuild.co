import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import dariusImg from "../../../../resources/icons/champions/DariusSquare.png";
import katarinaImg from "../../../../resources/icons/champions/KatarinaSquare.png";
import dravenImg from "../../../../resources/icons/champions/Draven_GladiatorSquare.png";
import swainImg from "../../../../resources/icons/champions/SwainSquare.png";

class ImperialClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={3} title={"IMPERIAL"} description={"(2x) 1 Imperial deals 2x damage, (4x) all imperials deal 2x damage"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={dariusImg} champion={"darius"}/>
                        <ChampionIcon img={katarinaImg} champion={"katarina"}/>
                        <ChampionIcon img={dravenImg} champion={"draven"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={swainImg} champion={"swain"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default ImperialClass;