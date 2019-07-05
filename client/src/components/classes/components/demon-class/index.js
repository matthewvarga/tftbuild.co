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
            <ClassCard num={4} title={"DEMON"} description={"(2x) 30%, (4x) 50%, (6x) 70% chance to burn targets mana and deal it as true damage"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={varusImg} champion={"varus"}/>
                        <ChampionIcon img={eliseImg} champion={"elise"}/>
                        <ChampionIcon img={evelynnImg} champion={"evelynn"}/>
                        <ChampionIcon img={morganaImg} champion={"morgana"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={aatroxImg} champion={"aatrox"}/>
                        <ChampionIcon img={brandImg} champion={"brand"}/>
                        <ChampionIcon img={swainImg} champion={"swain"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default DemonClass;