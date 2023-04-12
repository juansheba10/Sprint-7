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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Panel = ({ visible, numPaginas, numIdiomas, onNumPaginasChange, onNumIdiomasChange }) => {
    return (
      <PanelContainer visible={visible}>
        <InputWrapper>
          <label>
            Número de páginas:
            <CustomInput value={numPaginas} onChange={onNumPaginasChange} />
          </label>
          <InfoPopup message="En este componente debe indicar cuántas páginas tendrá su web." />
        </InputWrapper>
        <InputWrapper>
          <label>
            Número de idiomas:
            <CustomInput value={numIdiomas} onChange={onNumIdiomasChange} />
          </label>
          <InfoPopup message="En este componente debe indicar cuántos idiomas tendrá su web." />
        </InputWrapper>
      </PanelContainer>
    );
  };

export default Panel;

