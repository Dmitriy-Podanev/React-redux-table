import {block} from "bem-cn";
import React, {useEffect, useMemo} from "react";
import {RouteComponentProps} from "react-router-dom";
import {UseUserById} from "../../hooks/useUserById";
import {UserForm} from "../../components/Forms/UserForm/UserForm";
import {AppState} from "../../store/app/userTypes";
import { Card } from "../../components/card/Card";


interface Props extends RouteComponentProps<{ id?: string }> {

}

const b = block('language-edit-page')

export const  UserEditPage: React.FC<Props> = ({match}) => {
    // const id = useMemo<number | undefined>(() => match.params?.id ? +match.params?.id : undefined, [match])
    const id = useMemo<string | undefined>(() => match.params?.id, [match.params.id])
    // const id: string | undefined = match.params.id;
    // const { dataM } = UseUserById(id)

    const {data, loading} = UseUserById(id)
    console.log(data)

    return (
        <div  >
            {loading
                ?
                (<h1>ЗАГРУЗКА</h1>)
                :

                (<UserForm data={data}/>)}


        </div>
    )
}