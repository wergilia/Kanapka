import React from "react";

const SandwichDisplayer = ({
  name,
  imgPath,
  base,
  middle,
  toppings,
  condiments
}) => {
  return (
    <div>
      <img src={imgPath}  />

      <div className="name">
        <h2>
          {name} 
        </h2>
      </div>

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
    </div>
  );
};

export default SandwichDisplayer;
