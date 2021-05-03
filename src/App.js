
import React, { useState } from "react";
import Registro from "./vistas/Registro";
import Juego from "./vistas/Juego";

const App = () => {
  const [clickJugar, setClickJugar] = useState(false);
  const [empiezaX, setEmpiezaX] = useState(true);

  function mostrarJuego(comienzaX) {
    setEmpiezaX(comienzaX);
    setClickJugar(true);
  }

  return (
    <div>
      <h2>Tic Tac Toe in React.js</h2>
      {clickJugar === true ? (
        <Juego iniciaX={empiezaX} />
      ) : (
        <Registro iniciarJuego={mostrarJuego} />
      )}
    </div>
  );
};

export default App;
