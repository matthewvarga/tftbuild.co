import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import warwickImg from "../../../../resources/icons/champions/WarwickSquare.png";
import nidaleeImg from "../../../../resources/icons/champions/NidaleeSquare.png";
import ahriImg from "../../../../resources/icons/champions/AhriSquare.png";
import rengarImg from "../../../../resources/icons/champions/RengarSquare.png";
import gnarImg from "../../../../resources/icons/champions/GnarSquare.png";

class WildClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"WILD"} description={"every attack gives 7% attack speed (2x) for wild allies, (4x) for all allies"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={warwickImg}/>
                        <ChampionIcon img={nidaleeImg}/>
                        <ChampionIcon img={ahriImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={rengarImg}/>
                        <ChampionIcon img={gnarImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default WildClass;