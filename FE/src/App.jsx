import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import AdminAdd from "./pages/AdminAdd"
import DetailPage from "./pages/DetailPage"
import NoPage from "./pages/NoPage"
import Layout from "./components/Layout"
import MainProvider from "./context/MainProvider";
import Basket from "./pages/Basket";
import Wish from "./pages/Wish";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminadd" element={<AdminAdd />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wish" element={<Wish />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </>
  )
}

export default App
