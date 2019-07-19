import React, {Component} from 'react';
import './index.css'

class ItemCard extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className={"items-chart-card " + (this.props.highlighted ? "items-chart-card-highlight":"")}>
                <span className={"items-chart-card-title"}>{this.props.title}</span>
                <div className={"items-chart-card-content"}>
                    <img className={"items-chart-card-main-img"} src={this.props.mainImg}/>
                    <span className={"items-chart-builds-from"}>builds from</span>
                    <div className={"items-chart-card-secondary-items-row"}>
                        <img className={"items-chart-card-secondary-img " + (this.props.secondaryLeftImgHighlighted ? "items-chart-card-secondary-img-highlight":"")} src={this.props.secondaryLeftImg}/>
                        <img className={"items-chart-card-secondary-img " + (this.props.secondaryRightImgHighlighted ? "items-chart-card-secondary-img-highlight":"")} src={this.props.secondaryRightImg}/>
                    </div>
                    <p className={"items-chart-card-desc"}>
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default ItemCard;