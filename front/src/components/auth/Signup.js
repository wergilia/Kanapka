import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;

    this.service.signup(username, password, email)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email: "",
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome! Create your account profile </h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;