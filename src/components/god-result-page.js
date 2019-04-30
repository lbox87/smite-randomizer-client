import React from 'react';
import { connect } from 'react-redux';
import ItemResultsPage from './item-results-page';
const {API_BASE_URL} = require('./config');
// import './god-result-page.css';

export default class GodResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item1: ""}
    }

onClick = (event) => {
    event.preventDefault();
    let godFilters = {
        god: this.props.god,
        class: this.props.class
    }
    fetch(API_BASE_URL + 'items2', {
      method: "POST",
      body: JSON.stringify(godFilters),
      headers: { "Content-Type": "application/json" },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
            }
    })
    .then(response => {
        this.setState( {item1: response.item1.name})
        this.setState( {image1: response.item1.image})
        this.setState( {item2: response.item2.name})
        this.setState( {image2: response.item2.image})
        this.setState( {item3: response.item3.name})
        this.setState( {image3: response.item3.image})
        this.setState( {item4: response.item4.name})
        this.setState( {image4: response.item4.image})
        this.setState( {item5: response.item5.name})
        this.setState( {image5: response.item5.image})
        this.setState( {item6: response.item6.name})
        this.setState( {image6: response.item6.image})
        })
}

render() {
    if (this.state.item1 === "") {
        return (
            <div className=''>
            <h2>You Randomed <span className="god-name-result">{this.props.god}</span></h2>
            <img src={this.props.image} alt={this.props.god} className="god-image" />
            <div>
            <button className="randomize-build-button" onClick={this.onClick}>Random Build!</button>
            </div>
            </div>
        )
      }
    return (
        <div className=''>
            <h2>You Randomed <span className="god-name-result">{this.props.god}</span></h2>
            <img src={this.props.image} alt={this.props.god} className="god-image" />
            <div>
            <button className="randomize-build-button" onClick={this.onClick}>Random Build!</button>
            </div>
            <ItemResultsPage 
            item1={this.state.item1} image1={this.state.image1}
            item2={this.state.item2} image2={this.state.image2}
            item3={this.state.item3} image3={this.state.image3}
            item4={this.state.item4} image4={this.state.image4}
            item5={this.state.item5} image5={this.state.image5}
            item6={this.state.item6} image6={this.state.image6}
            god={this.props.god} 
            image={this.props.image} 
            class={this.props.class}
            />
        </div>
    );
}
}