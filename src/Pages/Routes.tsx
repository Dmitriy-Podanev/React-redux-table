import React from "react";
import {Route, Switch} from "react-router-dom"
import { UserFrom } from "../components/Forms/UserForm/UserForm";
import {Table} from "../components/Table/Table";


interface Props {

}

export const Routes: React.FC<Props> = () => {
    return (

            <Switch>
                <Route path={"/"} exact component={Table}/>
                <Route path={"/userForm"} exact component={UserFrom}/>
            </Switch>

    )
}