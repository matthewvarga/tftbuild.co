import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import shyvanaImg from "../../../../resources/icons/champions/ShyvanaSquare.png";
import aurelionsolImg from "../../../../resources/icons/champions/AurelionsolSquare.png";

class DragonClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={2} title={"DRAGON"} description={"(2x) dragons are immune to magic damage"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={shyvanaImg} champion={"shyvana"}/>
                        <ChampionIcon img={aurelionsolImg} champion={"aurelionsol"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default DragonClass;