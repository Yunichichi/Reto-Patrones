import { createContext, useState } from 'react';
import PresentacionTarjetas from './PresentacionTarjetas.jsx';
import './estilos.css';

export const TarjetasContext = createContext(null);

export default function ContenedorTarjetas() {
  const [tarjetas, setTarjetas] = useState([]);
  const [nuevaTarjeta, setNuevaTarjeta] = useState({ titulo: '', descripcion: '' });

  const manejarCambios = (e) => {
    const { name, value } = e.target;
    setNuevaTarjeta((prev) => ({ ...prev, [name]: value }));
  };

  const agregarTarjeta = () => {
    const titulo = nuevaTarjeta.titulo.trim();
    const descripcion = nuevaTarjeta.descripcion.trim();
    if (!titulo && !descripcion) return;
    setTarjetas((prev) => [...prev, { titulo, descripcion }]);
    setNuevaTarjeta({ titulo: '', descripcion: '' });
  };

  return (
    <TarjetasContext.Provider value={{ tarjetas, agregarTarjeta, nuevaTarjeta, manejarCambios }}>
      <div className="contenedor-tarjetas">
        <h2>Notas</h2>
        <PresentacionTarjetas />
      </div>
    </TarjetasContext.Provider>
  );
}