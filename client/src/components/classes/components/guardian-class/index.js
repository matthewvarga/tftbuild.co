import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import braumImg from "../../../../resources/icons/champions/BraumSquare.png";
import leonaImg from "../../../../resources/icons/champions/LeonaSquare.png";

class GuardianClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"GUARDIAN"} description={"(2x) +30 armor to guardians and close allies"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={braumImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={leonaImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default GuardianClass;