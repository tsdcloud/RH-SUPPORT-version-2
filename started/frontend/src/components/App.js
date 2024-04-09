import React, { Component, useContext, useEffect } from "react";
import { ConfigProvider } from 'antd'
import './index.css'
import { render } from "react-dom";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfileBar from "./profileBar/ProfileBar";
import DemandeExplication from "../pages/DemandeExplication/DemandeExplication";
import TopBar from "./topBar/TopBar";
import AuthProvider from "../context/AuthContext";
import { AUTHCONTEXT } from "../context/AuthContext";
import Sanctions from "../pages/Sanctions/Sanctions.jsx";
import Archives from "../pages/Archives/Archives.jsx";


export default function App() {
  // const { entities } = useContext(AUTHCONTEXT);
  useEffect(()=>{
    // console.log(entities);
  }, [])

  return (
      <Router>
        <TopBar />
        <ProfileBar />
        <Routes>
          <Route path="*" element={<h2 className="text-2xl">404 NOT FOUND</h2>} />
          <Route path="dashboard" element={<h2 className="text-2xl">Home page</h2>} />
          <Route path="explanation" element={<DemandeExplication />} />
          <Route path="sanction" element={<Sanctions />} />
          <Route path="archives" element={<Archives />} />
        </Routes>
      </Router>
    // <h5>Something</h5>
  )
}

if(module.hot){
  module.hot.accept()
}


const appDiv = document.getElementById("app");
render(
  <AuthProvider>
    <App />
  </AuthProvider>
, appDiv);