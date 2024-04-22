import React, { useContext, useEffect } from "react";
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


export default function App() {
  const {
    user, setUser,
    entities, setEntities,
    permissions, setPermissions
  } = useContext(AUTHCONTEXT);


  useEffect(()=>{

    const getEntity = async (token) => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "/api?end=entity&detail=0&termination=firm&action=",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.request(config);
      const data = await response.data;
      if(data.status === 200){
        return data;
      }
      return null;
    };

    const getInfoUser = async ()=>{
      const request = new Request('/user',{
        method : "GET"
      })
      let response = await fetch(request)
      let data = await response.json();
      const entity = await getEntity(data.access);
  
      if(response.status == 200){
        const userProfile = await {...data};
        localStorage.setItem('entities', JSON.stringify(entity.results));
        // const userProfile = {...data, entity: entity.results};
        console.log(entity.results);
        // setUserInfo(localStorage.setItem('user', JSON.stringify(userProfile)));
        setUser(userProfile);
        setEntities(entity.results);
      }else{
        window.location.href = "/logout"
      }
    }

    getInfoUser();

  }, []);

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