
import './App.css';
import React, { useState } from 'react'; 
import Contador from './Contador';
import Formulario from './Formulario';
import ToggleVisibilidad from './ToggleVisibilidad';
import ListaTareas from './ListaTareas';
import BuscadorProductos from './BuscadorProductos';


function App() {
  const [componenteActivo, setComponenteActivo] = useState(null);

  const renderizarComponente = () => {
    switch (componenteActivo) {
      case 'contador':
        return <Contador />;
      case 'formulario':
        return <Formulario />;
      case 'toggle':
        return <ToggleVisibilidad />;
      case 'listaTareas':
        return <ListaTareas />;
      case 'buscador':
        return <BuscadorProductos />;
      default:
        return <p>Selecciona un ejercicio para verlo.</p>;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => setComponenteActivo('contador')}>Ejercicio 1: Contador</button></li>
          <li><button onClick={() => setComponenteActivo('formulario')}>Ejercicio 2: Formulario</button></li>
          <li><button onClick={() => setComponenteActivo('toggle')}>Ejercicio 3: Toggle de Visibilidad</button></li>
          <li><button onClick={() => setComponenteActivo('listaTareas')}>Ejercicio 4: Lista de Tareas</button></li>
          <li><button onClick={() => setComponenteActivo('buscador')}>Ejercicio 5: Buscador de Productos</button></li>
        </ul>
      </nav>
      <div>{renderizarComponente()}</div>
    </div>
  );
}

export default App;