import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar className="navbar-custom mb-4">
      <Container fluid>
        <Navbar.Brand className="brand-text">
          <span className="brand-icon">📋</span>
          <span className="brand-name">Mis Metas y Tareas</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
