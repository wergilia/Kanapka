import React, { Component } from 'react';
import AuthService from '../auth/AuthService';
import { Link } from 'react-router-dom';
import ProfileUpdateForm from './ProfileUpdateForm'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedInUser: null, hidden: true, editable: false}
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
        this.setState({hidden: false})
    }

    handleEditable() {
        this.setState({ editable: true })
    }

    render() {
        this.fetchUser()
        // let { loading } = this.state
        // let { username, name, imgPath, imgName } = this.state.loggedInUser
        console.log(this.state.loggedInUser)
        console.log(this.props) 
        // En this.props.userInSessionr.username deberia salirte This state al principio es null y por eso te falla. Porque el fetuser es asincrono. Pero los props los tiene desde el principio y lo puedes usar directamente 
        

        return (
            <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={this.props.userInSession.imgPath}/>
                                    </figure>
                                </div>
                                <h1>HELLLLLLOOOOOOOOOS</h1>
                                <div className="media-content">
                                    <p className="title is-4">{this.props.userInSession.username}</p>
                                    <p className="subtitle is-6">{this.props.userInSession.name}</p>
                                    <p className="subtitle is-6">{this.props.userInSession.email}</p>
                                </div>
                            </div>
                        </div>
                        <footer className="card-footer">

                            {/* <Link to={`/edit/${this.state.params}`}> */}
                            <button onClick={() => this.toggleForm()}>Edit</button>
                            <div hidden={this.state.hidden}><ProfileUpdateForm toggleForm={() => this.toggleForm()} userInSession={this.state.loggedInUser} getUser={this.getTheUser}/> </div>
                            <button>Delete</button>
                            {/* <button onClick={() => this.allSandwiches()}>Reload</button> */}
                        </footer>
                    </div>
        )
    }

    
    
    
    
    
    
}

export default Profile;