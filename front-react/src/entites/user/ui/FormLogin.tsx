import * as yup from "yup"
import { useAppDispatch } from "../../../shared/hooks/redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { UserLoginError, userLogin } from "../api"
import FormItem from "../../../shared/ui/FormItem"
import Loader from "../../../shared/ui/Loader"
import CustomButton from "../../../shared/ui/CustomButton"
import { auth } from "../model"
import { AxiosError } from "axios"
import useForm from "../../../shared/hooks/useForm"

export type FormAuth = {
    email: string,
    password: string
}

const schema = yup.object({
    email: yup.string().required('Поле обязательно для заполнения').email('Неверный формат email'),
    password: yup.string().required('Поле обязательно для заполнения').max(30).min(4, 'Длинна минимум 4 символа'),
}).required()


export default function FormLogin() {
    const { form: { formState, register, setValue, handleSubmit }, load, successful, error } = useForm(yupResolver(schema))
    const dispatcher = useAppDispatch()


    const onSubmit: SubmitHandler<FormAuth> = async (data) => {
        load.setIsLoad(true)
        try {
            const response = await userLogin(data)
            dispatcher(auth(response))
        } catch(e) {
            const err = e as AxiosError<UserLoginError>
            error.setError(String(err.response?.data.error)) 
        }   
        load.setIsLoad(false)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem
                icon={'message'}
                type="email"
                error={formState.errors.email?.message}
                label="Почта"
                register={register} registerName="email" />

            <FormItem
                icon={'secure'}
                type="text"
                error={formState.errors.password?.message}
                label="Пароль"
                register={register} registerName="password" />


            {
                load.isLoad ? <Loader /> : <CustomButton className="consultation-form__btn" onClick={() => console.log()} text="Отправить" icon="message" />
            }
            <h5 className="text-red">{error.error}</h5>
        </form>
    )
}