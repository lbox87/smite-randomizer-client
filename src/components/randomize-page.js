import React from 'react';

import RandomizeGodForm from './randomize-god-form';

// import './landing-page.css';

export default class RandomizePage extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        randomedGod: [],
        toggle: false
    };

    this.getGod = this.getGod.bind(this)
}

getGod() {
    this.setState({
        toggle: !this.state.toggle
    })
}

    render() {
    return (
        <div class='container'>
            <h1>{this.state.toggle ?"true":"false"}</h1>
            <h2>Randomize a God!</h2>
            <RandomizeGodForm thing={this.getGod}  />
            {/* onRandom={} */}
        </div>
    );
    }
}
