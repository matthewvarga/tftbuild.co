import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import warwickImg from "../../../../resources/icons/champions/WarwickSquare.png";
import reksaiImg from "../../../../resources/icons/champions/ReksaiSquare.png";
import blitzcrankImg from "../../../../resources/icons/champions/BlitzcrankSquare.png";
import volibearImg from "../../../../resources/icons/champions/VolibearSquare.png";
import chogathImg from "../../../../resources/icons/champions/ChogathSquare.png";

class BrawlerClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={3} title={"BRAWLER"} description={"(2x) 300 bonus health to brawlers, (4x) 700 bonus health to brawlers"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={warwickImg} champion={"warwick"}/>
                        <ChampionIcon img={reksaiImg} champion={"reksai"}/>
                        <ChampionIcon img={blitzcrankImg} champion={"blitzcrank"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={volibearImg} champion={"volibear"}/>
                        <ChampionIcon img={chogathImg} champion={"chogath"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default BrawlerClass;