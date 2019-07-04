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
                        <ChampionIcon img={nidaleeImg}/>
                        <ChampionIcon img={eliseImg}/>
                        <ChampionIcon img={shyvanaImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={gnarImg}/>
                        <ChampionIcon img={swainImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default ShapeshifterClass;