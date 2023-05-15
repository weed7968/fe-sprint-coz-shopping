import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Item from "./pages/item";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item" element={<Item />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
