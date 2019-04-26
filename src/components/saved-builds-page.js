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
    }

    render() {
        console.log(this.props.protectedData)
        const myBuilds = this.props.protectedData.map((build, index) =>
        <li key={index}>
            <p>{build.god}</p>
            <img src={build.image} />
            <img src={build.image1} />
            <img src={build.image2} />
            <img src={build.image3} />
            <img src={build.image4} />
            <img src={build.image5} />
            <img src={build.image6} />
        </li>
    );
    // let thisBuild = {};
    // let myBuilds = []
    // let returnedBuilds = this.props.protectedData;
    // for(let i = 0; i < returnedBuilds.length; i++){
    //     console.log(returnedBuilds[i])
    //     let myBuilds = Object.keys(returnedBuilds[i]).map(key => 
    //         <SavedBuilds   />
            // {...key} {...returnedBuilds[i][key]}
            // <li value={key}>{tifs[key]}</li>
        // )
        // myBuilds.push(<img src={returnedBuilds[i].image1} alt={returnedBuilds[i].god} className="god-image"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image1} alt={returnedBuilds[i].item1} id="item-1"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image2} alt={returnedBuilds[i].item2} id="item-2"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image3} alt={returnedBuilds[i].item3} id="item-3"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image4} alt={returnedBuilds[i].item4} id="item-4"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image5} alt={returnedBuilds[i].item5} id="item-5"/>)
        // myBuilds.push(<img src={returnedBuilds[i].image6} alt={returnedBuilds[i].item6} id="item-6"/>)
                // Object.keys(returnedBuilds[i]).map(
            // key => 
                // <img src={returnedBuilds[i].image1} alt={returnedBuilds[i].god} className="god-image"/>
                // <img src={returnedBuilds[i].image1} alt={returnedBuilds[i].item1} id="item-1"/>
                // <img src={returnedBuilds[i].image2} alt={returnedBuilds[i].item2} id="item-2"/>
                // <img src={returnedBuilds[i].image3} alt={returnedBuilds[i].item3} id="item-3"/>
                // <img src={returnedBuilds[i].image4} alt={returnedBuilds[i].item4} id="item-4"/>
                // <img src={returnedBuilds[i].image5} alt={returnedBuilds[i].item5} id="item-5"/>
                // <img src={returnedBuilds[i].image6} alt={returnedBuilds[i].item6} id="item-6"/>
                // <button type="button" className="edit-build-button"> Edit Build </button>
                // <button type="button" className="delete-build-button"> Delete Build </button>
            
        // )
    // };
    // console.log (myBuilds)

    var tifs = {1: 'Joe', 2: 'Jane'};

    // var tifOptions = Object.keys(tifs).forEach(function(key) {
    //     return <option value={key}>{tifs[key]}</option>
    // });

    const tifOptions = Object.keys(tifs).map(key => 
        <li value={key}>{tifs[key]}</li>
    )

    console.log(tifOptions)
// for each object indexed in the response array
// define a variable to equal that indexed object
// make the key:values the props of a Build component as in the Cards example
// OR SHORT-TERM map the key:values into a variable as in the tifs example
    

    console.log(this.props.protectedData)


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
                    {/* <SavedBuilds /> */}
                    <ul>
                        {/* {tifOptions} */}
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
