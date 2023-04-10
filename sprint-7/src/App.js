import React, { useState } from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import './App.css';

function App() {
  const [precioWeb, setPrecioWeb] = useState(0); // Inicializamos el precio de la página web en 500
  const [precioSEO, setPrecioSEO] = useState(0); // Inicializamos el precio de la consultoría SEO en 250
  const [precioAds, setPrecioAds] = useState(0); // Inicializamos el precio de la campaña de Google Ads en 200
  const [precioTotal, setPrecioTotal] = useState(0); // Inicializamos el precio total en 0
  const [panelVisible, setPanelVisible] = useState(false);
  const [numPaginas, setNumPaginas] = useState(1);
  const [numIdiomas, setNumIdiomas] = useState(1);


  const calcularPrecioTotal = () => {
    let costeWeb = 0; // Coste base de la página web
    if (panelVisible) {
      costeWeb += numPaginas * numIdiomas * 30; // Añadimos el coste adicional
    }
    const total = precioSEO + precioAds + (precioWeb === 500 ? costeWeb + 500 : costeWeb);
    setPrecioTotal(total);
  }

  const modificarPrecioWeb = () => {
    setPrecioWeb(precioWeb === 500 ? 0 : 500);
    setPanelVisible(!panelVisible);
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

  

  // Llamamos a la función calcularPrecioTotal cada vez que se actualiza el estado de alguna de las casillas
  React.useEffect(() => {
    calcularPrecioTotal();// Llamamos a la función para calcular el coste de la página web
  }, [precioWeb, precioSEO, precioAds, panelVisible, numPaginas, numIdiomas]);
  
  

  return (
    <div className="App">
        <p>
          Precio total: {precioTotal}€
        </p>
        <label>
          <input type="checkbox" checked={panelVisible} onChange={() => setPanelVisible(!panelVisible)}  /> Página web (500€)
        </label>
        <Panel
          visible={panelVisible}
          numPaginas={numPaginas}
          numIdiomas={numIdiomas}
          onNumPaginasChange={setNumPaginas}
          onNumIdiomasChange={setNumIdiomas}
        />
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
