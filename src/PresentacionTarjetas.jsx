import { useContext } from 'react';
import { TarjetasContext } from './ContenedorTarjetas.jsx';

export default function PresentacionTarjetas() {
  const { tarjetas, agregarTarjeta, nuevaTarjeta, manejarCambios } = useContext(TarjetasContext);

  return (
    <div className="presentacion-tarjetas">
      {/* Formulario arriba (apilado, centrado) */}
      <div className="formulario">
        <div className="campo">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={nuevaTarjeta.titulo}
            onChange={manejarCambios}
            placeholder="Escribe el título"
          />
        </div>

        <div className="campo">
          <label htmlFor="descripcion">Descripción</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={nuevaTarjeta.descripcion}
            onChange={manejarCambios}
            placeholder="Escribe la descripción"
          />
        </div>

        <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
      </div>

      {/* Listado abajo */}
      <div className="listado">
        <ul>
          {tarjetas.map((tarjeta, index) => (
            <li key={index} className="tarjeta">
              <h3>{tarjeta.titulo}</h3>
              <p>{tarjeta.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}