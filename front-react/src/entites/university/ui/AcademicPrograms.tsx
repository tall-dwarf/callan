import { IAcademicProgram } from "../types"
import CheckboxItem from "../../../shared/ui/CheckboxItem"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6";

type AcademicProgramsProps = {
    title: string,
    data: IAcademicProgram[],
    onChange: (id: number) => void
}

export default function AcademicPrograms({ data, title, onChange }: AcademicProgramsProps) {
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div onClick={() => setIsOpen((op) => !op)} className="academic-programs">
            <div className="academic-programs__title"><span>{title}</span> <FaChevronDown /></div>
            <div
                onClick={event => event.stopPropagation()}
                className={"academic-programs-list" + (isOpen ? " academic-programs-list--open" : "")}>
                {
                    data.map(dItem => <div key={dItem.id} className="academic-programs__item">
                        <CheckboxItem onChange={() => onChange(dItem.id)}><>{dItem.name}</></CheckboxItem>
                    </div>)
                }
            </div>
        </div>
    )
}