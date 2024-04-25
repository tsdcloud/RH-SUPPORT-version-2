import React, { useContext, useEffect, useState } from "react";
import './index.css'
import { render } from "react-dom";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";

import ProfileBar from "./profileBar/ProfileBar";
import DemandeExplication from "../pages/DemandeExplication/DemandeExplication";
import TopBar from "./topBar/TopBar";
import AuthProvider from "../context/AuthContext";
import { AUTHCONTEXT } from "../context/AuthContext";
import Sanctions from "../pages/Sanctions/Sanctions.jsx";
import Archives from "../pages/Archives/Archives.jsx";
import LoginForm from "./Login/LoginForm.jsx";


export default function App() {

  const {user, setUser, entities, setEntities, defaultProfile, setDefault} = useContext(AUTHCONTEXT);
  const onLogin=()=>{

  }

  useEffect(()=>{

  }, []);

  return (

      <Router>
        {
          (user && defaultProfile) ?
          <>
            <TopBar />
            <ProfileBar />
            <Routes>
              <Route path="*" element={<h2 className="text-2xl">Home page</h2>} />
              <Route path="dashboard" element={<h2 className="text-2xl">Home page</h2>} />
              <Route path="explanation" element={<DemandeExplication />} />
              <Route path="sanction" element={<Sanctions />} />
              <Route path="archives" element={<Archives />} />
            </Routes>
          </>:
          (!defaultProfile) ?
          <>
            Default Profile
          </>:
          (!user) &&
          <>
            <LoginForm 
              onLogin={onLogin}
            />
          </>          
        }
      </Router>
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