import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

// import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import AuthService from './components/auth/AuthService';
import ProfileService from './components/profile/ProfileService'
// import Contents from './components/contents/Contents'
// import SandwichDisplayer from './components/wall/SandwichDisplayer';
import SandwichDisplayerGrid from './components/wall/SandwichDisplayGrid';
import ProfileUpdateForm from './components/profile/ProfileUpdateForm'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.profile = new ProfileService()
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  render() {
    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} /> 
          </header>
            <Switch> 
            <Route exact path='/profile/:id' render={() => <Profile  getUser={this.getTheUser} userInSession={this.state.loggedInUser}/>} />
            <Route exact path='/sandwich' render={() => <SandwichDisplayerGrid  />} />
            {/* <Route exact path='/profile' render={() => <Profile getUser={this.getTheUser} userInSession={this.state.loggedInUser}/>}/> */}
            {/* <Route exact path="/edit/:id" render={() => <ProfileUpdate currentUser={this.state.loggedInUser}/>}/> */}

            </Switch>
           
         
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
          </header>
          <SandwichDisplayerGrid />




        </div>
      );
    }
  }
}

export default App