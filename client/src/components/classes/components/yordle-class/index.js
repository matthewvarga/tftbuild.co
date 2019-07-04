import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import tristanaImg from "../../../../resources/icons/champions/TristanaSquare.png";
import luluImg from "../../../../resources/icons/champions/LuluSquare.png";
import poppyImg from "../../../../resources/icons/champions/PoppySquare.png";
import veigarImg from "../../../../resources/icons/champions/VeigarSquare.png";
import kennenImg from "../../../../resources/icons/champions/KennenSquare.png";
import gnarImg from "../../../../resources/icons/champions/GnarSquare.png";

class YordleClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"YORDLE"} description={"(3x) 20%, (6x) 50% chance for enemies to miss against yordles"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={tristanaImg}/>
                        <ChampionIcon img={luluImg}/>
                        <ChampionIcon img={poppyImg}/>
                        <ChampionIcon img={veigarImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={kennenImg}/>
                        <ChampionIcon img={gnarImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default YordleClass;