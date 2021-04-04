import React, { useEffect } from "react";

import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { UserFetch } from "../../store/userFetch";


interface Props {

}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Table: React.FC<Props> = () => {
    const state = useSelector(state =>state)
   
    const dispatch = useDispatch()


    
    useEffect(()=>{
        dispatch(UserFetch())
    },[])

    // if(state.){
    //     return <h1>Загрузка</h1>
    // }
  
    return(    

        <div>
            state.map(item =>{
                <div>
                    "asd"
                </div>
            })
        </div>
    // <table className="table">
    //     <thead>
    //     <tr>
    //         <th>ID</th>
    //         <th>First Name</th>
    //         <th>E-mail</th>
    //         <th>Age</th>

    //     </tr>
    //     </thead>


    // </table>
    )
};