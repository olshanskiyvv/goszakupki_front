import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginForm";
import RegForm from "./components/RegForm";
import Doc from "./components/documents";
import Prof from "./components/ProfileBody";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header";
import CatalogPage from "./pages/catalog-page";
import { HeaderMaket } from "./components/HeaderMaket";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/profile' element={<><Header/><Prof/></>}/>
        <Route path='/documents' element={<><Header/><Doc/></>}/>
        <Route path='/sing-up' element={<RegForm/>}/>
        <Route path='/catalog' element={<><HeaderMaket/><CatalogPage/><ProductGrid/></>}/>
      </Routes>
    </Router>
    </>);
}

export default App;
