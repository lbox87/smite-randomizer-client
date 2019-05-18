import React from 'react';
import { connect } from 'react-redux';
import { toggleEditImage, toggleEditGod, toggleEditId, toggleEditImage1, toggleEditImage2, toggleEditImage3, toggleEditImage4, toggleEditImage5, toggleEditImage6, toggleEditItem1, toggleEditItem2, toggleEditItem3, toggleEditItem4, toggleEditItem5, toggleEditItem6 } from '../actions/actions';
// import './saved-builds-buttons.css';
import SaveEditButton from './save-edit-button';
import requiresLogin from './requires-login';
import { fetchProtectedDataEdit } from '../actions/protected-data';
const { API_BASE_URL } = require('./config');

export class SavedBuildsEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clean: "up"
        }
        // this.renderParentTier2 = this.renderParentTier2.bind(this);
    }
    // renderParentTier2 = () => this.props.renderparent

    onClickReroll1 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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

    onClickReroll2 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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
                this.props.dispatch(toggleEditItem2(response.item.name))
                this.props.dispatch(toggleEditImage2(response.item.image))
                // console.log(response)
            })
    }
    onClickReroll3 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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
                this.props.dispatch(toggleEditItem3(response.item.name))
                this.props.dispatch(toggleEditImage3(response.item.image))
                // console.log(response)
            })
    }

    onClickReroll4 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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
                this.props.dispatch(toggleEditItem4(response.item.name))
                this.props.dispatch(toggleEditImage4(response.item.image))
                // console.log(response)
            })
    }
    onClickReroll5 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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
                this.props.dispatch(toggleEditItem5(response.item.name))
                this.props.dispatch(toggleEditImage5(response.item.image))
                // console.log(response)
            })
    }

    onClickReroll6 = (event) => {
        event.preventDefault();
        let god = { god: this.props.editGod }

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
                this.props.dispatch(toggleEditItem6(response.item.name))
                this.props.dispatch(toggleEditImage6(response.item.image))
                // console.log(response)
            })
    }

    // updateParent = () => this.props.toggleEdit
    onClick = (event) => {
        event.preventDefault();
        let editBuild = {
            id: this.props.editId,
            god: this.props.editGod,
            image: this.props.editImage,
            item1: this.props.editItem1,
            item2: this.props.editItem2,
            item3: this.props.editItem3,
            item4: this.props.editItem4,
            item5: this.props.editItem5,
            item6: this.props.editItem6,
            image1: this.props.editImage1,
            image2: this.props.editImage2,
            image3: this.props.editImage3,
            image4: this.props.editImage4,
            image5: this.props.editImage5,
            image6: this.props.editImage6
        }
        console.log(JSON.stringify(editBuild));
        fetch(API_BASE_URL + 'edit/' + this.props.editId, {
            method: "PUT",
            body: JSON.stringify(editBuild),
            headers: { "Content-Type": "application/json" },
        })
            .then(
                // console.log(this.props.renderParent)
                this.props.renderParent
            )
    }
    render() {
        // console.log(this.props.protectedData[0])
        const myBuilds = <li>
            <div className="build">
                {/* <div className="full-build">
                    <p>{this.props.editGod}</p>
                    <img src={this.props.editImage} alt="god-image" id="god-image" />
                    <img src={this.props.editImage1} alt="item1" id="item-1" onClick={this.onClickReroll1} />
                    <img src={this.props.editImage2} alt="item2" id="item-2" onClick={this.onClickReroll2} />
                    <img src={this.props.editImage3} alt="item3" id="item-3" onClick={this.onClickReroll3} />
                    <img src={this.props.editImage4} alt="item4" id="item-4" onClick={this.onClickReroll4} />
                    <img src={this.props.editImage5} alt="item5" id="item-5" onClick={this.onClickReroll5} />
                    <img src={this.props.editImage6} alt="item6" id="item-6" onClick={this.onClickReroll6} />
                </div> */}

                <div className="full container">
                    <div className="god-name">
                        <p className="god-name">{this.props.editGod}</p>
                    </div>
                    <div className="build-frame container">

                        <div className="group1">
                            <img src={this.props.editImage} className="god-image-build" />
                        </div>
                        <div className="group2">
                            <div className="item-group1">
                                <img src={this.props.editImage1} className="item" onClick={this.onClickReroll1}/>
                                <img src={this.props.editImage2} className="item" onClick={this.onClickReroll2}/>
                                <img src={this.props.editImage3} className="item" onClick={this.onClickReroll3}/>
                            </div>
                            <div className="item-group2">
                                <img src={this.props.editImage4} className="item" onClick={this.onClickReroll4}/>
                                <img src={this.props.editImage5} className="item" onClick={this.onClickReroll5}/>
                                <img src={this.props.editImage6} className="item" onClick={this.onClickReroll6}/>
                            </div>
                        </div>
                        {/* <div>
                    <SavedBuildsEdit id={this.props.id}/>
                </div> */}
                    </div>
                </div>





                <div>
                    {/* <SaveEditButton renderParent={this.renderParentTier2}/> */}
                    <button onClick={this.onClick}>Save Build</button>
                    <button onClick={this.props.renderParent}>Cancel</button>
                </div>
            </div>
        </li>
        console.log(myBuilds);
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2 className="title-build">You are editing a build for {this.props.editGod}</h2>
                    <p className="text-build">Click an item to re-roll in your build.</p>
                    <p className="text-build">Click Save Build to update it in your list.</p>
                    <p className="text-build">Click Cancel to go back to your builds.</p>
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
    {
        ...state.reducer,
        currentUser: state.auth.currentUser,
        protectedData: state.protectedData.data
    });

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsEditPage));