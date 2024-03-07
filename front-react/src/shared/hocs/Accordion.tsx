import BtnIcon from "../ui/BtnIcon";
import { useState } from "react";

type AccordionProps = {
    children: React.ReactNode
}

export default function Accordion({ children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <div role="button" className={"accordion-buttons " + (isOpen ? "accordion-buttons--open" : "")}>
                <BtnIcon onClick={() => setIsOpen(true)} icon={"plus"} className="accordion-buttons__plus" />
                <BtnIcon onClick={() => setIsOpen(false)} icon={"minus"} className="accordion-buttons__minus" />
            </div>
            <div className="accordion-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</div>
            <div
                className={"accordion-content " + (isOpen ? "accordion-content--open" : "")}>
                {
                    children
                }
            </div>
        </div>
    )
}