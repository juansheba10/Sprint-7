import React from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import InfoPopup from './InfoPopup';

const PanelContainer = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 10px;
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
