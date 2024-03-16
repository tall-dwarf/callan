import { useId } from "react"


export type CheckboxItemProps = {
    onChange: () => void,
    children: JSX.Element,
}

export default function CheckboxItem({ children,  onChange}: CheckboxItemProps) {
    const id = useId()

    return (
        <div className="checkbox-item">
            <input id={id} onChange={() => onChange()} type="checkbox" />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}