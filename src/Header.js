import React from "react";

/* LifeCycle method
   Mounting, Updating, Unmounting
*/

class Header extends React.Component {
  // initiate atate, props object and other values
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  /* At update
  called before rendering and at update, 
  set state object based on initial props
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.color };
  } 
  shouldComponentUpdate() {
    return false
  }
  render() {
    return <p>{this.state.favoriteColor}</p>;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  */

  // called after rendered
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 1000);
  }
  // componentWillUnmount(), called before removing component from DOM

  // outputs the HTML to the DOM
  render() {
    return <p>{this.state.favoriteColor}</p>;
  }
}

export default Header;
