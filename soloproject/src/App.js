import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Item from "./pages/item";
import Bookmark from "./pages/bookmark";
import styled, { createGlobalStyle } from "styled-components";

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
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Maincont>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/list" element={<Item />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Maincont>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
