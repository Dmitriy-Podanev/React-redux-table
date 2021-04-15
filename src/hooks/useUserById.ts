import { useEffect } from "react";
import { useState } from "react";
import { GetUserByID } from "../store/app/userApi/GetUserByID";
import {AppState} from "../store/app/userTypes";


interface useUserById {
     data: AppState.userTypes | null
     loading: boolean;
     setId: (id: string) => void
    // dataM: object
}

export const UseUserById = (defaultId?: string): useUserById => {
    // const [loading, setLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState< AppState.userTypes |null >(null)
    const [id, setId] = useState<string | undefined>(defaultId);

    useEffect(() => {
            if (id === undefined) return
        setData(null)
        // setId("")
        setLoading(true)

        GetUserByID(id)
            .then(setData)
            .catch(console.error)
            .then(() => setLoading(false))

    }, [id]);

    return {

        data,
        loading,
        setId
    }
}
