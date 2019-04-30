import React from 'react';
import GodResultPage from './god-result-page';
import { connect } from 'react-redux';
import {toggleGod} from '../actions/actions';
const {API_BASE_URL} = require('./config');
// import './randomize-god-form.css';

export class RandomizeGodForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      god: "",
      image: "",
      class: ""
    }
  }

toggleChangeGod = god => () => {
  this.props.dispatch(toggleGod(god))
}

  onSubmit = (event) => {
    event.preventDefault();
    let classFilters = {
      Assassin: this.props.Assassin,
      Guardian: this.props.Guardian,
      Hunter: this.props.Hunter,
      Mage: this.props.Mage,
      Warrior: this.props.Warrior
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
    const form = [ <form className="randomizer-form" onSubmit={this.onSubmit}>
    <label htmlFor="assassin-check">Include Assassins</label>
    <div className="form-input">
      <input type="checkbox" name="assassin-check" id="assassin-check"
        checked={this.props.Assassin} onChange={this.toggleChangeGod("Assassin")} />
    </div>

    <label htmlFor="guardian-check">Include Guardians</label>
    <div className="form-input">
      <input type="checkbox" name="guardian-check" id="guardian-check"
        checked={this.props.Guardian} onChange={this.toggleChangeGod("Guardian")} />
    </div>

    <label htmlFor="hunter-check">Include Hunters</label>
    <div className="form-input">
      <input type="checkbox" name="hunter-check" id="hunter-check"
        checked={this.props.Hunter} onChange={this.toggleChangeGod("Hunter")} />
    </div>

    <label htmlFor="mage-check">Include Mages</label>
    <div className="form-input">
      <input type="checkbox" name="mage-check" id="mage-check"
        checked={this.props.Mage} onChange={this.toggleChangeGod("Mage")} />
    </div>

    <label htmlFor="warrior-check">Include Warriors</label>
    <div className="form-input">
      <input type="checkbox" name="warrior-check" id="warrior-check"
        checked={this.props.Warrior} onChange={this.toggleChangeGod("Warrior")} />
    </div>

    <button className="randomize-god-button" >Random God!</button>
  </form>]
  if (this.state.god === "") {
    return (
      <div>{form}</div>
    )
  }
    return (
      <div>
       {form}
        <GodResultPage god={this.state.god} image={this.state.image} class={this.state.class}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({...state.reducer, currentUser: state.auth.currentUser});
export default connect(mapStateToProps)(RandomizeGodForm)