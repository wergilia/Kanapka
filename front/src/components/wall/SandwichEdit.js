import React from "react";
import SandwichService from "./SandwichService";
import _ from 'lodash'

export default class SandwichEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwich: null,
      id: props.match.match.params.id,
      author: this.props.userInSession._id,
      sandwichName: "",
      sandwichBase: [],
      sandwichMiddle: [],
      sandwichToppings: [],
      sandwichCondiments: [],
      file: "",
      bases: ["Rye", "White", "Whole Wheat", "Bagel"],
      middles: ["Pecorino", "Ricotta", "Gouda", "Cheese", "Goat Cheese", "Feta", "Anchovy", "Tuna", "Ham", "Salami"],
      toppings: ["Tomato", "Lettuce", "Olives", "Pepper", "Cucumber", "Onion", "Baked Beetroot", "Walnuts"],
      condiments: ["Mayonese", "Mustard", "Horseradish", "Parsley", "Olive Oil", "Butter", "Black Pepper"],
    };
    this.service = new SandwichService();
  }

  componentWillMount() {
    this.getSandwich();
  }

  getSandwich() {
    this.service
      .oneSandwich(this.state.id)
      .then(res => {
        this.setState({
          sandwichName: res.name,
          sandwichBase: res.base,
        });
      })
      .catch(e => console.log(e));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.sandwichName;
    const sandwichBase = this.state.sandwichBase;
    const sandwichMiddle = this.state.sandwichMiddle;
    const sandwichToppings = this.state.sandwichToppings;
    const sandwichCondiments = this.state.sandwichCondiments;
    const id = this.state.id;
    const author = this.state.author
    const file = this.state.file


    this.service.sandwichEdit(name, sandwichBase, sandwichMiddle, sandwichToppings, sandwichCondiments, author, file, id)
      .then(res => {
        this.setState({
          name: "",
          sandwichBase: "",
          sandwichMiddle: "",
          sandwichToppings: "",
          sandwichCondiments: "",
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = (event) => {
    console.log(event.target)
    let { name, value } = event.target
    this.setState({ [name]: value });
  };

  handleChangeArray = (index, value, name) => {
    let middleArr = this.state.sandwichMiddle;
    let toppingsArr = this.state.sandwichToppings;
    let condimentsArr = this.state.sandwichCondiments;

    if (name === "sandwichMiddle") {
      middleArr.push(value)
    } else if (name === "sandwichToppings") {
      toppingsArr.push(value)

    } else if (name === "sandwichCondiments") {
      condimentsArr.push(value)
    } else {
      return;
    }

    this.setState({
      sandwichMiddle: _.uniq(middleArr), sandwichToppings: _.uniq(toppingsArr), sandwichCondiments: _.uniq(condimentsArr)
    })

  }

  handleChangeFile = (event) => {
    const value = event.target.files[0];
    this.setState({file: value});
  }

  render() {
    return (
      <div>
        <h3>Update your Sandwich</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="sandwichName" value={this.state.sandwichName} onChange={e => this.handleChange(e)} />

          <label>Base</label>
          <select type="select-multiple" name="sandwichBase" onChange={(e) => { console.log(e.target); return this.handleChange(e) }}>
            {this.state.sandwichBase ?
              this.state.bases.map((base, i) => {
                return (
                  <option key={i} type="text" name="sandwichBase" value={base}>{base}</option>
                )
              }) : ""}
          </select>
          <br></br>
          <br></br>
          <b><label>Middle</label></b>
          {this.state.sandwichMiddle ?
            this.state.middles.map((middle, i) => (
              <div value={this.state.sandwichMiddle} key={i} onChange={(e) => { return this.handleChangeArray(i, e.target.value, e.target.name) }}>
                <input type="checkbox" name={`sandwichMiddle`} value={middle} />
                <label htmlFor={`sandwichMiddle`}>{middle}</label>
              </div>
            ))
            : ""}
          <br></br>
          <b> <label>Toppings</label></b>
          {this.state.sandwichToppings ?
            this.state.toppings.map((toppings, i) => (
              <div value={this.state.sandwichToppings} key={i} onChange={(e) => { return this.handleChangeArray(i, e.target.value, e.target.name) }}>
                <input type="checkbox" name={`sandwichToppings`} value={toppings} />
                <label htmlFor={`sandwichToppings`}>{toppings}</label>
              </div>
            ))
            : ""}
          <br></br>
          <b><label>Condiments</label></b>
          {this.state.sandwichCondiments ?
            this.state.condiments.map((condiments, i) => (
              <div value={this.state.sandwichCondiments} key={i} onChange={(e) => { return this.handleChangeArray(i, e.target.value, e.target.name) }}>
                <input type="checkbox" name={`sandwichCondiments`} value={condiments} />
                <label htmlFor={`sandwichCondiments`}>{condiments}</label>
              </div>
            ))
            : ""}

          <label>Photo</label>
          <input type="file" name="photo" onChange={(e) => this.handleChangeFile(e)} />

          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}