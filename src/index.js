import React from "react";
import ReactDOM from "react-dom/client";
import { Garage } from "./Garage";

// JSX
const myFirstElement = <h1>Hello~</h1>;

// render HTML code inside specified HTML element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage location="garage" />);
