import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem 5rem;
    text-align: left;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }

  img {
    width: 150px;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const RequestLink = styled.div`
  a {
    color: #4CAF50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterNote = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LogoContainer>
          <img src="/images/logo-bg-3 2.png" alt="Company Logo" /> 
        </LogoContainer>
        <InfoContainer>
          <ContactInfo>
            <div><FaPhoneAlt /> +91 0000000000</div>
            <div><FaEnvelope /> demo@gmail.com</div>
            <div><FaMapMarkerAlt /> Mumbai, India</div>
          </ContactInfo>
          <RequestLink>
            <a href="#leave-request">Leave a request</a>
          </RequestLink>
        </InfoContainer>
      </FooterContainer>
      <FooterNote>We work throughout the world</FooterNote>
    </FooterSection>
  );
};

export default Footer;
