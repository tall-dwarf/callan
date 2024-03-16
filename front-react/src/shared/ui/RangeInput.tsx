import { ChangeEvent, useEffect, useRef, useState } from "react"

type RangeInputProps = {
    children: JSX.Element
    onChange: (value: number) => void,
    max: number,
    min: number,
}

export default function RangeInput({ children, onChange, max, min }: RangeInputProps){
    const input = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(min)

    useEffect(() => {
        const inputEvent = () => onChange(Number(input.current?.value))
        input.current?.addEventListener('change', inputEvent)
        return () => input.current?.removeEventListener('change', inputEvent)
    },[])

    return(
        <div className="range-input">
            <label className="range-input__label">{children}</label>
            <input onChange={(event) => setValue(Number(event.currentTarget.value))} max={max} value={value} min={min} ref={input} type="range" />
            <div>{value}</div>
        </div>
    )
}