import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            name: "",
            picture: ""

        }
    }
    componentWillUnmount() {
        this.profile()
    }
    
    profile(){
        let url = `http://localhost:3001/api/profile/`;
        console.log(url);
        axios.get(url)
        .then (res => {
            console.log(res.data);
            this.setState({username: res.data,  name: res.data, picture: res.data})
        })
        .catch(e => console.log(e))
    }


    render() {
        let {username, name, picture} = this.state
        return (
            <div>
                <h2>username={this.state.username}</h2> 
                <h4>name={this.state.name} </h4> 
                <h4>picture={this.state.picture}</h4>
            </div>
        )
    }
}