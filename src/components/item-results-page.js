import React from 'react';

import ItemResults from './item-results';

// import './landing-page.css';

export default class ItemResultsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image1: this.props.image1,
        image2: this.props.image2,
        image3: this.props.image3,
        image4: this.props.image4,
        image5: this.props.image5,
        image6: this.props.image6
      };
    }
render() {
    return (
        <div>
            <p>Click an Item to re-roll it!</p>
            <div className="random-item-results">
                <img src={this.props.image1} alt="item1" id="item-1"/>
                <img src={this.props.image2} alt="item2" id="item-2" />
                <img src={this.props.image3} alt="item3" id="item-3" />
                <img src={this.props.image4} alt="item4" id="item-4" />
                <img src={this.props.image5} alt="item5" id="item-5" />
                <img src={this.props.image6} alt="item6" id="item-6" />
                {/* <ItemResultsButtons /> */}
            </div>
                {/* <ItemResults /> */}
        </div>
        );
    }
}