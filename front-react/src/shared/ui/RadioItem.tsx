import { useId } from "react"


type RadioItemProps = {
    label: string,
    name: string,
    onChange: () => void
}

export default function RadioItem({ label, name, onChange }: RadioItemProps) {
    const id = useId()

    return (
        <div className="radio-item">
            <input onChange={() => onChange()} name={name} id={id} type="radio" />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}