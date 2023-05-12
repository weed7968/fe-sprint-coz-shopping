import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import ham from "../img/hamburger.png";

const Head = styled.header`
  padding: 40px 10% 0px 10%;
  display: flex;
  align-items: center;
  position: sticky;
`;

const Logo = styled.img`
  height: 10vh;
`;

const Ham = styled.img`
  height: 5vh;
  margin-left: auto;
`;

const Span = styled.span`
  font-size: 50px;
  font-weight: 1000;
  margin-left: 10px;
`;

const Header = () => {
  const navigate = useNavigate();

  const ClickLogo = () => {
    navigate("/");
  };

  const ClickHam = () => {};

  return (
    <Head>
      <Logo src={logo} alt="1" onClick={ClickLogo} />
      <Span>COZ Shopping</Span>
      <Ham src={ham} alt="2" />
    </Head>
  );
};

export default Header;
