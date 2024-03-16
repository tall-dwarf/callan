import { useState } from "react"
import CheckboxItem from "./CheckboxItem"
import { IoClose } from "react-icons/io5";

type DataType = {
    id: number,
    text: string
}

type SearchAndCheckboxProps = {
    data: DataType[],
    onChange: (id: number) => void,
    children: JSX.Element
}

export default function SearchAndCheckbox({ data, onChange, children }: SearchAndCheckboxProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')

    return (
        <div className="seach-checkbox">
            <div className="seach-checkbox-form">
                <button
                    onClick={() => setIsOpen(false)}
                    className={"seach-checkbox__close" + (isOpen ? " seach-checkbox__close--open" : " ")}>
                    <IoClose size={30} fill="#52bfff" /></button>

                <label className="seach-checkbox__label">{children}</label>
                <input onChange={(e) => setSearch(e.currentTarget.value)} className="seach-checkbox__input" onFocus={() => setIsOpen(true)} type="text" />
            </div>
            <div className={"seach-checkbox-list" + (isOpen ? " seach-checkbox-list--open" : " ")}>
                {
                    data
                    .filter(ch => ch.text.toLowerCase().includes(search.toLowerCase()))
                    .map(ch => <CheckboxItem key={ch.id} onChange={() => onChange(ch.id)}><>{ch.text}</></CheckboxItem>)
                }
            </div>
        </div>
    )
}