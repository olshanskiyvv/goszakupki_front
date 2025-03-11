import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginForm";
import RegForm from "./components/RegForm";
import Doc from "./components/documents";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header";
import CatalogPage from "./pages/catalog-page";
import { HeaderMaket } from "./components/HeaderMaket";
import { ProductGrid } from "./components/ProductGrid";
import DocPages from "./pages/DocPages";
import DocPagesMiddle from "./pages/DocPagesMiddle";
import DocPagesFile from "./pages/DocPagesFile";
import Notifications from "./pages/notifications";
import Necessity from "./pages/necessity";
import Account from "./pages/account";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/documents' element={<><Header/><Doc/></>}/>
        <Route path='/sing-up' element={<RegForm/>}/>
        <Route path='/catalog' element={<><HeaderMaket/><CatalogPage/><ProductGrid/></>}/>
        <Route path='/docpages' element={<><HeaderMaket/><DocPages/></>}/>
        <Route path='/docpagesmiddle' element={<><HeaderMaket/><DocPagesMiddle/></>}/>
        <Route path='/docpagesfile' element={<><HeaderMaket/><DocPagesFile/></>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/necessity' element={<Necessity/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </Router>
    </>);
}

export default App;
