import React, {useEffect} from "react";

import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {UserFetch} from "../../store/userFetch";
import {RootStore} from "../../store/app/store";
import {TextField} from "@material-ui/core";


interface Props {

}


export const Table: React.FC<Props> = () => {
    const userState = useSelector((state: RootStore) => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(UserFetch())
    }, [])


    return (

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>E-mail</th>
                <th>Age</th>

            </tr>
            </thead>
            <tbody>
            {

                userState.data?.map(itemKey => {
                    console.log(itemKey)
                    return (
                        <tr key={itemKey._id}>
                            <td> {itemKey._id}</td>
                            <td><TextField defaultValue={itemKey.data.name}/></td>
                            <td><TextField defaultValue={itemKey.data.age}/></td>
                            <td><TextField defaultValue={itemKey.data.email}/></td>

                        </tr>
                    )
                })
            }
            </tbody>
        </table>

    )
};