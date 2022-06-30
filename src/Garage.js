import Car from "./Car";
import Header from "./Header";

function Garage(props) {
  return (
    <>
      <Car />
      <p>Already parked in {props.location}.</p>
      <Header color="yellow" />
    </>
  );
}

export { Garage };
