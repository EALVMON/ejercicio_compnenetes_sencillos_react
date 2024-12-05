import React, {useState } from 'react';

function ToggleVisibilidad() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'} Elemento
      </button>
      {visible && <p>Este es un elemento visible</p>}
    </div>
  );
}

export default ToggleVisibilidad;
