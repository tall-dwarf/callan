import { icons } from "../../app/data"
import { UseFormRegister, Path } from "react-hook-form"

type FormItemProps<T extends object> = {
    label: string,
    icon: keyof typeof icons,

    register: UseFormRegister<T>,
    registerName: Path<T>,

    error?: string | null,
    type?: "text" | "email" | 'date',
}

export default function FormItem<T  extends object>({ label, icon, error, register, registerName, type = 'text'}: FormItemProps<T>) {

    const DynamicIcon = icons[icon]

    console.log(error);
    

    return (
        <div className="form-item">
            <label className="form-item__label" htmlFor="">
                <DynamicIcon fill="rgb(82, 191, 255)" size={20} />
                {label}
            </label>
            <input 
            {...register(registerName)}
             type={type} />
            <span className={"form-item__error " + (error ? " form-item__error--open" : "")}>Ошибка: {error}</span>
        </div>
    )
}