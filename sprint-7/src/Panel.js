import React from 'react';
import styled from 'styled-components';

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
          <input type="number" value={numPaginas} onChange={e => onNumPaginasChange(e.target.value)} />
        </label>
        <label>
          Número de idiomas:
          <input type="number" value={numIdiomas} onChange={e => onNumIdiomasChange(e.target.value)} />
        </label>
      </PanelContainer>
    );
  };
export default Panel;
