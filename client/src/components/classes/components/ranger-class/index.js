import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import varusImg from "../../../../resources/icons/champions/VarusSquare.png";
import vayneImg from "../../../../resources/icons/champions/VayneSquare.png";
import asheImg from "../../../../resources/icons/champions/AsheSquare.png";
import kindredImg from "../../../../resources/icons/champions/KindredSquare.png";

class RangerClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={3} title={"RANGER"} description={"(2x) 25%, (4x) 65% chance every attack to double attack speed for 3 seconds"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={vayneImg} champion={"vayne"}/>
                        <ChampionIcon img={varusImg} champion={"varus"}/>
                        <ChampionIcon img={asheImg} champion={"ashe"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={kindredImg} champion={"kindred"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default RangerClass;