import { FormEvent, useState } from "react"
import FormItem from "../../shared/ui/FormItem"
import BtnIcon from "../../shared/ui/CustomButton";
import useForm from "../../shared/hooks/useForm";
import { Validator } from "../../shared/helpers/Validator";

export type FeedbackFormSate = {
    name: string,
    phone: string,
    comment: string
}

export default function FeedbackForm() {
    const { formState, updateState } = useForm({ name: '', phone: '', comment: '', })
    const [formErrors, setFormErrors] = useState<{ [K in keyof FeedbackFormSate]?: string | null }>({ name: null, phone: null })


    const formSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const validator = new Validator()
        const validationData = {
            name: validator.setValue(formState.name).isRequered().getmessage(),
            phone: validator.setValue(formState.phone).isPhone().getmessage()
        }

        setFormErrors({ ...formErrors, ...validationData })

        if (Object.values(validationData).join("").length === 0) {
            console.log(123);

        }

    }

    return (
        <div className="feedback-form__inner">
            <h3 className="feedback-form__title">Связатся с нами</h3>
            <h4 className="feedback-form__subtitle">Оставьте свои данные и наш специалист обязательно свяжемся с Вами в течение дня</h4>
            <form onSubmit={(event) => formSubmit(event)} className="form">

                <FormItem
                    onChange={text => updateState("name", text)}
                    type={"text"} icon={"user"}
                    error={formErrors.name}
                    label="Ваше имя" />

                <FormItem
                    onChange={text => updateState("phone", text)}
                    type={"text"}
                    icon={"phone"} error={formErrors.phone}
                    label="Ваш телефон" />

                <FormItem
                    onChange={text => updateState("comment", text)}
                    type={"text"}
                    icon={"message"}
                    label="Дополнительные комментарии" />

                <BtnIcon icon="message" text="Отправить" />
            </form>
        </div>
    )
}