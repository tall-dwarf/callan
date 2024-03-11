import { useEffect, useState } from "react"
import { loadUniversities } from "../../entites/university/api"
import { IUniversityAll } from "../../entites/university/types"
import UniversitiesItem from "../../entites/university/ui/UniversitiesItem"
import UniversitiesForm from "../../entites/university/ui/UniversitiesForm"
import useForm from "../../shared/hooks/useForm"
import CustomButton from "../../shared/ui/CustomButton"
import { GiGrowth } from "react-icons/gi";
import FilterRadio from "../../widgets/FilterRadio"
import { ratingData } from "./data"

export default function Universities() {
    const [universities, setUniversities] = useState<IUniversityAll[]>([])
    const universitiesFrom = useForm({ sortOrder: 'asc', sortField: '', name: '' });
    const filterForm = useForm({ rating: 0, });
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadUniversities({ page: page, ...universitiesFrom.formState, ...filterForm.formState }).then(uni => setUniversities([...uni, ...universities]))
    }, [page])

    const filtred = () => {
        loadUniversities({ page: page, ...universitiesFrom.formState, ...filterForm.formState }).then(uni => {
            setUniversities(uni)
        })
    }

    return (

        <section className="universities">
            <div className="container">
                <div className="universities-inner">
                    <h2 className="universities__title">Университеты</h2>
                    <div className="universities-content">
                        <div className="universities-sidebar">
                            <h3>Фильтры</h3>
                            <div className="filter-item">
                                <span className="filter-item__title text-black">Страны</span>
                            </div>
                            <FilterRadio onChange={(newraiting) => filterForm.updateState("rating", newraiting)} radioData={ratingData}>
                                <><GiGrowth size={20} fill="#52bfff" /> Рейтинг</>
                            </FilterRadio>
                            {/* <div className="filter-item">
                                <span className="filter-item__title text-black">Рейтинг</span>
                                <div className="filter-radio">
                                    <RadioItem onChange={() => filterForm.updateState("raiting", 1)} name="raiting" text="1" />
                                    <RadioItem onChange={() => filterForm.updateState("raiting", 1)} name="raiting" text="2" />
                                    <RadioItem onChange={() => filterForm.updateState("raiting", 1)} name="raiting" text="3" />
                                    <RadioItem onChange={() => filterForm.updateState("raiting", 1)} name="raiting" text="4" />
                                    <RadioItem onChange={() => filterForm.updateState("raiting", 1)} name="raiting" text="5" />
                                </div>
                            </div> */}
                            <CustomButton className="universities-sidebar__btn" onClick={() => filtred()} icon="search" text="Поиск" />
                        </div>
                        <div className="universities-main">
                            <UniversitiesForm
                                onSort={(order, field) => universitiesFrom.manyUpdateState({ ...universitiesFrom.formState, sortOrder: order, sortField: field })}
                                onSearch={(text) => universitiesFrom.updateState('name', text)} />
                            <ul className="universities-list">
                                {
                                    universities.map((univ) => <UniversitiesItem key={univ.id} university={univ} />)
                                }
                            </ul>
                            <CustomButton className="universities-main__btn" onClick={() => setPage((page) => page + 1)} icon="plus" text="загрузить ещё" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}