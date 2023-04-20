import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  /* background-color: #333; */
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
`;


function Navbar() {
  return (
    <Nav>
    <h1></h1>
    <div>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Pricing</NavItem>
      <NavItem href="#">Contact</NavItem>
      <NavItem href="#">About Us</NavItem>
    </div>
  </Nav>
  )
}

export default Navbar;