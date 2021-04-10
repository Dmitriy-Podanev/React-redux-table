import React, {Component} from "react";
import {Route, RouteComponentProps } from "react-router-dom";

interface  Props {
    path: string
    component: React.FC<RouteComponentProps>//todo поменять дженерик
}

// const Page: React.FC<Props> = ({path,component:Component}) =>{
//     return(
        // <Route path={path} render={(props) => {
        //     <Component {...props}/>
        // }}>
        //
        // </Route>
    // )
// }