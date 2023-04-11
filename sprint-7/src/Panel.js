import React from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import InfoPopup from './InfoPopup';

const PanelContainer = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Panel = ({ visible, numPaginas, numIdiomas, onNumPaginasChange, onNumIdiomasChange }) => {
    return (
      <PanelContainer visible={visible}>
        <label>
          Número de páginas:
          <CustomInput value={numPaginas} onChange={onNumPaginasChange} />
          <InfoPopup message="En este componente debe indicar cuántas páginas tendrá su web." />
        </label>
        <label>
          Número de idiomas:
          <CustomInput value={numIdiomas} onChange={onNumIdiomasChange} />
          <InfoPopup message="En este componente debe indicar cuántos idiomas tendrá su web." />
        </label>
      </PanelContainer>
    );
  };

export default Panel;
