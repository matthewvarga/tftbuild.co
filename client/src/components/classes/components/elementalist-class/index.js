import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import lissandraImg from "../../../../resources/icons/champions/LissandraSquare.png";
import kennenImg from "../../../../resources/icons/champions/KennenSquare.png";
import brandImg from "../../../../resources/icons/champions/BrandSquare.png";
import aniviaImg from "../../../../resources/icons/champions/AniviaSquare.png";

class ElementalistClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"ELEMENTALIST"} description={"(3x) elementalist gain double mana from attacks and summon a golem"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={lissandraImg}/>
                        <ChampionIcon img={kennenImg}/>
                        <ChampionIcon img={brandImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={aniviaImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default ElementalistClass;