import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import '../styles/Header.scss';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <>
      <Navbar className="navbar-custom">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand className="brand-text">
            <span className="brand-icon">📋</span>
            <span className="brand-name">React-Bootstrap</span>
          </Navbar.Brand>

          {/* Tabs Desktop */}
          <Nav className="nav-tabs-desktop">
            <Nav.Link className="nav-tab">Tareas</Nav.Link>
            <Nav.Link className="nav-tab active">Metas</Nav.Link>
          </Nav>

          {/* Hamburger Button Mobile */}
          <button className="hamburger-btn" onClick={handleShow}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </Container>
      </Navbar>

      {/* Mobile Menu Offcanvas */}
      <Offcanvas show={showMenu} onHide={handleClose} placement="end" className="mobile-menu">
        <Offcanvas.Header closeButton className="mobile-menu-header">
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-menu-body">
          <Nav className="flex-column mobile-nav">
            <Nav.Link className="mobile-nav-link" onClick={handleClose}>
              Tareas
            </Nav.Link>
            <Nav.Link className="mobile-nav-link active" onClick={handleClose}>
              Metas
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
