import React from "react";

/* state object maintain Component properties
when state objct changes, Component re-renders */

/* props object passed to constructor and super method, 
multiple props object available as arguments */

/* Constructor initializes objects, super() method access
parent class methods(React.Component)*/

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Tesla",
      model: "Model3",
      color: "black",
      year: "2019",
    };
  }
  // Change state object value
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Car;
