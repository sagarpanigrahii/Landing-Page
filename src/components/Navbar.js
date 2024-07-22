import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 10rem;
    height: auto;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavLink = styled.li`
  a {
    color: #333;
    font-size: 1.125rem;

    &:hover {
      color: #4CAF50;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4CAF50;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src="/images/logo-bg-2 1.png" alt="Logo" />
      </Logo>
      <NavLinks>
        <NavLink><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></NavLink>
        <NavLink><ScrollLink to="media" smooth={true} duration={500}>Media</ScrollLink></NavLink>
        <NavLink><ScrollLink to="cases" smooth={true} duration={500}>Cases</ScrollLink></NavLink>
        <NavLink><ScrollLink to="faq" smooth={true} duration={500}>FAQ</ScrollLink></NavLink>
        <NavLink><ScrollLink to="contacts" smooth={true} duration={500}>Contacts</ScrollLink></NavLink>
      </NavLinks>
      <ContactInfo>
        <ContactItem>
          <i className="fa fa-phone"></i> +91 0000000000
        </ContactItem>
        <ContactItem>
          <i className="fa fa-envelope"></i> demo@gmail.com
        </ContactItem>
      </ContactInfo>
    </NavbarContainer>
  );
};

export default Navbar;
