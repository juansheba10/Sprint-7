import React from 'react';

const BudgetItem = ({ budget }) => {
  const { budgetName, clientName, precioTotal, services, date } = budget;

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h3>{budgetName}</h3>
      <p>Cliente: {clientName}</p>
      <p>Servicio seleccionado: {services.web ? 'Web' : services.seo ? 'SEO' : 'Ads'}</p>
      <p>Precio total: {precioTotal}€</p>
      <p>Fecha: {formatDate(date)}</p>
    </div>
  );
};

export default BudgetItem;

