import React from 'react';
import SandwichService from '../wall/SandwichService'

export default class SandwichCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            file: null,
            base: "",
            middle: "",
            toppings: "",
            condiments: "",
            author: ""           
        }
console.log(props)
        this.service = new SandwichService();            
       
        }

        handleFormSubmit = (event) => {
           
            
            event.preventDefault();
            const author = this.props.userInSession._id;
            const name = this.state.name;
            const base = this. state.base;
            const middle = this.state.middle;
            const toppings = this.state.toppings;
            const condiments = this.state.condiments;
            const file = this.state.file;
            
            
            
            this.service.create(author, name, base, middle, toppings, condiments, file, this.props.userInSession._id)
            .then( res => {
                console.log(res)
                this.setState({
                    name: "",
                    file: null,
                    base: "",
                    middle: "",
                    toppings: "",
                    condiments: "",
                    author: ""    
                });
                this.props.getUser(res.user)
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
                <h3>Let's create your favourite sandwich</h3>
                <form onSubmit={this.handleFormSubmit}>
                  <fieldset>
                    <label>name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                  </fieldset>
                 
                  <input type="submit" value="Create" />
                </form>
              </div>
            )
          }
        }
        