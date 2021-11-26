import React from "react";
import { Container } from "../../styles/styled";
import { Title } from "./styled";
import intance from "../../services/api";
import { useDispatch } from "react-redux";
import * as exmapleAction from "../../store/modules/example/action";
const Index = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(exmapleAction.clicaBotaoRequest());
  };
  React.useEffect(() => {
    const getData = async () => {
      await intance.get("/alunos");
    };
    getData();
  }, []);

  return (
    <Container>
      <Title>Login</Title>

      <button type="button" onClick={handleLogin}>
        Button
      </button>
    </Container>
  );
};

export default Index;
