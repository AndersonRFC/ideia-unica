import { useState } from "react";

function Counter() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(0);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}> Adicionar</button>
    </div>
  );
}

export default Counter;
