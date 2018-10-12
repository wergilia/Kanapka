import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            loading: true

        }
    }
    componentWillMount() {
        this.profile()
    }

    profile() {
        console.log(this.props.currentUser.username)
        let url = `http://localhost:3001/api/profile/` + this.props.currentUser._id;
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data);
                this.setState({ profile: res.data, loading: false })
            })
            .catch(e => console.log(e))
    }


    render() {
        let { loading } = this.state
        let { username, name, picture } = this.state
        if (!loading) {
            console.log(this.state.profile.username)
            return (
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="{this.state.profile.imgPath}" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{this.state.profile.username}</p>
                                <p class="subtitle is-6">{this.state.profile.email}</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <button>Edit</button>
                        <button>Delete</button>

                    </footer>
                </div>





                // <div>
                //     <h2>username={this.state.profile.username}</h2>
                //     <h4>picture={this.state.profile.imgPath}</h4>
                // </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}