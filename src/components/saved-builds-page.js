import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import SavedBuildsDeleteButton from './saved-builds-delete-button';
import SavedBuildsFrame from './saved-builds-frame';
import SavedBuildsEditButton from './saved-builds-edit-button';
import SavedBuildsEditPage from './saved-builds-edit-page';
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
            edit: false,
            currentEdit: this.props.editId
        };
        this.renderParent = this.renderParent.bind(this);
        this.renderToggleParent = this.renderToggleParent.bind(this);
        this.editParent = this.editParent.bind(this);
    }
// callback to re-render once updates made to ProtectedData
    renderParent() {
        this.props.dispatch(fetchProtectedData())
    }
// callback to flip this component into an edit state for the build selected. 
// Plan to refactor this part in redux to better work with builds.
    editParent() {
        this.setState({ edit: !this.state.edit })
    }
// callback to re-render once edits are complete and turn edit state off
    renderToggleParent() {
        this.setState({ edit: !this.state.edit })
        this.props.dispatch(fetchProtectedData())
    }

    render() {
        // display each build saved
        const myBuilds = this.props.protectedData.map((build, index) =>
            <li key={index}>
                <div className="build">
                    <div className="full-build">
                        <SavedBuildsFrame id={build.id} god={build.god} image={build.image} image1={build.image1} image2={build.image2} image3={build.image3} image4={build.image4} image5={build.image5} image6={build.image6} />
                        <div className="buttons">
                            <SavedBuildsDeleteButton id={build.id} toggleClick={this.renderParent} />
                        </div>
                        <div className="buttons">
                            <SavedBuildsEditButton id={build.id} toggleEdit={this.editParent} />
                        </div>
                    </div>
                </div>
            </li>
        );
        // no builds saved
        if (myBuilds.length === 0) {
            return (
                <div className="dashboard-username">
                    <p className="title-build">You do not have any saved builds yet! Get started<Link to="/randomize" className='link'>here!</Link></p>
                </div>
            )
        }
        // edit mode on
        else if (this.state.edit === true) {
            return (
                <SavedBuildsEditPage toggleEdit={this.editParent} renderParent={this.renderToggleParent} />
            )
        }
        // edit mode off
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2 className="title-build">You are logged in as {this.props.currentUser.username}.</h2>
                    <p className="text-build">Click Edit Build to re-roll items in a build.</p>
                    <p className="text-build">Click Delete Build to remove it from your list.</p>
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

export default requiresLogin()(connect(mapStateToProps)(SavedBuildsPage));