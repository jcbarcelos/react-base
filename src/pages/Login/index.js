import React from "react";
import { Container } from "../../styles/styled";
import { Title } from "./styled";
import Notify from "../../config/notify";

const Index = () => {
  const toastId = React.useRef(null);
  const not = () => {
    toastId.current = Notify("error", "Error!");
  };

  return (
    <Container>
      <Title>Login</Title>

      <button onClick={not}>Button</button>
    </Container>
  );
};

export default Index;
