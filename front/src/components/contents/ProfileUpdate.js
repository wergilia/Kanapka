import React from 'react';
import axios from 'axios';

export default class ProfileUdpate extends React.Component {
    constructor(props) {
  console.log(props.currentUser)
        super(props);
        this.state = {
            name: this.props.currentUser.name,
            username: this.props.currentUser.username,
            email: this.props.currentUser.email,
            picture: this.props.currentUser.imgPath
        }
    }

    submitForm() {
        let url = `http://localhost:3001/profile/edit/` + this.props.currentUser._id;
        console.log(url)
        axios.post(url)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
        
            <div>
                <hr />
                <h3>Edit form</h3>
            
                    <label>Name:</label>
                    <input type="text" name="title" value={this.state.name} onChange={e => this.setState({name: e.currentTarget.value})} />
                    <label>Username:</label>
                    <input type="text" name="title" value={this.state.username} onChange={e => this.setState({username: e.currentTarget.value})} />


                    <button onClick={() => this.submitForm()} type="submit" value="Submit">Edit</button>
          
            </div>
        )
    }
}

