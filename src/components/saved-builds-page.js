// import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SavedBuilds from './saved-builds';
import './saved-builds.css';

export class SavedBuildsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log(this.props.protectedData[0])
        const myBuilds = this.props.protectedData.map((build, index) =>
        <li key={index}>
            <p>{build.god}</p>
            <img src={build.image} class="god-image"/>
            <img src={build.image1} class="item"/>
            <img src={build.image2} class="item"/>
            <img src={build.image3} class="item"/>
            <img src={build.image4} class="item"/>
            <img src={build.image5} class="item"/>
            <img src={build.image6} class="item"/>
        </li>
    );
    console.log(myBuilds);
    if (myBuilds.length === 0) {
        return (
            <p>You do not have any saved builds yet! Get started<Link to="/randomize" className='link'>here!</Link></p>
        )
    }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    You are logged in as <span id="user">{this.props.currentUser.username}</span>
                </div>
                <div className="dashboard-protected-data">
                    <h2>Your Saved Builds</h2>
                    {/* <p>Click Edit Build to re-roll items in your build.</p> */}
                    <p>Click Delete Build to remove it from your list.</p>
                    <ul className="myBuilds">
                        {myBuilds}
                    </ul>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     const {currentUser} = state.auth.currentUser;
//     return {
//         username: state.auth.currentUser.username,
//         // name: `${currentUser.firstName} ${currentUser.lastName}`,
//         protectedData: state.protectedData.data
//     };
// };

const mapStateToProps = state => (
    {
    currentUser: state.auth.currentUser, 
    protectedData: state.protectedData.data
    });

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsPage));
