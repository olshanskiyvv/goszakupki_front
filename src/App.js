import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginForm";
import RegForm from "./components/RegForm";
import Doc from "./components/documents";
import Prof from "./components/ProfileBody";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/profile' element={<><Header/><Prof/></>}/>
        <Route path='/documents' element={<><Header/><Doc/></>}/>
        <Route path='/sing-up' element={<RegForm/>}/>
      </Routes>
    </Router>
    </>);
}

export default App;
