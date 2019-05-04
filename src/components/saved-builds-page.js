import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import SavedBuildsButtons from './saved-builds-buttons';
import SavedBuildsFrame from './saved-builds-frame';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './saved-builds-page.css';

export class SavedBuildsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    constructor(props) {
        super(props);
        this.state = {
            click: true,
        };
        this.toggleChangeClick = this.toggleChangeClick.bind(this);
    }
    toggleChangeClick() {
        this.props.dispatch(fetchProtectedData())
    }

    render() {
        console.log(this.props.protectedData[0])
        const myBuilds = this.props.protectedData.map((build, index) =>
            <li key={index}>
                <div className="build">
                    <div className="full-build">
                        <SavedBuildsFrame god={build.god} image={build.image} image1={build.image1} image2={build.image2} image3={build.image3} image4={build.image4} image5={build.image5} image6={build.image6} />

                        <div className="buttons">
                            <SavedBuildsButtons id={build.id} toggleClick={this.toggleChangeClick} />
                        </div>
                    </div>
                </div>
            </li>
        );
        console.log(myBuilds);
        if (myBuilds.length === 0) {
            return (
                <div className="dashboard-username">
                    <p className="title">You do not have any saved builds yet! Get started<Link to="/randomize" className='link'>here!</Link></p>
                </div>
            )
        }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2 className="title">Your Saved Builds</h2>
                    <span>You are logged in as </span><span id="user">{this.props.currentUser.username}</span>
                    <p>Click Edit Build to re-roll items in your build.</p>
                    <p>Click Delete Build to remove it from your list.</p>
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
