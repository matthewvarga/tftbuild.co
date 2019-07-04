import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import garenImg from "../../../../resources/icons/champions/GarenSquare.png";
import dariusImg from "../../../../resources/icons/champions/DariusSquare.png";
import MordekaiserImg from "../../../../resources/icons/champions/MordekaiserSquare.png";
import poppyImg from "../../../../resources/icons/champions/PoppySquare.png";
import sejuaniImg from "../../../../resources/icons/champions/SejuaniSquare.png";
import kayleImg from "../../../../resources/icons/champions/KayleSquare.png";

class KnightClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"KNIGHT"} description={"knights block (2x) 20, (4x) 40, (6x) 80 damage from basic attacks"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={garenImg}/>
                        <ChampionIcon img={dariusImg}/>
                        <ChampionIcon img={MordekaiserImg}/>
                        <ChampionIcon img={poppyImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={sejuaniImg}/>
                        <ChampionIcon img={kayleImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default KnightClass;