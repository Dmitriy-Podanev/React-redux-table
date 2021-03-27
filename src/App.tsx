import React from 'react';
import {Header} from "./components/Header/Header";
import axios from "axios";


export function App() {

 axios.get("http://178.128.196.163:3000/api/records").then(response=>console.log(response.data));



  return (
    <div className="App">
      <Header/>
    </div>
  );
}


