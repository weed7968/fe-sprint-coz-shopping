import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import List from "./pages/list";
import Bookmark from "./pages/bookmark";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
		*{
      padding : 0;
      margin : 0;
    }
`;

const Maincont = styled.main`
  margin: 30px 10%;
`;

export const AppContext = createContext();

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DB_HOST}/api/v1/products?count=`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const [bookmark, setBookmark] = useState([14, 89, 24, 50]);

  return (
    <>
      <AppContext.Provider value={{ bookmark, setBookmark }}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Maincont>
            {data ? (
              <Routes>
                <Route
                  path="/fe-sprint-coz-shopping/"
                  element={<Main data={data} />}
                />
                <Route
                  path="/fe-sprint-coz-shopping/products/list"
                  element={<List data={data} />}
                />
                <Route
                  path="/fe-sprint-coz-shopping/bookmark"
                  element={<Bookmark data={data} />}
                />
              </Routes>
            ) : (
              <div>Loding...</div>
            )}
          </Maincont>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
