import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import './NavBar.css';
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={scrolled ? "scrolled navbar-sticky" : "navbar"} 
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/" className="navbar-heading">
            Dipun
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded => !expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle 
                  variant="outline-light" 
                  id="dropdown-basic" 
                  className="navbar-dropdown-toggle"
                >
                  Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item 
                    href="#home" 
                    className={activeLink === 'home' ? 'active' : ''} 
                    onClick={() => onUpdateActiveLink('home')}
                  >
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item 
                    href="#skills" 
                    className={activeLink === 'skills' ? 'active' : ''} 
                    onClick={() => onUpdateActiveLink('skills')}
                  >
                    Skills
                  </Dropdown.Item>
                  <Dropdown.Item 
                    href="#projects" 
                    className={activeLink === 'projects' ? 'active' : ''} 
                    onClick={() => onUpdateActiveLink('projects')}
                  >
                    Projects
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/dipun-mohapatra">
                    <img src={navIcon1} alt="LinkedIn" className="social-icon-img" />
                  </a>
                  <a href="https://github.com/DipunMohapatra">
                    <img src={navIcon2} alt="GitHub" className="social-icon-img" />
                  </a>
                </div>
                <a href="https://www.linkedin.com/in/dipun-mohapatra">
                  <button className="vvd">
                    <span>Let's Connect</span>
                  </button>
                </a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};