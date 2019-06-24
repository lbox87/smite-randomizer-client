import React from 'react';
import './saved-builds-frame.css';

export default class SavedBuildsFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "update later"
        }
    }
    render() {
        return (
            <div className="full container">
                <div className="god-name">
                    <p className="god-name">{this.props.god}</p>
                </div>
                <div className="build-frame container">
                    <div className="group1">
                        <img src={this.props.image} className="god-image-build"  alt="god"/>
                    </div>
                    <div className="group2">
                        <div className="item-group1">
                            <img src={this.props.image1} className="item"  alt="item1"/>
                            <img src={this.props.image2} className="item"  alt="item2"/>
                            <img src={this.props.image3} className="item"  alt="item3"/>
                        </div>
                        <div className="item-group2">
                            <img src={this.props.image4} className="item"  alt="item4"/>
                            <img src={this.props.image5} className="item"  alt="item5"/>
                            <img src={this.props.image6} className="item"  alt="item6"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}