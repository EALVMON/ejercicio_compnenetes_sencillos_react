import React, {useState } from 'react';

function BuscadorProductos() {
  const productos = ['Manzana', 'Banana', 'Cereza', 'Durazno', 'Fresa'];
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {productosFiltrados.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorProductos;
