import { block } from "bem-cn";
import React from "react";

import * as Yup from 'yup'
import {AppState} from "../../../store/app/userTypes";
import {useFormik} from "formik";


interface Props {
    
}

const b =block("UserForm");

const schema : Yup.SchemaOf<AppState.userTypesAddForm> = Yup.object().shape(({

    age: Yup.string().required('Обязательно'),
    email:Yup.string().email('Невалидный email').required('Обязательно'),
    name: Yup.string().required('Обязательно')
}))

export const UserFrom : React.FC<Props> = (className ='',data:AppState.userTypes) =>{


    const { errors, values, submitForm, handleChange } = useFormik<AppState.userTypesAddForm>({
        initialValues: {
            // name: data?.name ?? ''

            name: data.data.name,
            age: data.data.age,
            email:data.data.age
        },
        validationSchema: schema,
        onSubmit: async (fields) => {
            try {
                let id: number
                setLoading(true)
                if (data) {
                    id = data.id
                    await apiLanguageUpdate({ ...data, ...fields })
                } else {
                    const res = await apiLanguageCreate(fields)
                    id = res.id
                }
                browserHistory.push(`/ref/languages/${id}`)
            } catch (err) {
                setErrorText(err.message)
            } finally {
                setLoading(false)
            }
        }
    })

    const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        submitForm().catch()
    }

    return (
        <form className ={b()}>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    )
}