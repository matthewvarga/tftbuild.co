import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import khazixImg from "../../../../resources/icons/champions/KhazixSquare.png";
import kassadinImg from "../../../../resources/icons/champions/KassadinSquare.png";
import reksaiImg from "../../../../resources/icons/champions/ReksaiSquare.png";
import chogathImg from "../../../../resources/icons/champions/ChogathSquare.png";

class VoidClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard num={3} title={"VOID"} description={"(3x) All basic attacks ignore 50% of armor"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={khazixImg} champion={"khazix"}/>
                        <ChampionIcon img={kassadinImg} champion={"kassadin"}/>
                        <ChampionIcon img={reksaiImg} champion={"reksai"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={chogathImg} champion={"chogath"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default VoidClass;