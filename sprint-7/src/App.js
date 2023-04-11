import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Bienvenida from './Bienvenida';
import Calculadora from './Calculadora';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const Navigation = styled.nav`
  background-color: #333;
  padding: 1rem;
  width: 100%;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin: 0 1rem;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: #ccc;
  }
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navigation>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/">Bienvenida</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/calculadora">Calculadora</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </Navigation>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
