import React from "react";
import SandwichService from "./SandwichService";

export default class SandwichDisplayer extends React.Component {
    constructor(props) {
        super(props)
        this.sandwichBox = new SandwichService()
        this.state = {
            name: props.name,
            image: props.image
            
        }
    }

    render() {
        this.sandwichBox.all()
            .then(data => console.log(data))
            .catch(err => console.log(err))
        return (
            <div class="card">
            <p class="title is-4">{this.state.name}</p>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={this.state.image} />
                        
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            {/* <p class="subtitle is-6">@johnsmith</p> */}
                        </div>
                    </div>

                    <div class="content">
                        {/* Lorem ipsum. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a> */}
                        <br/>
                        </div>
                    </div>
                </div>
        )
    }
}

