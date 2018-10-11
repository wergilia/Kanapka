import React from "react";
import SandwichDisplayer from "./SandwichDisplayer"
import SandwichService from "./SandwichService";
import axios from 'axios'

export default class SandwichDisplayerGrid extends React.Component {
    constructor(){
        super();
        this.state = {
            sandwiches: null,
            loading: true
        }
        // this.service = new SandwichService();
    }
    
    componentWillMount(){
        this.allSandwiches();
    }


    allSandwiches(){
            let url = `http://localhost:3001/api/sandwich/all`;
            console.log(url);
            axios.get(url)
                 .then(res => {
                     console.log(res.data);
                     this.setState({sandwiches: res.data, loading: false});
                 })
                 .catch(e =>  console.log(e));
        }

    render() {
        let {sandwiches, loading} = this.state;
        if(!loading){
            return (
                <div>
                    <button onClick={() => this.allSandwiches()}>Reload</button>
                    {sandwiches.map((sandwich) =>(
                        <SandwichDisplayer {...sandwich} key={sandwich._id} imgPath={sandwich.imgPath} imgName={sandwich.imgName} base={sandwich.base} middle={sandwich.middle} toppings={sandwich.toppings} condiments={sandwich.condiments} />
                    ))}
                </div>
            )
        } else{
            return <p>Loading...</p>
        }
    }
}