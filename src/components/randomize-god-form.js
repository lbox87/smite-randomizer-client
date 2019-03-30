import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import './randomize-god-form.css';

export default class RandomizeGodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assassin: true,
      guardian: true,
      hunter: true,
      mage: true,
      warrior: true
    };
  }

  toggleChangeAssassin = () => {
    this.setState(prevState => ({
      assassin: !prevState.assassin,
    }));
  }

  toggleChangeGuardian = () => {
    this.setState(prevState => ({
      guardian: !prevState.guardian,
    }));
  }

  toggleChangeHunter = () => {
    this.setState(prevState => ({
      hunter: !prevState.hunter,
    }));
  }

  toggleChangeMage = () => {
    this.setState(prevState => ({
      mage: !prevState.mage,
    }));
  }

  toggleChangeWarrior = () => {
    this.setState(prevState => ({
      warrior: !prevState.warrior,
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    let godsSelected = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        godsSelected.push(key).toString();
      }
    }
    // let data = {
    //   check: godsSelected.toString()
    // };
    console.log(godsSelected)

    fetch('https://vast-fjord-13474.herokuapp.com/random')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => {
        console.log(response);
        // displayGods(response);
      })
  }

  render() {
    return (
      <div>
        <form className="randomizer-form" onSubmit={this.onSubmit}>

          <label for="assassin-check">Include Assassins</label>
          <div className="form-input">
            <input type="checkbox" name="assassin-check" id="assassin-check"
              checked={this.state.assassin} onChange={this.toggleChangeAssassin} />
          </div>

          <label for="guardian-check">Include Guardians</label>
          <div className="form-input">
            <input type="checkbox" name="guardian-check" id="guardian-check"
              checked={this.state.guardian} onChange={this.toggleChangeGuardian} />
          </div>

          <label for="hunter-check">Include Hunters</label>
          <div className="form-input">
            <input type="checkbox" name="hunter-check" id="hunter-check"
              checked={this.state.hunter} onChange={this.toggleChangeHunter} />
          </div>

          <label for="mage-check">Include Mages</label>
          <div className="form-input">
            <input type="checkbox" name="mage-check" id="mage-check"
              checked={this.state.mage} onChange={this.toggleChangeMage} />
          </div>

          <label for="warrior-check">Include Warriors</label>
          <div className="form-input">
            <input type="checkbox" name="warrior-check" id="warrior-check"
              checked={this.state.warrior} onChange={this.toggleChangeWarrior} />
          </div>

          <button className="randomize-god-button" >
            Random God!
                </button>

        </form>
      </div>
    );
  }
}