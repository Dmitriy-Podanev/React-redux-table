import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersFetch} from "../../store/usersFetch";
import {RootStore} from "../../store/app/store";
import {nextPath} from "../../browserHistory";


interface Props {

}


export const Table: React.FC<Props> = () => {
    const userState = useSelector((state: RootStore) => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(UsersFetch())
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
                            <td>{itemKey.data.name}</td>
                            <td>{itemKey.data.age}</td>
                            <td>{itemKey.data.email}</td>
                            <td><button>Edit</button></td>

                        </tr>
                    )
                })
            }
            </tbody>
            <button onClick={()=> nextPath("/userForm")}>Добавить Нового Пользователя </button>
        </table>

    )
};