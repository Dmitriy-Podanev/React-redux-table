import React from "react";
import {Route, Switch} from "react-router-dom"
import {Table} from "../components/Table/Table";
import {editUserForm} from "./addNewUser/EditUserForm";

interface Props {

}

export const Routes: React.FC<Props> = () => {
    return (

            <Switch>
                <Route path={"/"} exact component={Table}/>
                <Route path={"/userForm"} exact component={editUserForm}/>
            </Switch>

    )
}