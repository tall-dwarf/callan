import FormItem from "../../shared/ui/FormItem"
import BtnIcon from "../../shared/ui/CustomButton";
import useForm from "../../shared/hooks/useForm";
import Loader from "../../shared/ui/Loader";
import { sendFeedbackForm } from "./api";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import FormSuccessful from "../../shared/ui/FormSuccessful";

export type FeedbackForm = {
    name: string,
    phone: string,
    comment?: string
}

const schema = yup.object({
    name: yup.string().required('Поле обязательно для заполнения'),
    phone: yup.string().required('Поле обязательно для заполнения').matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, 'Неверный формат ввода '),
    comment: yup.string()
}).required()

export default function FeedbackForm() {
    const { form: { formState, register, setValue, handleSubmit }, load, successful, error } = useForm(yupResolver(schema))

    const onSubmit: SubmitHandler<FeedbackForm> = async (data) => {
        load.setIsLoad(false)
        try {
            await sendFeedbackForm(data)
            successful.setSuccessful(true)
        } catch {
            successful.setSuccessful(false)
            error.setError('Произошла ошибка отправки формы')
        }

        load.setIsLoad(true)
    }

    if (successful.successful) return <FormSuccessful />


    return (
        <div className="feedback-form">
            <div className="feedback-form__inner">
                <h3 className="feedback-form__title">Связатся с нами</h3>
                <h4 className="feedback-form__subtitle">Оставьте свои данные и наш специалист обязательно свяжемся с Вами в течение дня</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    <FormItem
                        icon={"user"}
                        type="text"
                        error={formState.errors.name?.message}
                        label="Ваше имя"
                        register={register}
                        registerName="name" />

                    <FormItem
                        icon={"user"}
                        type="text"
                        error={formState.errors.phone?.message}
                        label="Телефон"
                        register={register}
                        registerName="phone" />

                    <FormItem
                        icon={"user"}
                        type="text"
                        error={formState.errors.comment?.message}
                        label="Комментарий"
                        register={register}
                        registerName="comment" />
                    {
                        load.isLoad ? <Loader /> : <BtnIcon icon="message" text="Отправить" onClick={() => 123} />
                    }

                </form>
            </div>
        </div>
    )
}