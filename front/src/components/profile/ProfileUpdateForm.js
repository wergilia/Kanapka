import React from 'react';
import ProfileService from './ProfileService'

export default class ProfileUdpateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            username: "",
            email: "",
            imgPath: ""            
        }

        this.service = new ProfileService();            
       
        }

        handleFormSubmit = (event) => {
        
            event.preventDefault();
            const name = this.state.name;
            const email = this.state.email;
            const imgPath = this.state.imgPath;
            

            this.service.profile(name, email, imgPath, this.props.userInSession._id)
            .then(res => {
                this.setState({
                    name: "",                   
                    email: "",
                    imgPath: ""                
                })
                this.props.getUser(res.user)                
            })
            .catch(err => console.log(err))
        }

        handleChange = (event) => {

            let { name, value } = event.target;
            this.setState({[name]: value});
        }
        
        render() {
            console.log(this.props.userInSession);
            
            return(
                <div>
                    <h3>Update your Profile</h3>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />

                        <label>Picture</label>
                        <input type="file" name="imgPath" value={this.state.imgPath} onChange={(e) => this.handleChange(e)} />

                        <input onClick={() =>this.props.toggleForm()} type="submit" value="Update" />
                                       
                    </form>
                
                </div>
            )
        }





}