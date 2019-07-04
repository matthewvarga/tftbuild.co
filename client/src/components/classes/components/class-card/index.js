import React, {Component} from 'react';
import './index.css'

class ClassCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"class-card"}>
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