import { icons } from "../../app/data"

type FormItemProps = {
    label: string,
    error?: string | null,
    icon: keyof typeof icons,
    type: "text" | "email",
    onChange: (text: string) => void
}

export default function FormItem({ label, icon, error, type, onChange}: FormItemProps) {

    const DynamicIcon = icons[icon]

    return (
        <div className="form-item">
            <label className="form-item__label" htmlFor="">
                <DynamicIcon fill="rgb(190, 216, 232)" size={20} />
                {label}
            </label>
            <input onChange={(event) => onChange(event.currentTarget.value)} type={type} />
            <span className={"form-item__error " + (error ? " form-item__error--open" : "")}>Ошибка: {error}</span>
        </div>
    )
}