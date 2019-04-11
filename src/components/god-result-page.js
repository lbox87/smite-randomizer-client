import React from 'react';

import GodResult from './god-result';
import ItemResultsPage from './item-results-page';
const {API_BASE_URL} = require('./config');
// import './landing-page.css';

export default class GodResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            image: "",
        }
    }

onClick = (event) => {
    event.preventDefault();

    console.log('the curent god is a ' + this.props.class + " and named " + this.props.god)
    let godFilters = {
        god: this.props.god,
        class: this.props.class
    }
    console.log(JSON.stringify(godFilters));

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
            console.log(response)
            this.setState( {item: response.items.name})
            this.setState( {image: response.items.image})
          })
      }

render() {
    return (
        <div className=''>
            <h2>You Randomed <span className="god-name-result">{this.props.god}</span></h2>
            <img src={this.props.image} alt={this.props.god} className="god-image" />
            <div>
            <button className="randomize-build-button" onClick={this.onClick}>Random Build!</button>
            </div>
            <ItemResultsPage item={this.state.item} image={this.state.image}/>
            
        </div>
    );
}
}
// export default function GodResultPage(props) {
//     return (
//         <div className=''>
//             <h2>You Randomed <span className="god-name-result">{props.god}</span></h2>
//             <img src={props.image} alt={props.god} className="god-image" />

//             <ItemResultsPage />
            
//         </div>
//     );
// }