import React from 'react';
import './saved-builds-delete.css';
const { API_BASE_URL } = require('./config');

export default class SavedBuildsDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onClickDelete = (event) => {
        event.preventDefault();
        let buildDelete = {
            build: this.props.id,
        }
        fetch(API_BASE_URL + 'delete/' + this.props.id, {
            method: "DELETE",
            body: JSON.stringify(buildDelete),
            headers: { "Content-Type": "application/json" },
        })
            .then(this.props.toggleClick)
    }

    render() {
        return (
            <div className="god-button-options">
                <button id={this.props.id} type="button" className="delete-build-button" onClick={this.onClickDelete}> Delete Build </button>
            </div>
        );
    }
}