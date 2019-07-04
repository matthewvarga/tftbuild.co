import React, {Component} from 'react';
import ClassCard from "../class-card/index";
import ChampionIcon from "../champion-icon/index";

import yasuoImg from "../../../../resources/icons/champions/YasuoSquare.png";

class ExileClass extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassCard title={"EXILE"} description={"(1x) exile gains a shield equal to max hp if standing alone"}>
                <div className={"class-card-champions"}>
                    <div className={"champion-row"}>
                        <ChampionIcon img={yasuoImg} champion={"yasuo"}/>
                    </div>
                </div>
            </ClassCard>
        );
    }
}

export default ExileClass;