import axios from "axios"

const instance = axios.create(
    {
        baseURL:"http://localhost:4000",
        timeout:5000,
        headers:{
         "Content-Type":"application/json",
         "Authorization":"Bearer Token",
        }
    }
)

export const request = ({...options}) => {

    const onSuccess = reponse => reponse
    const onError = error => {
        return error
    }

    return instance(options).then(onSuccess).catch(onError)
}