import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faDesktop, faGlobe, faPalette, faBug, faRocket, faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 12.5rem;
  margin: 0.625rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: #4CAF50;
`;

const FullDevelopmentCycle = () => {
  return (
    <Section>
      <Title>Full Development Cycle</Title>
      <Content>
        <Column>
          <Item><Icon icon={faMobileAlt} /> iOS development</Item>
          <Item><Icon icon={faDesktop} /> Android development</Item>
          <Item><Icon icon={faGlobe} /> Web development</Item>
        </Column>
        <Column>
          <Item><Icon icon={faPalette} /> UI/UX design</Item>
          <Item><Icon icon={faBug} /> Testing</Item>
          <Item><Icon icon={faRocket} /> Launch</Item>
        </Column>
        <Column>
          <Item><Icon icon={faLightbulb} /> IT consulting</Item>
        </Column>
      </Content>
    </Section>
  );
};

export default FullDevelopmentCycle;
