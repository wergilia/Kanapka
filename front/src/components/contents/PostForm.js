import React from 'react';
import ProfileService from '../profile/ProfileService'

export default class PostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            text: "",
            author: this.props.userInSession._id,

        }

        this.service = new ProfileService();

    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.service.newPost()
            .then(res => {
                this.setState({
                    title: res.user.title,
                    text: res.user.text,

                });

            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {

        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {

        return (
            <div>
                <h3>Create a Post</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} />

                    <label>Text</label>
                    <textarea name="text" rows="3" cols="33" maxlength="200" wrap="hard" value={this.state.text} onChange={ e => this.handleChange(e)} />
                    
                    <input type="submit" value="Post" />

                </form>

            </div>
        )
    }
}