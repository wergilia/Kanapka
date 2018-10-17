import React from 'react'


export default class SearchBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     stringToSearch: "",
   };
 }

 handleInputChange = (string) => {
   this.setState({ stringToSearch: string.target.value });
 }

 handleSubmit = () => {
   let {stringToSearch} = this.state
   this.props.submitSearch(stringToSearch)
 }

 render() {
   let {stringToSearch} = this.props;
   return (
     <div>
       <input
         style={{width: "400px"}}
         placeholder = "What do you want to eat?"
         type = "text"
         value = { stringToSearch }
         onChange = { element => this.handleInputChange(element)}
       />
       <button onClick = { () => this.handleSubmit()}>Search for your favourite recipe/> </button>
     </div>
   )
 }
}