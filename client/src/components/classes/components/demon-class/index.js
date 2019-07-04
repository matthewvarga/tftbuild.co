import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import varusImg from "../../../../resources/icons/champions/VarusSquare.png";
import eliseImg from "../../../../resources/icons/champions/EliseSquare.png";
import evelynnImg from "../../../../resources/icons/champions/EvelynnSquare.png";
import morganaImg from "../../../../resources/icons/champions/MorganaSquare.png";
import aatroxImg from "../../../../resources/icons/champions/AatroxSquare.png";
import brandImg from "../../../../resources/icons/champions/BrandSquare.png";
import swainImg from "../../../../resources/icons/champions/SwainSquare.png";

class DemonClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"DEMON"} description={"(2x) 30%, (4x) 50%, (6x) 70% chance to burn targets mana and deal it as true damage"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={varusImg}/>
                        <ChampionIcon img={eliseImg}/>
                        <ChampionIcon img={evelynnImg}/>
                        <ChampionIcon img={morganaImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={aatroxImg}/>
                        <ChampionIcon img={brandImg}/>
                        <ChampionIcon img={swainImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default DemonClass;