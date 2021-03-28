import React from 'react';
import {Header} from "./components/Header/Header";
import axios from "axios";
import {Table} from "./components/Table/Table";



export function App() {

 axios.get("http://178.128.196.163:3000/api/records").then(response=>console.log(data = response.data));



  return (
    <div className="App">
      <Header/>
      <Table data ={data}></Table>
    </div>
  );
}


