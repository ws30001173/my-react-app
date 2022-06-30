import React from "react";

/* Life cycle methods */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  // called before rendering, set state object
  // based on initial props
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.color };
  }
  // outputs the HTML to the DOM
  render() {
    return <p>{this.state.favoriteColor}</p>;
  }
}

export default Header;
