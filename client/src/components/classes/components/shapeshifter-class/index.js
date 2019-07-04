import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import nidaleeImg from "../../../../resources/icons/champions/NidaleeSquare.png";
import eliseImg from "../../../../resources/icons/champions/EliseSquare.png";
import shyvanaImg from "../../../../resources/icons/champions/ShyvanaSquare.png";
import gnarImg from "../../../../resources/icons/champions/GnarSquare.png";
import swainImg from "../../../../resources/icons/champions/SwainSquare.png";

class ShapeshifterClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"SHAPESHIFTER"} description={"(3x) gain 100% max hp on transform"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={nidaleeImg} champion={"nidalee"}/>
                        <ChampionIcon img={eliseImg} champion={"elise"}/>
                        <ChampionIcon img={shyvanaImg} champion={"shyvana"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={gnarImg} champion={"gnar"}/>
                        <ChampionIcon img={swainImg} champion={"swain"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default ShapeshifterClass;