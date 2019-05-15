import React from 'react';
import { connect } from 'react-redux';
import {toggleEditImage,toggleEditGod,toggleEditId,toggleEditImage1,toggleEditImage2,toggleEditImage3,toggleEditImage4,toggleEditImage5,toggleEditImage6,toggleEditItem1,toggleEditItem2,toggleEditItem3,toggleEditItem4,toggleEditItem5,toggleEditItem6 } from '../actions/actions';
import './saved-builds-buttons.css';
import requiresLogin from './requires-login';
import { fetchProtectedDataEdit } from '../actions/protected-data';
const { API_BASE_URL } = require('./config');

export class SavedBuildsEdit3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clean: "up"
        }
    }

    onClickReroll1 = (event) => {
        event.preventDefault();
        let god = {god: this.props.editGod}

        fetch(API_BASE_URL + 'items1', {
          method: "POST",
          body: JSON.stringify(god),
          headers: { "Content-Type": "application/json" },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
                }
        })
        .then(response => {
            this.props.dispatch(toggleEditItem1(response.item.name))
            this.props.dispatch(toggleEditImage1(response.item.image))
            // console.log(response)
            })
    }

    render() {
        // console.log(this.props.protectedData[0])
        const myBuilds = [
                <div className="build">
                    <div className="full-build">
                        <p>{this.props.editGod}</p>
                        <img src={this.props.editImage} alt="god-image" id="god-image" />
                        <img src={this.props.editImage1} alt="item1" id="item-1" onClick={this.onClickReroll1}/>
                        <img src={this.props.editImage2} alt="item2" id="item-2" />
                        <img src={this.props.editImage3} alt="item3" id="item-3" />
                        <img src={this.props.editImage4} alt="item4" id="item-4" />
                        <img src={this.props.editImage5} alt="item5" id="item-5" />
                        <img src={this.props.editImage6} alt="item6" id="item-6" /> 
                    </div>
                    {/* <div>
                        <button onClick={this.onClick}>Save Build</button>
                        <button onClick={this.setBuildEdit("")}>Cancel</button>
                    </div> */}
                </div>
            ]
        console.log(myBuilds);
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2 className="title">Your Saved Builds</h2>
                    <span>You are logged in as </span><span id="user">{this.props.currentUser.username}</span>
                    <p>Click an item to re-roll in your build.</p>
                    <p>Click Save Build to update it in your list.</p>
                    <p>Click Cancel to go back to your builds.</p>
                </div>
                <div className="dashboard-protected-data">
                    <div className="myBuilds">
                        <ul>
                            {myBuilds}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {   ...state.reducer,
        currentUser: state.auth.currentUser,
        protectedData: state.protectedData.data
    });

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsEdit3));