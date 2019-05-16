import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {toggleEditImage,toggleEditGod,toggleEditId,toggleEditImage1,toggleEditImage2,toggleEditImage3,toggleEditImage4,toggleEditImage5,toggleEditImage6,toggleEditItem1,toggleEditItem2,toggleEditItem3,toggleEditItem4,toggleEditItem5,toggleEditItem6 } from '../actions/actions';
import './saved-builds-buttons.css';
import requiresLogin from './requires-login';
import { fetchProtectedDataEdit } from '../actions/protected-data';
const { API_BASE_URL } = require('./config');

export class SaveEditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clean: "up"
        }
    }

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
        // .then(response => {
        // if (response.ok) {
        //   return response.json();
        // }
        // })

        .then(this.props.dispatch(toggleEditId("")))
        // .then(this.props.renderParent)
      }


    render() {
        if (this.props.editId === "") {
            return <Redirect to="/mybuilds" />;
        }
        return (
            <div>
                <button className="edit-save-button" onClick={this.onClick}>Save Build</button>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {   ...state.reducer,
        currentUser: state.auth.currentUser,
        protectedData: state.protectedData.data
    });

export default requiresLogin()(connect(mapStateToProps)(SaveEditButton));