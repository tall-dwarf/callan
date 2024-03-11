import { FaFire } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import RadioButton from "../../../shared/ui/RadioButton";

type UniversitiesFormProps = {
    onSearch: (text: string) => void,
    onSort: (order: string, field: string) => void
}

export default function UniversitiesForm({ onSearch, onSort }: UniversitiesFormProps) {

    return (
        <div className="universities-form">
            <input onChange={(event) => onSearch(event.currentTarget.value)} className="universities-form__input" placeholder="Поиск" type="text" />
            <div className="radio-button-list">
                <RadioButton onChange={() => onSort('asc', 'name')} name="awd25345" >
                    <><FaFire fill="#d9d9d9" />По имени</>
                </RadioButton>
                <RadioButton onChange={() => onSort('asc', 'price_year')} name="awd25345" >
                    <><FaArrowUp fill="#d9d9d9" />По цене</>
                </RadioButton>
                <RadioButton onChange={() => onSort('desc', 'price_year')} name="awd25345" >
                    <><FaArrowDown fill="#d9d9d9" />По цене</>
                </RadioButton>
            </div>
        </div>
    )
}