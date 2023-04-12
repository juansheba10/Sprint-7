import React, { useState } from 'react';
import styled from 'styled-components';

const InfoButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #6c757d;
  border: none;
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

const InfoPopup = ({ message }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      <InfoButton onClick={togglePopup}>i</InfoButton>
      {popupVisible && (
        <PopupContainer onClick={togglePopup}>
          <PopupContent>
            <p>{message}</p>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
  );
};

export default InfoPopup;
