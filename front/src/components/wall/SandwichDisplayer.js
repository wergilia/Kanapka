import React from "react";
import SandwichService from './SandwichService'
import { Link } from "react-router-dom";

export default class SandwichDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      imgPath: props.imgPath,
      imgName: props.imgName,
      base: props.base,
      middle: props.middle,
      toppings: props.toppings,
      condiments: props.condiments,
      id: props._id

    }
    this.service = new SandwichService();
  }

  render() {

    let { name, imgPath, imgName, base, middle, toppings, condiments, id } = this.state

    return (
      <div>
        <img src={imgPath} />

        <div className="name">
          <h2>
            {name}
          </h2>
        </div>

        <figure className="image is-48x48">
          <img src={imgPath} />
        </figure>

        <div className="base">
          <ul>
            {base ? base.map((base, i) => <li key={i}>{base} </li>) : ""}
          </ul>
        </div>


        <div className="middle">
          <ul>
            {middle ? middle.map((middle, i) => <li key={i}>{middle} </li>) : ""}
          </ul>
        </div>


        <div className="toppings">
          <ul>
            {toppings ? toppings.map((toppings, i) => <li key={i}>{toppings} </li>) : ""}
          </ul>
        </div>

        <div className="condiments">
          <ul>
            {condiments ? condiments.map((condiments, i) => <li key={i}>{condiments} </li>) : ""}
          </ul>
        </div>
        <Link to={`/sandwich/edit/${id}`}>Edit Sandwich</Link>
      </div>
    )
  }
};
