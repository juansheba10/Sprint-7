// Calculadora.js
import React, { useState, useEffect } from 'react';
import Panel from './Panel';
import './App.css';
import InfoPopup from './InfoPopup';
import BudgetItem from './BudgetItem';
import styled from 'styled-components';

const CalculadoraContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FormContainer = styled.div`
  flex: 1;
`;

const PresupuestosContainer = styled.div`
  flex: 1;
`;

const PrecioTotal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const AddBudgetButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const SortButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: #0069d9;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 1rem;
`;

const PresupuestoItem = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 5px;
`;



const Calculadora = () =>  {
    const [precioWeb, setPrecioWeb] = useState(0); // Inicializamos el precio de la página web en 500
    const [precioSEO, setPrecioSEO] = useState(0); // Inicializamos el precio de la consultoría SEO en 250
    const [precioAds, setPrecioAds] = useState(0); // Inicializamos el precio de la campaña de Google Ads en 200
    const [precioTotal, setPrecioTotal] = useState(0); // Inicializamos el precio total en 0
    const [panelVisible, setPanelVisible] = useState(false);
    const [numPaginas, setNumPaginas] = useState(1);
    const [numIdiomas, setNumIdiomas] = useState(1);
    const [budgetName, setBudgetName] = useState('');
    const [clientName, setClientName] = useState('');
    const [budgetList, setBudgetList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const addBudget = () => {
      const newBudget = {
        budgetName,
        clientName,
        precioTotal,
        services: {
          web: precioWeb === 500,
          seo: precioSEO === 250,
          ads: precioAds === 200,
        },
        date: new Date().toISOString(),
      };
    
      const updatedBudgetList = [...budgetList, newBudget];
      setBudgetList(updatedBudgetList);
      localStorage.setItem('budgetList', JSON.stringify(updatedBudgetList));
    };

    useEffect(() => {
      const storedBudgets = localStorage.getItem('budgetList');
      const originalBudgets = storedBudgets
        ? JSON.parse(storedBudgets).map((budget) => ({
            ...budget,
            date: new Date(budget.date),
          }))
        : [];
      setBudgetList(originalBudgets);
    }, []);
    

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

    
    const sortAlphabetically = () => {
      const sortedBudgets = [...budgetList].sort((a, b) => a.budgetName.localeCompare(b.budgetName));
      setBudgetList(sortedBudgets);
    };
    
    const sortByDate = () => {
      const sortedBudgets = [...budgetList].sort((a, b) => new Date(a.date) - new Date(b.date));
      setBudgetList(sortedBudgets);
    };
    
    const resetOrder = () => {
      const storedBudgets = localStorage.getItem('budgetList');
      const originalBudgets = storedBudgets
        ? JSON.parse(storedBudgets).map((budget) => ({
            ...budget,
            date: new Date(budget.date),
          }))
        : [];
      setBudgetList(originalBudgets);
    };
    
    
  
    // Llamamos a la función calcularPrecioTotal cada vez que se actualiza el estado de alguna de las casillas
    useEffect(() => {
      calcularPrecioTotal();// Llamamos a la función para calcular el coste de la página web
    }, [precioWeb, precioSEO, precioAds, panelVisible, numPaginas, numIdiomas]);
    
    useEffect(() => {
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

    useEffect(() => {
      const storedBudgets = localStorage.getItem('budgetList');
      const originalBudgets = storedBudgets
        ? JSON.parse(storedBudgets).map((budget) => ({
            ...budget,
            date: new Date(budget.date),
          }))
        : [];
      setBudgetList(originalBudgets);
    }, []);
    
    
  
    return (
      <div className="App">
        <CalculadoraContainer>
          <FormContainer>
            <p>
              Precio total: {precioTotal}€
            </p>
            <label>
              <input type="checkbox" checked={precioWeb === 500} onChange={modificarPrecioWeb} /> Página web (500€)
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
            <label>
              Nombre del presupuesto:
              <input value={budgetName} onChange={(e) => setBudgetName(e.target.value)} />
            </label>
            <label>
              Cliente:
              <input value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </label>
            <button onClick={addBudget}>Agregar presupuesto</button>
          </FormContainer>
          <label>
      Buscar presupuesto:
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
          <PresupuestosContainer>
            <h2>Listado de presupuestos</h2>
            <button onClick={sortAlphabetically}>Ordenar alfabéticamente</button>
  <button onClick={sortByDate}>Ordenar por fecha</button>
  <button onClick={resetOrder}>Reinicializar orden</button>
  {budgetList
        .filter((budget) =>
          budget.budgetName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((budget, index) => (
          <BudgetItem key={index} budget={budget} />
        ))}
          </PresupuestosContainer>
        </CalculadoraContainer>
      </div>
    );
    
  }

export default Calculadora;
