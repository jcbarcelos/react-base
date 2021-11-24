import React from "react";
import { Container } from "../../styles/styled";
import { Error } from "./styled";

const Index = () => {
  //modelo de history
  //history.push({ pathname: "/" });

  return (
    <Container>
      <Error>Está pagina não existe</Error>
    </Container>
  );
};

export default Index;
