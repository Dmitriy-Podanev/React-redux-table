import {block} from "bem-cn";
import React from "react";

import * as Yup from 'yup'
import {AppState} from "../../../store/app/userTypes";
import {useFormik} from "formik";
import {addUser} from "../../../store/app/userApi/addUser";
import {browserHistory} from "../../../browserHistory";
import {useDispatch} from "react-redux";
import { UpdateUser } from "../../../store/app/userApi/UpdateUser";
// import {UpdateUser} from "../../../store/app/userApi/UpdateUser";


interface Props {
    className?: string;
     data: AppState.userTypes | null;
    // data: object
}


const b =block("UserForm");

const schema : Yup.SchemaOf<AppState.userTypesAddForm> = Yup.object().shape(({

    age: Yup.string().required('Обязательно'),
    email:Yup.string().email('Невалидный email').required('Обязательно'),
    name: Yup.string().required('Обязательно')
}))

// export const UserForm : React.FC<Props> = (className , data) =>{
export const UserForm : React.FC<Props> = ({data,className}) =>{
const dispatch = useDispatch()

    const { errors, values, submitForm, handleChange } = useFormik<AppState.userTypesAddForm>({
        initialValues: {

                age: data?.data.age ?? '',
                name: data?.data.name ?? '',
                email: data?.data.email?? ''



        },

        validationSchema: schema,
        onSubmit: async (fields) => {
            try {
               // console.log(!data==null)
                console.log(data)// todo неправильно распределяет Нужно грамотное условие
                const dataM = {data:{...fields}}
                if(data){
                    console.log(1)

                     dispatch(UpdateUser({...data,...dataM}))

                }
                else{
                    console.log(2)


                     dispatch(addUser(dataM))

                }
                browserHistory.push("/");
            }
            catch (e) {
                alert("Ошибка") //todo dispatch(ERROR)
            }
        }
    })


    return (
        <form className ={b()} onSubmit={submitForm}>
            <input type="name" name={"name"} value={values.name} onChange={handleChange}/>
            <input type="age" name={"age"} value={values.age} onChange={handleChange}/>
            <input type="email" name={"email"} value={values.email} onChange={handleChange}/>
            <button type="submit">Сохранить</button>
        </form>
    )
}