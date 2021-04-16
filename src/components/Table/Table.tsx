import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersFetch} from "../../store/app/userApi/usersFetch";
import {RootStore} from "../../store/app/store";
import {nextPath} from "../../browserHistory";
import {deleteUser} from "../../store/app/userApi/deleteUser";
import {block} from "bem-cn";


interface Props {

}

const b = block("table");


export const Table: React.FC<Props> = () => {
    const userState = useSelector((state: RootStore) => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(UsersFetch())
    }, [])//todo Куча ненужных запросов


    return (

        <table className={b()} >
            <thead>
            <tr>
                <th >ID</th>
                <th >First Name</th>
                <th >Age</th>
                <th >E-mail</th>

            </tr>
            </thead>
            <tbody>
            {

                userState.data?.map(itemKey => {

                    return (

                        <tr key={itemKey._id}>
                            <td> {itemKey._id}</td>
                            <td>{itemKey.data.name ?? ""}</td>
                            <td>{itemKey.data.age ?? ""}</td>
                            <td>{itemKey.data.email ?? ""}</td>
                            <td>
                                <button onClick={() => nextPath(`/userForm/${itemKey._id}`)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    dispatch(deleteUser(itemKey._id))
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
            <button onClick={() => nextPath("/userForm")}>Добавить Нового Пользователя</button>
        </table>

    )
};