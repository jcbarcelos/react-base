import React from "react";
import { Container } from "../../styles/styled";
import { Title } from "./styled";
import Notify from "../../config/notify";
import intance from "../../services/api";
import { useDispatch } from "react-redux";
import * as exmapleAction from "../../store/modules/example/action";
const Index = () => {
  const dispatch = useDispatch();

  const toastId = React.useRef(null);

  const [dados, setdados] = React.useState();

  const notifyError = () => {
    toastId.current = Notify("error", "Error!");
  };
  const notifySuccess = () => {
    toastId.current = Notify("success", "Successo!");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(exmapleAction.clicaBotao());
  };
  React.useEffect(() => {
    const getData = async () => {
      const result = await intance.get("/alunos");
      setdados(result.data);
    };
    getData();
  }, [setdados]);

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
