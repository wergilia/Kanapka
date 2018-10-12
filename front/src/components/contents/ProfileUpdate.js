import React from 'react';
import axios from 'axios';

export class ProfileUdpate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            username: props.username,
            email: props.email,
            picture: props.imgPath
        }
    }

    submitForm() {
        let url = `http://localhost:3001/api/profile/` + this.props.currentUser._id;
        axios.put(url, this.state)
        .then8 () => {
            
        }
    }
}