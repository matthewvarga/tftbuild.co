import React, {Component} from 'react';
import NobleClass from "./components/noble-class/index";
import VoidClass from "./components/void-class/index";
import ImperialClass from "./components/imperial-class/index";
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
                </div>
            </div>
        );
    }
}

export default Classes;