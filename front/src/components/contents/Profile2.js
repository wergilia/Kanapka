import React, { Component } from 'react';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate'
import { Link } from 'react-router-dom';


export default class Profile extends Component {
    constructor(props) {
        console.log(props.currentUser._id)
        super(props);
        this.state = {
            profile: null,
            loading: true,
            editable: false,
            params: props.currentUser._id
        }
    }

    componentWillMount() {
        this.profile()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    profile() {
        console.log(this.props.currentUser.username)
        let url = `http://localhost:4000/profile/` + this.props.currentUser._id;
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data);
                this.setState({ profile: res.data, loading: false })
            })
            .catch(e => console.log(e))
    }

    handleEditable() {
        this.setState({ editable: true })
    }

    render() {
        let { loading } = this.state
        let { username, name, picture } = this.state
        if (!loading) {
            if (this.state.editable) {
                return (

                    <Link to={`/edit/${this.state.params}`}>Weronika</Link>
                )

            } else {
                return (
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="{this.state.profile.imgPath}" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.profile.username}</p>
                                    <p className="subtitle is-6">{this.state.profile.name}</p>
                                    <p className="subtitle is-6">{this.state.profile.email}</p>
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


        } else {
            return <p>Loading...</p>
        }
    }
}