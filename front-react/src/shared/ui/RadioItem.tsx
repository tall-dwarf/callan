import { useId } from "react"


type RadioItemProps = {
    text: string,
    name: string,
    onChange: () => void
}

export default function RadioItem({ text, name, onChange }: RadioItemProps) {
    const id = useId()

    return (
        <div className="radio-item">
            <input onChange={() => onChange()} name={name} id={id} type="radio" />
            <label htmlFor={id}>{text}</label>
        </div>
    )
}