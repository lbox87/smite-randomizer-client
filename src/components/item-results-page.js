import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const { API_BASE_URL } = require('./config');
// import './item-results-page.css';

export class ItemResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: ""
        };
    }
    // save randomed build, plan to rewrite in redux to interact better with random god and item
    onClick = (event) => {
        event.preventDefault();
        let saveBuild = {
            user: this.props.currentUser.username,
            god: this.props.god,
            image: this.props.image,
            item1: this.props.item1,
            item2: this.props.item2,
            item3: this.props.item3,
            item4: this.props.item4,
            item5: this.props.item5,
            item6: this.props.item6,
            image1: this.props.image1,
            image2: this.props.image2,
            image3: this.props.image3,
            image4: this.props.image4,
            image5: this.props.image5,
            image6: this.props.image6
        }
        console.log(JSON.stringify(saveBuild));
        fetch(API_BASE_URL + 'builds/save', {
            method: "POST",
            body: JSON.stringify(saveBuild),
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response => {
                console.log(response.message);
                this.setState({ saved: response.message })
            })
    }
    render() {
        const randomBuild = [
            <img key='item-1' src={this.props.image1} alt="item1" id="item-1" />,
            <img key='item-2' src={this.props.image2} alt="item2" id="item-2" />,
            <img key='item-3' src={this.props.image3} alt="item3" id="item-3" />,
            <img key='item-4' src={this.props.image4} alt="item4" id="item-4" />,
            <img key='item-5' src={this.props.image5} alt="item5" id="item-5" />,
            <img key='item-6' src={this.props.image6} alt="item6" id="item-6" />
        ]
        if (this.props.currentUser == null) {
            return (
                <div className="not-logged-in">
                    <div className="random-item-results">
                        {randomBuild}
                        <p><Link to="/" className='link'>Sign in</Link>or<Link to="/registration" className='link'>Register</Link>to save builds.</p>
                    </div>
                </div>
            );
        }
        else if (this.state.saved === "") {
            return (
                <div className="unsaved-build">
                    <div className="random-item-results">
                        {randomBuild}
                        <div>
                            <    button type="button" className="randomize-gear-button" onClick={this.onClick}>Save this Build!</button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div classname="saved-build">
                    <div className="random-item-results">
                        {randomBuild}
                        <div>
                            <    button type="button" className="randomize-gear-button" onClick={this.onClick}>Save this Build!</button>
                            <p>{this.state.saved}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({ currentUser: state.auth.currentUser });

export default connect(mapStateToProps)(ItemResultsPage)