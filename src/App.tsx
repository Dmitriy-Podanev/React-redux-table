import React from 'react';
import { Provider, useStore } from 'react-redux';
import {Header} from "./components/Header/Header";
import {Table} from "./components/Table/Table";
import { store } from './store/app/store';

export function App() {

  return (
    <div className="App">
      <Provider store = {store}>

      <Header/>
      <Table/>
    
      </Provider>
      </div>  
  );
}


