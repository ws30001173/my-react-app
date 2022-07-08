import Car from "./Car";
import Header from "./Header";
import Football from "./Football";
import { MyForm, MyTextarea, MySelect } from "./MyForm";

function CarMap(props) {
  return <li>I am a {props.brand}</li>;
}

//functional Component, props object, React Event Object
function Garage(props) {
  const cars = [
    { id: 1, brand: "Tesla" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  // map through cars array and return CarMap component
  return (
    <>
      <Car />
      <ol>
        {cars.map((car) => (
          <CarMap key={car.id} brand={car.brand} />
        ))}
      </ol>
      <p>Already parked in {props.location}.</p>
      <Header />
      <Football />
      <MyForm />
      <MyTextarea />
      <MySelect />
    </>
  );
}

export { Garage };
