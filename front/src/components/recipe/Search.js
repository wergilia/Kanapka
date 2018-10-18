import React from "react";
import axios from "axios";
import SearchBar from './SearchBar'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    searchRecipe(searchText) {
        axios.get(`http://food2fork.com/api/search?key=2ac991b28a23d32edc65065082b35cb1&q=${searchText}`)
            .then(res => {
                console.log(res)
              
            });
      }
    
      
    render() {
        

        return(
            <div>
                <SearchBar submitSearch = { searchText => this.searchRecipe(searchText) }/>
                <h3>Recipe</h3>

            </div>

        )
    }





}