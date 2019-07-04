import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import blitzcrankImg from "../../../../resources/icons/champions/BlitzcrankSquare.png";

class RobotClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"ROBOT"} description={"(1x) a robot starts will full mana"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={blitzcrankImg} champion={"blitzcrank"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default RobotClass;