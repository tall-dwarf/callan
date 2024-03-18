import CustomButton from "./CustomButton"

type FormErrorProps = {
    resetForm: () => void
}

export default function FormError({ resetForm }: FormErrorProps){

    return(
        <div className="form-result form-error">
            <h2 className="form-successfu__title">При отправке формы возникла ошибка</h2>
            <CustomButton onClick={resetForm} text="Попытатьс снова" icon="message"></CustomButton>
        </div>
    )
}