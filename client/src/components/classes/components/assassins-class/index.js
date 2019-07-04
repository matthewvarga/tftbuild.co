import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import khazixImg from "../../../../resources/icons/champions/KhazixSquare.png";
import zedImg from "../../../../resources/icons/champions/ZedSquare.png";
import pykeImg from "../../../../resources/icons/champions/PykeSquare.png";
import katarinaImg from "../../../../resources/icons/champions/KatarinaSquare.png";
import evelynnImg from "../../../../resources/icons/champions/EvelynnSquare.png";
import rengarImg from "../../../../resources/icons/champions/RengarSquare.png";
import akaliImg from "../../../../resources/icons/champions/AkaliSquare.png";

class AssassinsClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"ASSASSINS"} description={"(3x) +150% crit strike damage, (6x) + 350% crit strike damage"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={khazixImg}/>
                        <ChampionIcon img={zedImg}/>
                        <ChampionIcon img={pykeImg}/>
                        <ChampionIcon img={katarinaImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={evelynnImg}/>
                        <ChampionIcon img={rengarImg}/>
                        <ChampionIcon img={akaliImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default AssassinsClass;