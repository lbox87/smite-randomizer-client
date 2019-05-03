import React from 'react';
import './saved-builds-frame.css';
const { API_BASE_URL } = require('./config');


export default class SavedBuildsFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: ""
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
                    <img src={this.props.image} className="god-image-build" />
                </div>
                <div className="group2">
                    <div className="item-group1">
                        <img src={this.props.image1} className="item" />
                        <img src={this.props.image2} className="item" />
                        <img src={this.props.image3} className="item" />
                    </div>
                    <div className="item-group2">
                        <img src={this.props.image4} className="item" />
                        <img src={this.props.image5} className="item" />
                        <img src={this.props.image6} className="item" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}