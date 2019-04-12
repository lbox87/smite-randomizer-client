import React from 'react';

import RandomizeGodForm from './randomize-god-form';

// import './landing-page.css';

export default class RandomizePage extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        // randomedGod: "joe",
        // toggle: false,
        // assassin: true,
        // guardian: true,
        // hunter: true,
        // mage: true,
        // warrior: true,
    };

    // this.getGod = this.getGod.bind(this);
    // this.toggleChangeAssassin = this.toggleChangeAssassin.bind(this);
    // this.toggleChangeGuardian = this.toggleChangeGuardian.bind(this);
    // this.toggleChangeHunter = this.toggleChangeHunter.bind(this);
    // this.toggleChangeMage = this.toggleChangeMage.bind(this);
    // this.toggleChangeWarrior = this.toggleChangeWarrior.bind(this)
}

// getGod() {
//     this.setState({
//         toggle: !this.state.toggle
//     })
// }
// toggleChangeAssassin(){
//     this.setState({
//         assassin: !this.state.assassin
//     })
// }
// toggleChangeGuardian(){
//     this.setState({
//         guardian: !this.state.guardian
//     })
// }
// toggleChangeHunter(){
//     this.setState({
//         hunter: !this.state.hunter
//     })
// }
// toggleChangeMage(){
//     this.setState({
//         mage: !this.state.mage
//     })
// }
// toggleChangeWarrior(){
//     this.setState({
//         warrior: !this.state.warrior
//     })
// }

render() {
    return (
        <div className='container'>
            {/* <h1>Assassin{this.state.assassin ?"true":"false"}</h1> */}

            <p>Choose Your Class Filters then Click Random God</p>
            <RandomizeGodForm 
            // thing={this.getGod}
            // toggleAssassin={this.toggleChangeAssassin} 
            // toggleGuardian={this.toggleChangeGuardian}
            // toggleHunter={this.toggleChangeHunter}
            // toggleMage={this.toggleChangeMage}
            // toggleWarrior={this.toggleChangeWarrior}
            // stateAssassin={this.state.assassin}
            />
        </div>
    );
    }
}
