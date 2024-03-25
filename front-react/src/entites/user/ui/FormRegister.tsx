import { SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import FormItem from "../../../shared/ui/FormItem"
import { useAppDispatch } from "../../../shared/hooks/redux"
import { userRegister } from "../api"
import { useState } from "react"
import CustomButton from "../../../shared/ui/CustomButton"
import Loader from "../../../shared/ui/Loader"
import { auth } from "../model"
import useForm from "../../../shared/hooks/useForm"

export type FormRegister = {
    name: string,
    email: string,
    password: string
    password_confirmation: string
}

const schema = yup.object({
    name: yup.string().required('Поле обязательно для заполнения'),
    email: yup.string().required('Поле обязательно для заполнения').email('Неверный формат email'),
    password: yup.string().required('Поле обязательно для заполнения').max(30).min(4, 'Длинна минимум 4 символа'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), undefined], 'Пароли не совпадают').required('Поле обязательно для заполнения')
}).required()


export default function FormRegister() {
    const { form: { formState, register, setValue, handleSubmit }, load, successful, error } = useForm(yupResolver(schema))
    const dispatcher = useAppDispatch()

    const onSubmit: SubmitHandler<FormRegister> = async (data) => {
        load.setIsLoad(true)

        try {
            const resRegister = await userRegister(data)
            dispatcher(auth(resRegister))
            error.setError('')
        } catch (e) {
            error.setError('В процессе регистрации произошла ошибка')
        }

        load.setIsLoad(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem
                icon={"user"}
                type="text"
                error={formState.errors.name?.message}
                label="Имя пользователя"
                register={register} registerName="name" />

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

            <FormItem
                icon={'secure'}
                type="text"
                error={formState.errors.password_confirmation?.message}
                label="Повторите пароль"
                register={register} registerName="password_confirmation" />

            {
                load.isLoad ? <Loader /> : <CustomButton className="consultation-form__btn" onClick={() => console.log()} text="Отправить" icon="message" />
            }

            <h5 className="text-red">{error.error}</h5>
        </form>
    )
}