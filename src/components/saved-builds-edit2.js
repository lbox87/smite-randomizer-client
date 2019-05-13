import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import SavedBuildsButtons from './saved-builds-buttons';
import SavedBuildsFrame from './saved-builds-frame';
import {toggleEdit} from '../actions/actions';
import requiresLogin from './requires-login';
import { fetchProtectedDataEdit } from '../actions/protected-data';
import './saved-builds-page.css';

export class SavedBuildsEdit2 extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedDataEdit());
    }
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            currentEdit: ""
        };
    }

onClick = () => this.props.toggleClick

    setBuildEdit = edit => () => {
        this.props.dispatch(toggleEdit(edit))
        // this.props.toggleClick
      }

    render() {
        console.log(this.props.protectedData[0])
        const myBuilds = this.props.protectedData.map((build, index) =>
            <li key={index}>
                <div className="build">
                    <div className="full-build">
                        <p>{build.god}</p>,
                        <img src={build.image} alt="item1" id="item-1"/>
                        <img src={build.image1} alt="item1" id="item-1"/>
                        <img src={build.image2} alt="item2" id="item-2" />
                        <img src={build.image3} alt="item3" id="item-3" />
                        <img src={build.image4} alt="item4" id="item-4" />
                        <img src={build.image5} alt="item5" id="item-5" />
                        <img src={build.image6} alt="item6" id="item-6" /> 
                    </div>
                    <div>
                        <button onClick={this.onClick}>Save Build</button>
                        <button onClick={this.setBuildEdit("")}>Cancel</button>
                    </div>
                </div>
            </li>
        );
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

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsEdit2));