import React from 'react';
import styled from 'styled-components';

const BudgetItemContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const BudgetItem = ({ budget }) => {
  const { budgetName, clientName, precioTotal, services, date } = budget;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <BudgetItemContainer>
      <h3>{budgetName}</h3>
      <p>Cliente: {clientName}</p>
      <p>
        Servicio seleccionado:{" "}
        {services.web ? "Web" : services.seo ? "SEO" : "Ads"}
      </p>
      <p>Precio total: {precioTotal}€</p>
      <p>Fecha: {formatDate(date)}</p>
    </BudgetItemContainer>
  );
};

export default BudgetItem;
