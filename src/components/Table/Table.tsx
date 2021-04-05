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

    // if(state.){
    //     return <h1>Загрузка</h1>
    // }
    console.log(userState.dataM);
    Object.keys(userState.dataM)
    console.log(Object.keys(userState.dataM));
    
   
  
    
    
    return(    

        <div>
           {userState.dataM.map(user => (
               <div key = {user.id}>
                   <div>{user.body}</div>
               </div>
           ))}
          
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