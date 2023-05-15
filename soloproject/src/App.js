import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import List from "./pages/list";
import Bookmark from "./pages/bookmark";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
		*{
      padding : 0;
      margin : 0;
    }
`;

const Maincont = styled.main`
  margin: 0 10%;
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=8")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Maincont>
          <Routes>
            <Route path="/" element={<Main data={data} />} />
            <Route path="/products/list" element={<List data={data} />} />
            <Route path="/bookmark" element={<Bookmark data={data} />} />
          </Routes>
        </Maincont>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
