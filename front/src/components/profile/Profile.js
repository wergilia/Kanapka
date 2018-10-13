import React, { Component } from 'react';
import AuthService from '../auth/AuthService';
import { Link } from 'react-router-dom';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedInUser: null, hidden: true}
        this.service = new AuthService();
    }

    getTheUser = (userObj) => {
        this.setState({
            loggedInUser: userObj
        })
    }

    fetchUser(){
        if(this.state.loggedInUser === null) {
            this.service.loggedin()
            .then(res => {
                this.setState({
                    loggedInUser : res
                })
            })
            .catch(err => {
                this.setState({
                    loggedInUser : false
                })
            })                
        }
    }

    toggleForm(){
        const hidden = !this.state.hidden
        this.setState({hidden:hidden})
    }
    render() {
        this.fetchUser()
        // let { loading } = this.state
        let { username, name, imgPath, imgName } = this.state.loggedInUser
        console.log(this.state.loggedInUser)
        

        return (
            <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="{this.state.imgPath}" />
                                    </figure>
                                </div>
                                <h1>HELLLLLLOOOOOOOOOS</h1>
                                <div className="media-content">
                                    <p className="title is-4">{username}</p>
                                    <p className="subtitle is-6">{this.state.name}</p>
                                    <p className="subtitle is-6">{this.state.email}</p>
                                </div>
                            </div>
                        </div>
                        <footer className="card-footer">

                            <Link to={`/edit/${this.state.params}`}><button onClick={() => this.handleEditable()}>Edit</button></Link>
                            <button>Delete</button>
                            {/* <button onClick={() => this.allSandwiches()}>Reload</button> */}
                        </footer>
                    </div>
        )
    }

    
    
    
    
    
    
}

export default Profile;