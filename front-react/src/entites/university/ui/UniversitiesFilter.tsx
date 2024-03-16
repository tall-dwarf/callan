import { GiGrowth } from "react-icons/gi";
import FilterRadio from "../../../widgets/FilterRadio";
import RangeInput from "../../../shared/ui/RangeInput";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { PrimitivesPrams, CompositeParams } from "../api";
import { ratingData } from "../data";
import SearchAndCheckbox from "../../../shared/ui/SearchAndCheckbox";
import useCache from "../../../shared/hooks/useCache";
import { IAcademicProgram, ICountry } from "../types";
import { FaFlag } from "react-icons/fa";
import AcademicPrograms from "./AcademicPrograms";

type UniversitiesFilterProps = {
    onUpdate: (key: keyof PrimitivesPrams, value: string | number) => void,
    onCheckbox: (key: keyof CompositeParams, value: number) => void
}

export default function UniversitiesFilter({ onUpdate, onCheckbox }: UniversitiesFilterProps) {
    const counties = useCache<ICountry[]>('http://127.0.0.1:8000/api/county', 'counties', []);
    const programs = useCache<IAcademicProgram[]>('http://127.0.0.1:8000/api/program', 'programs', []);

    const countrisToCheckbox = () => {
        if (!counties.state) return []

        const res = []
        for (let county of counties.state) {
            res.push({ id: county.id, text: county.name })
        }

        return res
    }

    const formEducation = ['Бакалавриат', 'Магистратура', 'Докторантура', 'Подготовка к университету', 'Языковые курсы'];

    return (
        <div className="universities-filter">
            <FilterRadio onChange={(newraiting) => onUpdate("rating", newraiting)} radioData={ratingData}>
                <><GiGrowth size={20} fill="#52bfff" /> Рейтинг</>
            </FilterRadio>
            <RangeInput min={2000} max={4948} onChange={(value) => onUpdate('price', value)}>
                <><FaRegMoneyBillAlt size={20} fill="#52bfff" /> Максимальная цена</>
            </RangeInput>

            <SearchAndCheckbox
                onChange={(id) => onCheckbox("countries", id)}
                data={countrisToCheckbox()}><><FaFlag size={20} fill="#52bfff" /> Название страны</></SearchAndCheckbox>

            {
                formEducation.map(fEduc => <AcademicPrograms 
                    onChange={(value) => onCheckbox('programs', value)}
                    key={fEduc} title={fEduc}
                    data={programs.state.filter(pr => pr.form_education === fEduc)}></AcademicPrograms>)
            }

        </div>
    )
}