import React from 'react';
import styled from 'styled-components';

const BienvenidaContainer = styled.div`
  text-align: center;
  margin: 2rem;
`;

const BienvenidaTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const BienvenidaSubtitle = styled.h2`
  font-size: 1.8rem;
  color: #555;
  margin: 1rem 0;
`;

const BienvenidaText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

const BienvenidaList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  display: inline-block;
`;

const BienvenidaListItem = styled.li`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Bienvenida = () => {
  return (
    <BienvenidaContainer>
      <BienvenidaTitle>Bienvenida</BienvenidaTitle>
      <BienvenidaText>
        Aquí puedes explicar el propósito y funcionamiento de la web. Una aplicació per calcular el pressupost d'una pàgina web, afegint més interaccions amb l'usuari/ària que en la pràctica anterior (caselles de selecció, inputs, botons). La nostra web haurà de reaccionar i modificar el preu total en funció de les opcions que triï l'usuari/ària.
      </BienvenidaText>
      <BienvenidaSubtitle>Características de nuestra calculadora</BienvenidaSubtitle>
      <BienvenidaList>
        <BienvenidaListItem>Selección de opciones para calcular el presupuesto</BienvenidaListItem>
        <BienvenidaListItem>Interacción dinámica y actualización en tiempo real</BienvenidaListItem>
        <BienvenidaListItem>Personalización según las necesidades del usuario</BienvenidaListItem>
        <BienvenidaListItem>Almacenamiento de preferencias en el navegador</BienvenidaListItem>
      </BienvenidaList>
    </BienvenidaContainer>
  );
};

export default Bienvenida;
