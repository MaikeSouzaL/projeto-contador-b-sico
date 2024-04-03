import React, { useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);

  function handleAdd() {
    setNumero(numero + 1);
  }

  function handleRemove() {
    if (numero > 0) {
      setNumero(numero - 1);
    } else {
      alert("O numero já esta zerado");
    }
  }

  function barco() {
    setNumero(0);
  }

  return (
    <div className="container">
      <h1 className="numero">{numero}</h1>
      <div className="containerbtn">
        <button className="btn" onClick={handleAdd}>
          Adicionar
        </button>
        <button className="btn" onClick={handleRemove}>
          Remover
        </button>
        <button className="btn" onClick={barco}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;
