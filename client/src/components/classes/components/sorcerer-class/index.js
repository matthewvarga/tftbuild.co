import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import kassadinImg from "../../../../resources/icons/champions/KassadinSquare.png";
import ahriImg from "../../../../resources/icons/champions/AhriSquare.png";
import luluImg from "../../../../resources/icons/champions/LuluSquare.png";
import veigarImg from "../../../../resources/icons/champions/VeigarSquare.png";
import morganaImg from "../../../../resources/icons/champions/MorganaSquare.png";
import aurelionsolImg from "../../../../resources/icons/champions/AurelionsolSquare.png";
import karthusImg from "../../../../resources/icons/champions/KarthusSquare.png";

class SorcererClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"SORCERER"} description={"allies have (3x) +35%, (6x) +100% spell damage and sorcerers gain double mana from attacking"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={kassadinImg} champion={"kassadin"}/>
                        <ChampionIcon img={ahriImg} champion={"ahri"}/>
                        <ChampionIcon img={luluImg} champion={"lulu"}/>
                        <ChampionIcon img={veigarImg} champion={"veigar"}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={morganaImg} champion={"morgana"}/>
                        <ChampionIcon img={aurelionsolImg} champion={"aurelionsol"}/>
                        <ChampionIcon img={karthusImg} champion={"karthus"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default SorcererClass;