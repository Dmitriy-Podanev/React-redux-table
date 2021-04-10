import { block } from "bem-cn";
import React from "react";


interface Props {
    
}

const b = block('editUserForm-page');

export const editUserForm: React.FC<Props> = ()=>{
    return(
        <div className={b()}>
            {/*<form>*/}
        </div>
    )
}