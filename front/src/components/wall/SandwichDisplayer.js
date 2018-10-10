import React from "react";
import SandwichService from "./SandwichService";

export default class SandwichDisplayer extends React.Component {
    constructor(){
        super()
        this.sandwich1 = new SandwichService()
    }

    render() {
        this.sandwich1.all()
        .then (data => console.log(data))
        .catch(err => console.log(err))
        return (
            <div>Hello this is Sandwich Display</div>
        )
    }
}

