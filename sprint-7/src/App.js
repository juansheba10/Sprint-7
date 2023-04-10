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
    guardarEstadoEnLocalStorage();
  };
  
  const modificarPrecioSEO = () => {
    setPrecioSEO(precioSEO === 250 ? 0 : 250);
    guardarEstadoEnLocalStorage();
  };
  
  const modificarPrecioAds = () => {
    setPrecioAds(precioAds === 200 ? 0 : 200);
    guardarEstadoEnLocalStorage();
  };
  
  // También debes modificar las funciones de cambio en el componente Panel
  const handleNumPaginasChange = (value) => {
    setNumPaginas(value);
    guardarEstadoEnLocalStorage();
  };
  
  const handleNumIdiomasChange = (value) => {
    setNumIdiomas(value);
    guardarEstadoEnLocalStorage();
  };

  const guardarEstadoEnLocalStorage = () => {
    const estado = {
      precioWeb,
      precioSEO,
      precioAds,
      panelVisible,
      numPaginas,
      numIdiomas,
    };
    localStorage.setItem('estado', JSON.stringify(estado));
  };
  

  

  // Llamamos a la función calcularPrecioTotal cada vez que se actualiza el estado de alguna de las casillas
  React.useEffect(() => {
    calcularPrecioTotal();// Llamamos a la función para calcular el coste de la página web
  }, [precioWeb, precioSEO, precioAds, panelVisible, numPaginas, numIdiomas]);
  
  React.useEffect(() => {
    const estadoGuardado = localStorage.getItem('estado');
    if (estadoGuardado) {
      const estado = JSON.parse(estadoGuardado);
      setPrecioWeb(estado.precioWeb);
      setPrecioSEO(estado.precioSEO);
      setPrecioAds(estado.precioAds);
      setPanelVisible(estado.panelVisible);
      setNumPaginas(estado.numPaginas);
      setNumIdiomas(estado.numIdiomas);
    }
  }, []);
  

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
  onNumPaginasChange={handleNumPaginasChange}
  onNumIdiomasChange={handleNumIdiomasChange}
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
