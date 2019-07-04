import React, {Component} from 'react';
import './index.css'

class ChampionIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"champion-icon"}>
                <img src={this.props.img} className={"champion-icon-img"}/>
            </div>
        );
    }
}

export default ChampionIcon;