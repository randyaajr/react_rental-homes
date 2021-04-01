import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>
          <Button to="/homes">Homes</Button>
        </ColumnLeft>
        <ColumnRight>
          <img src="#" alt="Luxury Villa" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
