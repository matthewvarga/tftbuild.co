import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import zedImg from "../../../../resources/icons/champions/ZedSquare.png";
import shenImg from "../../../../resources/icons/champions/ShenSquare.png";
import kennenImg from "../../../../resources/icons/champions/KennenSquare.png";
import akaliImg from "../../../../resources/icons/champions/AkaliSquare.png";

class NinjaClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"NINJA"} description={"(1x) +40% AD for ninjas, (4x) +60% AD for ninjas"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={zedImg} champion={"zed"}/>
                        <ChampionIcon img={shenImg} champion={"shen"}/>
                        <ChampionIcon img={kennenImg} champion={"kennen"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={akaliImg} champion={"akali"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default NinjaClass;