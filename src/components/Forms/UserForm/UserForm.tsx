import { block } from "bem-cn";
import React from "react";

import * as Yup from 'yup'
import {AppState} from "../../../store/app/userTypes";
import {useFormik} from "formik";
import {addUser} from "../../../store/app/userApi/addUser";
import {browserHistory} from "../../../browserHistory";
import axios from "axios";


interface Props {
    
}

const b =block("UserForm");

const schema : Yup.SchemaOf<AppState.userTypesAddForm> = Yup.object().shape(({

    age: Yup.string().required('Обязательно'),
    email:Yup.string().email('Невалидный email').required('Обязательно'),
    name: Yup.string().required('Обязательно')
}))

export const UserForm : React.FC<Props> = (className ='', data:AppState.userTypes) =>{


    const { errors, values, submitForm, handleChange } = useFormik<AppState.userTypesAddForm>({
        initialValues: {

            name: "",
            age: "",
            email:""
        },
        validationSchema: schema,
        onSubmit: async (fields) => {
            try {
                const data = {data: {...values}}
                addUser(data);
               // await addUser(data)
            }
            catch (e) {
                alert("asd") //todo dispatch(ERROR)
            }
        }
    })
    // const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    //     event.preventDefault()
    //     submitForm().catch()
    // }

    return (
        <form className ={b()} onSubmit={submitForm}>
            <input type="name" name={"name"} onChange={handleChange}/>
            <input type="age" name={"age"} onChange={handleChange}/>
            <input type="email" name={"email"} onChange={handleChange}/>
            <button type="submit">Добавить</button>
        </form>
    )
}