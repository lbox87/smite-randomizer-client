// import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import SavedBuilds from './saved-builds';
// // import './landing-page.css';

// export default function SavedBuildsPage() {
//     return (
//         <div className='container'>
//             <h2>Your Saved Builds</h2>
//             <p>Click Edit Build to re-roll items in your build.</p>
//             <p>Click Delete Build to remove it from your list.</p>
//             <button type="button" className="new-random"> <Link to="/results" className='link'>Randomize a New God</Link></button>
//             <SavedBuilds />
//         </div>
//     );
// }

import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SavedBuilds from './saved-builds';

export class SavedBuildsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        console.log(this.props.protectedData)

        // console.log(this.props.currentUser)
        // console.log(this.props.protectedData[0])
        // if (this.props.currentUser == null) {}
        // let myBuilds = this.props.protectedData;
        // for (var user in myBuilds) {
        //     if (user === this.props.currentUser)
        // }
        // console.log(myBuilds)
        // for (let i = 0; i < myBuilds; i++) {
            // if( myBuilds[i].user !== this.props.currentUser.username ) {
              // console.log(nonBoots[i] + " was removed")
            //   myBuilds[i] = this.props.protectedData[i]
              // console.log(key + " is " + build[key])
            //   console.log(myBuilds[i])
            // myBuilds.splice(i, 1);
            // }
        // }
        // console.log(myBuilds)
    }

    render() {
    //     const cards = this.props.cards.map((card, index) =>
    //     <li key={index}>
    //         <Card {...card} />
    //     </li>
    // );
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    {/* Protected data: {this.props.protectedData} */}
                    <h2>Your Saved Builds</h2>
                    <p>Click Edit Build to re-roll items in your build.</p>
                    <p>Click Delete Build to remove it from your list.</p>
                    <button type="button" className="new-random"> 
                    <Link to="/results" className='link'>Randomize a New God</Link></button>
                    <SavedBuilds />
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
