import {block} from "bem-cn";
import React, {useEffect, useMemo} from "react";
import {RouteComponentProps} from "react-router-dom";
import {UseUserById} from "../../hooks/useUserById";
import {UserForm} from "../../components/Forms/UserForm/UserForm";
import {AppState} from "../../store/app/userTypes";
import { Card } from "../../components/card/Card";
import { loader } from "../../components/Loader/Loader";


interface Props extends RouteComponentProps<{ id?: string }> {

}

const b = block('language-edit-page')

export const  UserEditPage: React.FC<Props> = ({match}) => {

    const id = useMemo<string | undefined>(() => match.params?.id, [match.params.id])

    const {data, loading} = UseUserById(id)
    console.log(data)

    return (
        <div  >
            {loading
                ?
                (loader)
                :

                (<UserForm data={data}/>)}


        </div>
    )
}