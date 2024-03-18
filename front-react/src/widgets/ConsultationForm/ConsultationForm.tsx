import useForm from "../../shared/hooks/useForm"
import FormItem from "../../shared/ui/FormItem"
import RadioItem from "../../shared/ui/RadioItem"
import { RiEnglishInput } from "react-icons/ri";
import CustomButton from "../../shared/ui/CustomButton";
import { FormEvent, useContext, useState } from "react";
import { Validator } from "../../shared/helpers/Validator";
import { ConsultationData, sendConsutation } from "./api";
import { FormContext } from "../../shared/context/formContext";
import Loader from "../../shared/ui/Loader";

export default function ConsultationForm() {
    const consultationForm = useForm<ConsultationData>({ name: '', date: '', city: '', phone: '', email: '', english: '' })
    const consultationErrors = useForm({ name: '', phone: '', email: '' })
    const formContext = useContext(FormContext)
    const [isLoad, setIsLoad] = useState(false)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const validator = new Validator()
        let errorsData = {
            name: validator.setValue(consultationForm.formState.name).isRequered().getmessage(),
            phone: validator.setValue(consultationForm.formState.phone).isPhone().getmessage(),
            email: validator.setValue(consultationForm.formState.email).isEmail().getmessage(),
        }
        consultationErrors.manyUpdateState(errorsData)
        if (Object.values(errorsData).join("").length !== 0) return null
        
        try {
            setIsLoad(true)
            await sendConsutation(consultationForm.formState)
            setIsLoad(false)
            formContext?.onSuccess()
        } catch {
            formContext?.onError()
        }
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} className="consultation-form">

            <FormItem
                error={consultationErrors.formState.name}
                type="text"
                onChange={(value) => consultationForm.updateState('name', value)}
                icon="user" label="ФИО" />

            <FormItem type="date" onChange={(value) => consultationForm.updateState('date', value)} icon="calendar" label="Календарь" />

            <FormItem type="text" onChange={(value) => consultationForm.updateState('city', value)} icon="city" label="Город" />

            <FormItem
                error={consultationErrors.formState.phone}
                type="text"
                onChange={(value) => consultationForm.updateState('phone', value)}
                icon="phone" label="Телефон" />

            <FormItem
                error={consultationErrors.formState.email}
                type="email"
                onChange={(value) => consultationForm.updateState('email', value)}
                icon="message" label="Почта" />

            <div className="form-item">
                <label className="form-item__label"><RiEnglishInput size={20} fill="rgb(82, 191, 255)" /> Уровень английского</label>
                <div className="radio-list">
                    <RadioItem onChange={() => consultationForm.updateState('english', "A1-A2")} name="english" label="Начинающий (А1 - А2)" />
                    <RadioItem onChange={() => consultationForm.updateState('english', "B1-B2")} name="english" label="Начинающий (B1 - B2)" />
                    <RadioItem onChange={() => consultationForm.updateState('english', "C1-C2")} name="english" label="Начинающий (C1 - C2)" />
                </div>
            </div>
            {
                isLoad ? <Loader /> : <CustomButton className="consultation-form__btn" onClick={() => console.log()} text="Отправить" icon="message" />
            }
            
            
        </form>
    )
}