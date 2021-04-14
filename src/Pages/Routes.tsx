import React from "react";
import {Route, Switch} from "react-router-dom"
import { UserForm } from "../components/Forms/UserForm/UserForm";
import {Table} from "../components/Table/Table";
import { UserEditPage } from "./addNewUser/EditUserForm";


interface Props {

}

export const Routes: React.FC<Props> = () => {
    return (

            <Switch>
                <Route path={"/"} exact component={Table}/>
                <Route path={"/userForm"} exact component={UserForm}/>
                <Route path={"/userForm/:id"} exact component={UserEditPage} />
            </Switch>

    )
}