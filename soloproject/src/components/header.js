import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import ham from "../img/hamburger.png";
import { useState } from "react";

const Head = styled.header`
  margin: 0;
  padding: 10px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0 10px #aaa;
  cursor: default;
`;

const Logo = styled.img`
  height: 10vh;
  &:hover {
    cursor: pointer;
  }
`;

const Ham = styled.img`
  height: 5vh;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 50px;
  font-weight: 1000;
  margin-left: 10px;
`;

const Menu = styled.div`
  text-align: center;
  position: absolute;
  background-color: white;
  font-size: large;
  font-weight: 550;
  border-radius: 10px;
  padding: 10px 0;
  top: 100%;
  left: 90%;
  transform: translate(-250px, -20px);
  display: ${(props) => (props.on ? null : "none")};
  box-shadow: 0 0 10px #aaa;
  cursor: default;
`;

const Btn = styled.button`
  width: 250px;
  font-size: large;
  font-weight: 550;
  background-color: white;
  border-width: 1px 0 0 0;
  border-color: #ddd;
  margin-top: 10px;
  padding-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const NavigateMain = () => {
    navigate("/fe-sprint-coz-shopping/");
    setOn(false);
  };

  const [on, setOn] = useState(false);
  const OpenMenu = () => {
    on ? setOn(false) : setOn(true);
  };

  const NavigateList = () => {
    navigate("/fe-sprint-coz-shopping/products/list");
    setOn(false);
  };

  const NavigateBookmark = () => {
    navigate("/fe-sprint-coz-shopping/bookmark");
    setOn(false);
  };

  return (
    <Head>
      <Logo src={logo} alt="1" onClick={NavigateMain} />
      <Span>COZ Shopping</Span>
      <Ham src={ham} alt="2" onClick={OpenMenu} />
      <Menu on={on}>
        OOO님 안녕하세요!
        <Btn onClick={NavigateList}>상품리스트 페이지</Btn>
        <Btn onClick={NavigateBookmark}>북마크 페이지</Btn>
      </Menu>
    </Head>
  );
};

export default Header;
