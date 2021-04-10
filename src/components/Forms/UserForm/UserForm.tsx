import { block } from "bem-cn";
import React from "react";

import * as Yup from 'yup'
import {AppState} from "../../../store/app/userTypes";


interface Props {
    
}

const b =block("UserForm");

const schema : Yup.SchemaOf<AppState.userTypesAddForm> = Yup.object().shape(({

    age: Yup.string().required('Обязательно'),
    email:Yup.string().email('Невалидный email').required('Обязательно'),
    name: Yup.string().required('Обязательно')
}))
