import React from "react";

import { Nav, Headers, Home } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Index = () => {
  const botaoCliclado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Home>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        {botaoCliclado ? "Clicado" : "Não Cliclado"}
      </Home>
      <Headers>
        <Link to="/user">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/teste">
          <FaSignInAlt size={24} />
        </Link>
      </Headers>
    </Nav>
  );
};

export default Index;
