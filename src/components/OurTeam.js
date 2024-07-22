import React from 'react';
import styled from 'styled-components';
import teamImg from '../assets/images/IMG_6115.png';  

const Section = styled.section`
  padding: 3rem 1rem;
  background-color: #fff;
  color: #333;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Text = styled.p`
  max-width: 600px;
  margin-bottom: 1.25rem;
`;

const TeamStats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Stat = styled.div`
  font-size: 1.5rem;
  color: #4CAF50;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;

const OurTeam = () => {
  return (
    <Section>
      <Title>Our Team</Title>
      <Content>
        <TextContainer>
          <Text>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it.</Text>
          <TeamStats>
            <Stat>28 team members</Stat>
            <Stat>+100 projects</Stat>
            <Stat>7 years in IT sphere</Stat>
          </TeamStats>
        </TextContainer>
        <ImageContainer>
          <img src={teamImg} alt="Our Team" />
        </ImageContainer>
      </Content>
    </Section>
  );
};

export default OurTeam;
