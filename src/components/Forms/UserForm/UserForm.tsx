import { block } from "bem-cn";
import React, {useEffect} from "react";

import * as Yup from 'yup'
import {AppState} from "../../../store/app/userTypes";
import {useFormik} from "formik";
import {addUser} from "../../../store/app/userApi/addUser";
import {browserHistory} from "../../../browserHistory";
import axios from "axios";
import {RouteComponentProps} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UsersFetch} from "../../../store/app/userApi/usersFetch";


interface Props {
    className?: string;
     data: AppState.userTypesAddForm | null;
    // data: object
}


const b =block("UserForm");

const schema : Yup.SchemaOf<AppState.userTypesAddForm> = Yup.object().shape(({

    age: Yup.string().required('Обязательно'),
    email:Yup.string().email('Невалидный email').required('Обязательно'),
    name: Yup.string().required('Обязательно')
}))

// export const UserForm : React.FC<Props> = (className , data) =>{
export const UserForm : React.FC<Props> = (data,className) =>{
const dispatch = useDispatch()

    const { errors, values, submitForm, handleChange } = useFormik<AppState.userTypesAddForm>({
        initialValues: {

            name: data.data?.name ?? '',
            age:  data.data?.age ?? '',
            email: data.data?.email ?? ''
        },

        validationSchema: schema,
        onSubmit: async (fields) => {
            try {
                const data = {data: {...values}}
               dispatch(addUser(data))
                browserHistory.push("/")
               // await addUser(data)
            }
            catch (e) {
                alert("Ошибка") //todo dispatch(ERROR)
            }
        }
    })


    return (
        <form className ={b()} onSubmit={submitForm}>
            <input type="name" name={"name"} onChange={handleChange}/>
            <input type="age" name={"age"} onChange={handleChange}/>
            <input type="email" name={"email"} onChange={handleChange}/>
            <button type="submit">Добавить</button>
        </form>
    )
}