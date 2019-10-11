import React, {Component} from 'react';
import './index.css'

class ClassCard extends Component {

    render() {
        let cardNum = "num-" + this.props.num;
        return (
            <div className={"class-card " + cardNum + (this.props.theme === "DARK" ? " dark-theme":" light-theme") + (this.props.descriptionVisibility === false ? "" :" hide-descriptions")}>
                <h3 className={"class-card-title"}>{this.props.title}</h3>
                
                {this.props.children}

                <p className={"class-card-description"}>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default ClassCard;