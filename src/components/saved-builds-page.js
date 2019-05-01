import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import SavedBuildsButtons from './saved-builds-buttons';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import './saved-builds.css';

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
    toggleChangeClick(){
    // this.setState({
    //     click: !this.state.click
    // })
    // return "hello"
    this.props.dispatch(fetchProtectedData())
}

    render() {
        console.log(this.props.protectedData[0])
        const myBuilds = this.props.protectedData.map((build, index) =>
            <li key={index}>
                <div className="build">
                    <p className="god-name">{build.god}</p>
                    <div className="full-build">
                        <img src={build.image} className="god-image-build" />
                        <img src={build.image1} className="item-1" />
                        <img src={build.image2} className="item-2" />
                        <img src={build.image3} className="item-3" />
                        <img src={build.image4} className="item-4" />
                        <img src={build.image5} className="item-5" />
                        <img src={build.image6} className="item-6" />
                    </div>
                    <div className="buttons">
                        <SavedBuildsButtons id={build.id} toggleClick={this.toggleChangeClick}/>
                    </div>
                </div>
            </li>
        );
        console.log(myBuilds);
        if (myBuilds.length === 0) {
            return (
                <div className="dashboard-username">
                    <p>You do not have any saved builds yet! Get started<Link to="/randomize" className='link'>here!</Link></p>
                </div>
            )
        }
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <span>You are logged in as </span><span id="user">{this.props.currentUser.username}</span>
                    <h2>Your Saved Builds</h2>
                    {/* <p>Click Edit Build to re-roll items in your build.</p> */}
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
