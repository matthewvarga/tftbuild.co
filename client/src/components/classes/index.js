import React, {Component} from 'react';
import NobleClass from "./components/noble-class/index";
import VoidClass from "./components/void-class/index";
import ImperialClass from "./components/imperial-class/index";
import GlacialClass from "./components/glacial-class/index";
import Phantomclass from "./components/phantom-class/index";
import NinjaClass from "./components/ninja-class/index";
import DemonClass from "./components/demon-class/index";
import PirateClass from "./components/pirate-class/index";
import YordleClass from "./components/yordle-class/index";
import WildClass from "./components/wild-class/index";
import KnightClass from "./components/knight-class/index";
import DragonClass from "./components/dragon-class/index";
import BrawlerClass from "./components/brawler-class/index";
import GuardianClass from "./components/guardian-class/index";
import GunslignerClass from "./components/gunslinger-class";
import RangerClass from "./components/ranger-class/index";
import ElementalistClass from "./components/elementalist-class/index";
import SorcererClass from "./components/sorcerer-class/index";
import BlademasterClass from "./components/blademaster-class/index";
import AssassinsClass from "./components/assassins-class/index";
import ShapeshifterClass from "./components/shapeshifter-class/index";
import ExileClass from "./components/exile-class/index";
import RobotClass from "./components/robot-class/index";
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
                    <NobleClass/>
                    <VoidClass/>
                    <ImperialClass/>
                    <GlacialClass/>
                    <Phantomclass/>
                    <NinjaClass/>
                    <DemonClass/>
                    <PirateClass/>
                    <YordleClass/>
                    <WildClass/>
                    <KnightClass/>
                    <DragonClass/>
                    <BrawlerClass/>
                    <GuardianClass/>
                    <GunslignerClass/>
                    <RangerClass/>
                    <ElementalistClass/>
                    <RobotClass/>
                    <ExileClass/>
                    <SorcererClass/>
                    <BlademasterClass/>
                    <AssassinsClass/>
                    <ShapeshifterClass/>
                    
                    
                </div>
            </div>
        );
    }
}

export default Classes;