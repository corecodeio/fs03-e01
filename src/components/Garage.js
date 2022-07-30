import Carro from "./Carro";

const Garage = () => {
  return (
    <>
      <h1>Estos son los carros de mi garage:</h1>
      <Carro modelo={"Hilux"} color={"Rojo"} />
      <Carro modelo={"Corolla"} color={"Negro"} />
    </>
  );
};

export default Garage;
