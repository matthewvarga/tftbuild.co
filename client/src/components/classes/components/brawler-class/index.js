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
            <ClassCard title={"BRAWLER"} description={"(2x) 300 bonus health to brawlers, (4x) 700 bonus health to brawlers"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={warwickImg}/>
                        <ChampionIcon img={reksaiImg}/>
                        <ChampionIcon img={blitzcrankImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={volibearImg}/>
                        <ChampionIcon img={chogathImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default BrawlerClass;