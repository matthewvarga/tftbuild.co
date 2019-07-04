import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import mordekaiserImg from "../../../../resources/icons/champions/MordekaiserSquare.png";
import kindredImg from "../../../../resources/icons/champions/KindredSquare.png";
import karthusImg from "../../../../resources/icons/champions/KarthusSquare.png";

class GlacialClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"PHANTOM"} description={"(2x) set an enemies hp to 100 at round start"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={mordekaiserImg}/>
                        <ChampionIcon img={kindredImg}/>
                    </div>
                    <div className={"champion-row"}>
                        <ChampionIcon img={karthusImg}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default GlacialClass;