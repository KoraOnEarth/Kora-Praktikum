import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (nickname, email, password)=> {
    const {data} = await $host.post('http://localhost:5000/api/user/registration', {nickname, email, password})
    // return jwtDecode(data.token)
    return data
}

export const login = async (email, password)=> {
    const {data} = await $host.post('http://localhost:5000/api/user/login', {email, password})
    return jwtDecode(data.token)
}

export const check = async ()=> {
    const {data} = await $host.post('http://localhost:5000/api/user/auth', {email, password})
    localStorage.setItem('user-info', data.token)
    return response
}