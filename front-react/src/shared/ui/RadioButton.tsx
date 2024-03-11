import { useId } from "react"

type RadioButtonProps = {
    children: JSX.Element,
    onChange: () => void,
    name: string
}

export default function RadioButton({ children, onChange, name }: RadioButtonProps) {
    const id = useId()

    return (
        <div className="radio-button">
            <input onChange={() => onChange()} id={id} className="radio-button-input" type="radio" name={name} />
            <label className="radio-button-label" htmlFor={id}>{children}</label>
        </div>
    )
}