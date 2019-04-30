import React from 'react';
import RandomizeGodForm from './randomize-god-form';

// import './randomize-page.css';

export default class RandomizePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clean: "this up"
        };
    }

    render() {
        return (
            <div className='container'>
                <p>Choose Your Class Filters then Click Random God</p>
                <RandomizeGodForm />
            </div>
        );
    }
}
