import React, {Component} from 'react';
import ClassCard from "./components/class-card/index";
import './index.css'

class Classes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"classes"}>
                <h1 className={"classes-title"}>CLASSES</h1>
                <div className={"classes-content"}>
                    <ClassCard title={"NOBLE"} description={"(3x)1 Ally, (6x)All Allies Gains 100 Armor and 35 HP on Hit"}/>
                    <ClassCard title={"ASSASSIN"} description={"+150%(3), 350%(6) crit damage for Assassins"}/>
                    <ClassCard title={"BLADEMASTER"} description={"35% chance on hit for Blademasters to attack one(3), two(6) extra times"}/>
                    <ClassCard title={"BRAWLER"} description={"+300(2), +700(4) health to Brawlers"}/>
                </div>
            </div>
        );
    }
}

export default Classes;