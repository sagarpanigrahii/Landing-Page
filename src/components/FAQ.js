import React, { useState } from 'react';
import styled from 'styled-components';

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

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FAQItem = styled.div`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Question = styled.h3`
  font-size: 1.25rem;
  color: #4CAF50;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 0.625rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Section>
      <Title>FAQ</Title>
      <FAQContainer>
        {[
          { question: "What is the cost of a mobile application?", answer: "The cost of a mobile application depends on its complexity and the requirements of the client." },
          { question: "How long will development take?", answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.\n\nAverage development time from start to finished application:\n- Medium projects up to 3 months.\n- Large projects about 4-6 months.\n\nTo get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality." },
          { question: "Do you provide a guarantee for the mobile application?", answer: "Yes, we provide a guarantee for our developed applications." },
          { question: "Will you keep my idea confidential?", answer: "Yes, we ensure complete confidentiality for your ideas and projects." },
        ].map((item, index) => (
          <FAQItem key={index} onClick={() => toggleItem(index)}>
            <Question>{item.question}</Question>
            <span>{openItems[index] ? '-' : '+'}</span>
            <Answer isOpen={openItems[index]}>{item.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </Section>
  );
};

export default FAQ;
