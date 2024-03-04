import React, { Component, createContext, useState, useEffect } from "react";
// import { StyleSheet } from '@react-pdf/renderer';
// import Logo from "../utils/Logo";
const axios = require('axios');
const cheerio = require('cheerio');

export const AUTHCONTEXT = createContext()

export default function AuthProvider (props){

  const [user,setUser] = useState(localStorage.getItem('user') || '');
  const [entities, setEntities] = useState([]);

  // const [user,setUser] = useState({member:{is_superuser:false, user_permissions:[]}});
  const [permissions, setPermissions] = useState([]);

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
      const userProfile = {...data, entity: entity.results};
      await setUser(localStorage.setItem('user', JSON.stringify(userProfile)));
      handleGetUserEntities();
    }else{
      window.location.href = "/logout"
    }
  }
 
  
  const handleGetUserEntities = async () => {
    
  }

  // const getPermissions = async (url="/api?end=entity&detail=0&terminaison=employee&action=permissions")=>{
  //   const request = new Request(
  //     url,
  //     {
  //       method: "GET",
  //       headers: headers
  //     }
  //   )
  //   fetch(request).then(res=>res.json().then(data=>{
  //     setPermissions(data.permissions)
  //     const results = data.results
  //     var i = 1
  //     results.forEach(item=>{
  //       item.line_maritime = item.line.business_name
  //       global_settings.push(item)
  //     })
  //     setGlobalSettings(global_settings)
  //     const next = data.next
  //     if(next != null){
  //       var page = next.split('?page=')
  //       url = "/api?end=entity&detail=false&terminaison=employee&action=permissions&page=" + page[1]
  //       getGlobalSetting(url)
  //     }
  //   }))
  // }

  useEffect(() => {
    getInfoUser();
    // getPermissions();
  }, [])

  return (
    <AUTHCONTEXT.Provider value={{
      user, setUser,
      entities, setEntities,
      permissions, setPermissions
    }}>
        {
            props.children
        }
    </AUTHCONTEXT.Provider>
  );
}