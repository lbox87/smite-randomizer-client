import React from 'react';
import GodResultPage from './god-result-page';
import { connect } from 'react-redux';
import {getRandomGod} from '../actions';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const {API_BASE_URL} = require('./config');
// import './randomize-god-form.css';

export default class RandomizeGodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Assassin: true,
      Guardian: true,
      Hunter: true,
      Mage: true,
      Warrior: true,
      god: "",
      image: "",
      class: ""
      // isHidden: true
    };
  }

  // toggleHidden (){
  //   this.setState(
  //     {isHidden: !this.state.isHidden}
  //   )
  // }
// getGod() {
//     this.setState({
//         toggle: !this.state.toggle
//     })
// }
// toggleChangeAssassin = (event) => {
//   console.log(this.state.classes.Assassin)
//   this.setState({
//     classes: {Assassin: event.target.value}
//     })
//     console.log(this.state.classes.Assassin)
// }
toggleChangeGod = (name) => {
  this.setState(prevState => ({
    [name]: !prevState[name]
  }));
} 

  toggleChangeAssassin = () => {
    this.setState(prevState => ({
      Assassin: !prevState.Assassin,
    }));
  }

  toggleChangeGuardian = () => {
    this.setState(prevState => ({
      Guardian: !prevState.Guardian,
    }));
  }

  toggleChangeHunter = () => {
    this.setState(prevState => ({
      Hunter: !prevState.Hunter,
    }));
  }

  toggleChangeMage = () => {
    this.setState(prevState => ({
      Mage: !prevState.Mage,
    }));
  }

  toggleChangeWarrior = () => {
    this.setState(prevState => ({
      Warrior: !prevState.Warrior,
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    let classFilters = {
      Assassin: this.state.Assassin,
      Guardian: this.state.Guardian,
      Hunter: this.state.Hunter,
      Mage: this.state.Mage,
      Warrior: this.state.Warrior
    }
    console.log(JSON.stringify(classFilters));

    fetch(API_BASE_URL + 'random3', {
      method: "POST",
      body: JSON.stringify(classFilters),
      headers: { "Content-Type": "application/json" },
    })

    .then(response => {
    if (response.ok) {
      return response.json();
    }
    })
    
    .then(response => {
        console.log(response.gods)
        this.setState( {god: response.gods.name})
        this.setState( {image: response.gods.image})
        this.setState( {class: response.gods.class})
      })
  }
  
  render() {
    return (
      <div>
        <form className="randomizer-form" onSubmit={this.onSubmit}>
          <label for="assassin-check">Include Assassins</label>
          <div className="form-input">
            <input type="checkbox" name="assassin-check" id="assassin-check"
              checked={this.state.Assassin} onChange={x => this.toggleChangeGod("Assassin")} />
          </div>

          <label for="guardian-check">Include Guardians</label>
          <div className="form-input">
            <input type="checkbox" name="guardian-check" id="guardian-check"
              checked={this.state.Guardian} onChange={this.toggleChangeGuardian} />
          </div>

          <label for="hunter-check">Include Hunters</label>
          <div className="form-input">
            <input type="checkbox" name="hunter-check" id="hunter-check"
              checked={this.state.Hunter} onChange={this.toggleChangeHunter} />
          </div>

          <label for="mage-check">Include Mages</label>
          <div className="form-input">
            <input type="checkbox" name="mage-check" id="mage-check"
              checked={this.state.Mage} onChange={this.toggleChangeMage} />
          </div>

          <label for="warrior-check">Include Warriors</label>
          <div className="form-input">
            <input type="checkbox" name="warrior-check" id="warrior-check"
              checked={this.state.Warrior} onChange={this.toggleChangeWarrior} />
          </div>

          <button className="randomize-god-button" 
          // onClick={this.toggleHidden.bind(this)}
          >Random God!</button>
        </form>
        {/* {!this.state.isHidden &&  }*/}
        <GodResultPage 
        god={this.state.god} 
        image={this.state.image} 
        class={this.state.class}
        />
        
      </div>
    );
  }
}