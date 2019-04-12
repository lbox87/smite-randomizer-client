import {RANDOM_GOD} from './actions';
const {API_BASE_URL} = require('./components/config');

const initialState = {
    Assassin: true,
    Guardian: true,
    Hunter: true,
    Mage: true,
    Warrior: true,
    god: "Zeus",
    image: "https://i.imgur.com/GqzWmPi.jpg",
    class: "Warrior"
}

export default (state = initialState, action) => {
    if (action.type === RANDOM_GOD) {
        let classFilters = {
            Assassin: this.state.Assassin,
            Guardian: this.state.Guardian,
            Hunter: this.state.Hunter,
            Mage: this.state.Mage,
            Warrior: this.state.Warrior
          }
        let randomResponse = {
            god: "",
            image: "",
            class: ""
        }
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
            //   console.log(response.gods)
              randomResponse.god = response.gods.name
              randomResponse.image = response.gods.image
              randomResponse.class = response.gods.class
            })
        console.log(JSON.stringify(classFilters));
        return Object.assign({}, state, {randomResponse})
            // onSubmit = (event) => {
            //     event.preventDefault();
           

              
        }
    
}