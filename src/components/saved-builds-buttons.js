import React from 'react';
const { API_BASE_URL } = require('./config');

export default class SavedBuildsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deleteConfirmed: "" }
    }

    onClick = (event) => {
        event.preventDefault();
        let buildDelete = {
            build: this.props.id,
        }
        fetch(API_BASE_URL + 'delete/' + this.props.id, {
            method: "DELETE",
            body: JSON.stringify(buildDelete),
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response =>

                this.setState({ deleteConfirmed: response.message })
            )
    }

    render() {
        return (
            <div className="god-button-options">
                {/* <button type="button" className="edit-build-button"> Edit Build </button> */}
                <button id={this.props.id} type="button" className="delete-build-button" onClick={this.onClick}> Delete Build </button>
            </div>
        );
    }
}