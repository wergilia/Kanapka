import React from "react";
import axios from "axios";
import SearchBar from './SearchBar'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    searchRecipe(stringToSearch) {
        axios.get(`http://food2fork.com/api/search?key=2ac991b28a23d32edc65065082b35cb1&q=${stringToSearch}`)
            .then(res => {
                console.log(res)
              
            });
      }
    
      
    render() {
        

        return(
            <div>
                <SearchBar submitSearch = { stringToSearch => this.searchRecipe(stringToSearch) }/>
                <h3>Recipe</h3>

            </div>

        )
    }





}