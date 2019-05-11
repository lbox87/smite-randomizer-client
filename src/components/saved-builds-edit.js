import React from 'react';
import './saved-builds-buttons.css';
const { API_BASE_URL } = require('./config');

export default class SavedBuildsEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editGod: "",
            editGodImage: "",
            editItem1: "",
            editItem2: "",
            editItem3: "",
            editItem4: "",
            editItem5: "",
            editItem6: "",
            editImage1: "",
            editImage2: "",
            editImage3: "",
            editImage4: "",
            editImage5: "",
            editImage6: ""
        }
    }

    onClickEdit = (event) => {
        event.preventDefault();
        console.log(this.props.id)
        let buildEdit = {
            build: this.props.id,
        }
        fetch(API_BASE_URL + 'find/' + this.props.id, {
            method: "POST",
            body: JSON.stringify(buildEdit),
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response => {
                this.setState({ editGod: response.build.god })
                this.setState({ editGodImage: response.build.image })
                this.setState({ editItem1: response.build.item1 })
                this.setState({ editItem2: response.build.item2 })
                this.setState({ editItem3: response.build.item3 })
                this.setState({ editItem4: response.build.item4 })
                this.setState({ editItem5: response.build.item5 })
                this.setState({ editItem6: response.build.item6 })
                this.setState({ editImage1: response.build.image1 })
                this.setState({ editImage2: response.build.image2 })
                this.setState({ editImage3: response.build.image3 })
                this.setState({ editImage4: response.build.image4 })
                this.setState({ editImage5: response.build.image5 })
                this.setState({ editImage6: response.build.image6 })
                console.log(this.state)
            })
            .then(this.props.toggleEdit)
    }

    render() {
        // if (this.state.editGod !== "") {
        //     return (
        //         <div className="editBuild">
        //             <p className="god">hi</p>
        //         </div>
        //     )
        // }
        return (
            <div className="god-button-options">
                <button id={this.props.id} type="button" className="edit-build-button" onClick={this.onClickEdit}> Edit Build </button>
            </div>
        );
    }
}