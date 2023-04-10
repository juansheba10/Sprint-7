import React from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';

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
        </label>
        <label>
          Número de idiomas:
          <CustomInput value={numIdiomas} onChange={onNumIdiomasChange} />
        </label>
      </PanelContainer>
    );
  };

export default Panel;
