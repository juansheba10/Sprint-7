import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [precioWeb, setPrecioWeb] = useState(0); // Inicializamos el precio de la página web en 500
  const [precioSEO, setPrecioSEO] = useState(0); // Inicializamos el precio de la consultoría SEO en 250
  const [precioAds, setPrecioAds] = useState(0); // Inicializamos el precio de la campaña de Google Ads en 200
  const [precioTotal, setPrecioTotal] = useState(0); // Inicializamos el precio total en 0

  const modificarPrecioWeb = () => {
    if (precioWeb === 500) {
      setPrecioWeb(0);
    } else {
      setPrecioWeb(500);
    }
  }

  const modificarPrecioSEO = () => {
    if (precioSEO === 250) {
      setPrecioSEO(0);
    } else {
      setPrecioSEO(250);
    }
  }

  const modificarPrecioAds = () => {
    if (precioAds === 200) {
      setPrecioAds(0);
    } else {
      setPrecioAds(200);
    }
  }
  
  const calcularPrecioTotal = () => {
    setPrecioTotal(precioWeb + precioSEO + precioAds);
  }

  // Llamamos a la función calcularPrecioTotal cada vez que se actualiza el estado de alguna de las casillas
  React.useEffect(() => {
    calcularPrecioTotal();
  }, [precioWeb, precioSEO, precioAds]);

  return (
    <div className="App">
        <p>
          Precio total: {precioTotal}€
        </p>
        <label>
          <input type="checkbox" checked={precioWeb === 500} onChange={modificarPrecioWeb} /> Página web (500€)
        </label>
        <label>
          <input type="checkbox" checked={precioSEO === 250} onChange={modificarPrecioSEO} /> Consultoría SEO (250€)
        </label>
        <label>
          <input type="checkbox" checked={precioAds === 200} onChange={modificarPrecioAds} /> Campaña de Google Ads (200€)
        </label>
    </div>
  );
}

export default App;
