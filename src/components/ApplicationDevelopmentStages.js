import React from 'react';
import styled from 'styled-components';

const DevelopmentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem 5rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 0 2rem;
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;

const ApplicationDevelopment = () => {
  return (
    <DevelopmentSection>
      <TextContainer>
        <h2>Application Development</h2>
        <p>Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.</p>
        <p>Average development time from start to finished application:</p>
        <ul>
          <li>Medium projects up to 3 months</li>
          <li>Large projects about 4-6 months</li>
        </ul>
        <p>To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.</p>
      </TextContainer>
      <ImageContainer>
        <img src="/images/hope-gif1.png" alt="Development" /> 
      </ImageContainer>
      <TextContainer>
        <h2>Confidentiality</h2>
        <p>I will not tell my idea, do you guarantee confidentiality?</p>
      </TextContainer>
    </DevelopmentSection>
  );
};

export default ApplicationDevelopment;
