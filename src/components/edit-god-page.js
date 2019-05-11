import React from 'react';

// import './randomize-page.css';

export default class EditGodPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clean: "this up"
        };
    }

    render() {
        return (
            <div className='container'>
                <p>Edit God</p>
                {/* <RandomizeGodForm /> */}
            </div>
        );
    }
}
