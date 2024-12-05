import React, {useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default Formulario;
