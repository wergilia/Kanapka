import React from 'react';
import axios from 'axios';

export default class ProfileUdpateForm extends React.Component {
    constructor(props) {
        console.log(props.currentUser)
        super(props);
        this.state = {
            name: this.props.currentUser.name,
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            imgPath: this.props.currentUser.imgPath
        }
    }

    submitForm() {
        let url = `http://localhost:4000/profile/edit/${this.props.currentUser._id}` 
        console.log(url)
        console.log(this.state)
        axios.patch(url, this.state)
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        return (

            <div>
                <hr />
                <h3>Edit form</h3>
                <p>HELLOOOOOOOOOOOOOOO Update</p>

                {/* <label>Username:</label>
                <input type="text" name="title" value={this.state.username} onChange={e => this.setState({ username: e.currentTarget.value })} />
                <label>Name:</label>
                <input type="text" name="title" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} />
                <label>Email:</label>
                <input type="text" name="title" value={this.state.email} onChange={e => this.setState({ name: e.currentTarget.value })} />
                <label>Picture:</label>
                <input type="file" name="title" value={this.state.imgPath} onChange={e => this.setState({ name: e.currentTarget.value })} />


                <button onClick={() => this.submitForm()} type="submit" value="Submit">Save</button> */}

            </div>
        )
    }
}

