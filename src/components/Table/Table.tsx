import React, { useEffect } from "react";

import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { UserFetch } from "../../store/userFetch";
import { RootStore } from "../../store/app/store";



interface Props {

}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Table: React.FC<Props> = () => {
    const userState = useSelector((state:RootStore ) => state.user)
    const dispatch = useDispatch()
    

    
    useEffect(()=>{
        dispatch(UserFetch())
    },[])


    return(

        <table>
            <tbody>
            {

                userState.data?.map(itemKey => {
                    console.log(itemKey)
                    return (
                        <tr key={itemKey.id} >
                            <td>{itemKey.body}</td>

                        </tr>
                    )
                })
            }
            </tbody>
        </table>

    )
};