import React from 'react'


export default class SearchBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     searchText: "",
   };
 }

 handleInputChange = (string) => {
   this.setState({ searchText: string.target.value });
 }

 handleSubmit = () => {
   let {searchText} = this.state
   this.props.submitSearch(searchText)
 }

 render() {
   let {searchText} = this.props;
   return (
     <div>
       <input
         style={{width: "400px"}}
         placeholder = "What do you want to eat?"
         type = "text"
         value = { searchText }
         onChange = { element => this.handleInputChange(element)}
       />
       <button onClick = { () => this.handleSubmit()}>Search for your favourite recipe </button>
     </div>
   )
 }
}