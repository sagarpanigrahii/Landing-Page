import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  max-width: 37.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-right: 2.5rem;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  color: #FFC107;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SubText = styled.p`
  font-size: 1.125rem;
  color: #777;
  margin-top: 1.25rem;
`;

const ImageContainer = styled.div`
  max-width: 31.25rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const FormContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  max-width: 37.5rem;
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3125rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding: 0.625rem 1.25rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <TextContainer>
          <HeroText>User-Centric Excellence</HeroText>
          <SubText>
            Our App Development services Tackles Your Pain Points. Experience a
            Seamless Digital Journey with Desun - Where Every Line of Code
            Resolves Your Challenges and Elevates Your App Experience to
            Unparalleled Heights.
          </SubText>
          <FormContainer>
            <Form>
              <InputGroup>
                <Label>Full name</Label>
                <Input type="text" placeholder="Your Name" />
              </InputGroup>
              <InputGroup>
                <Label>Phone number</Label>
                <Input type="text" placeholder="+91 0000000000" />
              </InputGroup>
              <InputGroup>
                <Label>Business name</Label>
                <Input type="text" placeholder="Your Business Name" />
              </InputGroup>
              <InputGroup>
                <Label>Business mail</Label>
                <Input type="email" placeholder="demoaccount@gmail.com" />
              </InputGroup>
              <Button type="submit">Get consultation</Button>
            </Form>
          </FormContainer>
        </TextContainer>
        <ImageContainer>
          <HeroImage src="/images/комментарий к отзыву 1.png" alt="App Screenshot" />
        </ImageContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;
