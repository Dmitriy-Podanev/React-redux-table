import React from 'react';
import {Header} from "./components/Header/Header";
import axios from "axios";
import {Table} from "./components/Table/Table";
import {useDispatch, useSelector} from "react-redux";

export function App() {

 axios.get("http://178.128.196.163:3000/api/records").then(response=>data=response.data);

const dispatch = useDispatch()
const data = useSelector(state => state.data)

  return (
    <div className="App">
      <Header/>
      <Table/>
    </div>
  );
}


