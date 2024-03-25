import axios, { AxiosResponse } from "axios";
import { FormRegister } from "./ui/FormRegister";
import { BASE_URL } from "../../shared/api";
import { AuthResponse } from "./types";
import { FormAuth } from "./ui/FormLogin";

export type UserRegisterError = {
    message: string
}

export const userRegister = async (data: FormRegister) => {
    const response = await axios.post<AuthResponse>(BASE_URL + 'auth/register', data)
    return response.data
}

export type UserLoginError = {
    error: string
}

export const userLogin = async (data: FormAuth) => {
    const response = await axios.post<AuthResponse>(BASE_URL + 'auth/login', data)
    return response.data
}
