import React from 'react';
import ProfileService from './ProfileService'

export default class ProfileUdpateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            username: "",
            email: "",
            file:null
        }

        this.service = new ProfileService();            
       
        }

        handleFormSubmit = (event) => {
        
            event.preventDefault();
            const name = this.state.name;
            const email = this.state.email;
            const file = this.state.file;
            

            this.service.profile(name, email, file, this.props.userInSession._id)
            .then(res => {
                this.setState({
                    name: res.user.name,                   
                    email: res.user.email,
                    photo: res.user.imgPath                
                });
                               
            })
            .catch(err => console.log(err))
        }

        handleChange = (event) => {

            let { name, value } = event.target;
            this.setState({[name]: value});
        }
        
        handleChangeFile = (event) => {
            const value = event.target.files[0];
            this.setState({file: value});
          }

        render() {
            
            return(
                <div>
                    <h3>Update your Profile</h3>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />

                        <fieldset>
                        <label>Picture</label>
                        <input type="file" name="photo" onChange={(e) => this.handleChangeFile(e)} />
                        </fieldset>
                        <input type="submit" value="Update" />
                                       
                    </form>
                
                </div>
            )
        }
}