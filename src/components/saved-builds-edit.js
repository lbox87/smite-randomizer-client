import React from 'react';
import { connect } from 'react-redux';
import {toggleEditImage,toggleEditGod,toggleEditId,toggleEditImage1,toggleEditImage2,toggleEditImage3,toggleEditImage4,toggleEditImage5,toggleEditImage6,toggleEditItem1,toggleEditItem2,toggleEditItem3,toggleEditItem4,toggleEditItem5,toggleEditItem6 } from '../actions/actions';
import './saved-builds-buttons.css';
import requiresLogin from './requires-login';
import { fetchProtectedDataEdit } from '../actions/protected-data';
const { API_BASE_URL } = require('./config');

export class SavedBuildsEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // editGod: "",
            // editGodImage: "",
            // editItem1: "",
            // editItem2: "",
            // editItem3: "",
            // editItem4: "",
            // editItem5: "",
            // editItem6: "",
            // editImage1: "",
            // editImage2: "",
            // editImage3: "",
            // editImage4: "",
            // editImage5: "",
            // editImage6: ""
            clean: "up"
        }
    }

    onClickEdit = (event) => {
        event.preventDefault();
        console.log(this.props.id)
        let buildEdit = {
            build: this.props.id,
        }
        fetch(API_BASE_URL + 'find/' + this.props.id, {
            method: "POST",
            body: JSON.stringify(buildEdit),
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response => {
                this.props.dispatch(toggleEditGod(response.build.god))
                this.props.dispatch(toggleEditImage(response.build.image))
                this.props.dispatch(toggleEditImage1(response.build.image1))
                this.props.dispatch(toggleEditImage2(response.build.image2))
                this.props.dispatch(toggleEditImage3(response.build.image3))
                this.props.dispatch(toggleEditImage4(response.build.image4))
                this.props.dispatch(toggleEditImage5(response.build.image5))
                this.props.dispatch(toggleEditImage6(response.build.image6))
                this.props.dispatch(toggleEditItem1(response.build.item1))
                this.props.dispatch(toggleEditItem2(response.build.item2))
                this.props.dispatch(toggleEditItem3(response.build.item3))
                this.props.dispatch(toggleEditItem4(response.build.item4))
                this.props.dispatch(toggleEditItem5(response.build.item5))
                this.props.dispatch(toggleEditItem6(response.build.item6))
                this.props.dispatch(toggleEditId(this.props.id))
                // console.log(this.state)
            })
            // .then(this.props.dispath(toggleEditId(this.props.id)))
            .then(this.props.toggleEdit)
    }

    render() {
        // if (this.state.editGod !== "") {
        //     return (
        //         <div className="editBuild">
        //             <p className="god">hi</p>
        //         </div>
        //     )
        // }
        return (
            <div className="god-button-options">
                <button id={this.props.id} type="button" className="edit-build-button" onClick={this.onClickEdit}> Edit Build </button>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {   ...state.reducer,
        currentUser: state.auth.currentUser,
        protectedData: state.protectedData.data
    });

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsEdit));