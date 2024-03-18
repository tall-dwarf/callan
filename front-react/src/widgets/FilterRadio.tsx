import { useId } from "react";
import RadioItem from "../shared/ui/RadioItem";

type RadioData<T> = {
    id: number,
    text: string,
    value: T
}

type FilterRadioPros<T> = {
    radioData: RadioData<T>[],
    onChange: (value: T) => void,
    children: JSX.Element
}

export default function FilterRadio<T>({ radioData, onChange, children }: FilterRadioPros<T>) {
    const id = useId()

    return (
        <div className="filter-item">
            <span className="filter-item__title text-black">{children}</span>
            <div className="filter-radio">
                {
                    radioData.map(r => <RadioItem key={r.id} onChange={() => onChange(r.value)} name={id} label={r.text} />)
                }
            </div>
        </div>
    )
}