
import FormItem from "../../shared/ui/FormItem"
import RadioItem from "../../shared/ui/RadioItem"
import { RiEnglishInput } from "react-icons/ri";
import CustomButton from "../../shared/ui/CustomButton";
import { sendConsutation } from "./api";
import Loader from "../../shared/ui/Loader";
import * as yup from "yup"
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import useForm from "../../shared/hooks/useForm";
import FormSuccessful from "../../shared/ui/FormSuccessful";

export type ConsultationForm = {
    name: string,
    date?: string,
    city?: string,
    phone: string,
    email: string,
    english?: string
}

const schema = yup.object({
    name: yup.string().required('Поле обязательно для заполнения'),
    email: yup.string().required('Поле обязательно для заполнения').email('Неверный формат email'),
    phone: yup.string().required('Поле обязательно для заполнения').matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат ввода '),
    city: yup.string(),
    english: yup.string(),
    date: yup.string(),
}).required()

export default function ConsultationForm() {
    const { form: { formState, register, setValue, handleSubmit }, load, successful, error } = useForm(yupResolver(schema))

    const onSubmit: SubmitHandler<ConsultationForm> = async (data) => {
        load.setIsLoad(true)

        try {
            await sendConsutation(data)
            successful.setSuccessful(true)
        } catch {
            successful.setSuccessful(false)
            error.setError("Произошла ошибка отправки формы")
        }

        load.setIsLoad(false)
    }

    if (successful.successful) return <FormSuccessful />

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="consultation-form">

            <FormItem
                icon={'user'}
                type="text"
                error={formState.errors.name?.message}
                label="Имя"
                register={register} registerName="name" />
            <FormItem
                icon={'user'}
                type="text"
                error={formState.errors.phone?.message}
                label="Телефон"
                register={register} registerName="phone" />

            <FormItem
                icon={'user'}
                type="date"
                error={formState.errors.date?.message}
                label="Дата"
                register={register} registerName="date" />

            <FormItem
                icon={'user'}
                type="text"
                error={formState.errors.city?.message}
                label="Город"
                register={register} registerName="city" />

            <FormItem
                icon={'user'}
                type="email"
                error={formState.errors.email?.message}
                label="Почта"
                register={register} registerName="email" />




            <div className="form-item">
                <label className="form-item__label"><RiEnglishInput size={20} fill="rgb(82, 191, 255)" /> Уровень английского</label>
                <div className="radio-list">
                    <RadioItem onChange={() => setValue('english', "A1-A2")} name="english" label="Начинающий (А1 - А2)" />
                    <RadioItem onChange={() => setValue('english', "B1-B2")} name="english" label="Начинающий (B1 - B2)" />
                    <RadioItem onChange={() => setValue('english', "C1-C2")} name="english" label="Начинающий (C1 - C2)" />
                </div>
            </div>
            {
                load.isLoad ? <Loader /> : <CustomButton className="consultation-form__btn" onClick={() => console.log()} text="Отправить" icon="message" />
            }
            <h4 className="text-red">{error.error}</h4>
        </form>
    )
}