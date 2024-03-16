import { useEffect, useState } from "react"
import { CompositeParams, LoadUniversitiesParams, PrimitivesPrams, loadUniversities } from "../../entites/university/api"
import { IUniversityAll } from "../../entites/university/types"
import UniversitiesItem from "../../entites/university/ui/UniversitiesItem"
import UniversitiesForm from "../../entites/university/ui/UniversitiesForm"
import useForm from "../../shared/hooks/useForm"
import CustomButton from "../../shared/ui/CustomButton"
import UniversitiesFilter from "../../entites/university/ui/UniversitiesFilter"
import useCheckboxes from "../../shared/hooks/useCheckboxes"

export default function Universities() {
    const [universities, setUniversities] = useState<IUniversityAll[]>([])
    const primitive = useForm<PrimitivesPrams>({ page: 1, name: '', price: 0, rating: 0, sortField: '', sortOrder: '' });

    const checkboxData = useCheckboxes({ countries: [], programs: [] });
    const [totalPage, setTotalPage] = useState(0)


    const loadData = async (oldData: IUniversityAll[] = [], params?: PrimitivesPrams) => {
        const data = await loadUniversities({ ...primitive.formState, ...checkboxData.data, ...params })
        setUniversities([...oldData, ...data.data])
        setTotalPage(Math.ceil(data.total / 10))
        return data
    }

    const filtred = () => {
        loadData()
        primitive.updateState('page', 1)
    }

    const loadMore = async () => {
        const newPage = primitive.formState.page + 1
        loadData(universities, { page: newPage })
        primitive.updateState('page', newPage)
    }


    useEffect(() => {
        loadData().then(loadData => setTotalPage(Math.ceil(loadData.total / 10)))
    }, [])

    return (

        <section className="universities">
            <div className="container">
                <div className="universities-inner">
                    <h2 className="universities__title">Университеты</h2>
                    <div className="universities-content">
                        <div className="universities-sidebar">
                            <h3 className="universities-sidebar__title">Фильтры</h3>
                            <UniversitiesFilter
                                onCheckbox={checkboxData.updateData}
                                onUpdate={(key, value) => primitive.updateState(key, value)} />

                            <CustomButton className="universities-sidebar__btn" onClick={() => filtred()} icon="search" text="Поиск" />
                        </div>
                        <div className="universities-main">
                            <UniversitiesForm
                                onSort={(order, field) => primitive.manyUpdateState({ ...primitive.formState, sortOrder: order, sortField: field })}
                                onSearch={(text) => primitive.updateState('name', text)} />
                            <ul className="universities-list">
                                {
                                    universities.map((univ) => <UniversitiesItem key={univ.id} university={univ} />)
                                }
                            </ul>
                            {
                                primitive.formState.page < totalPage ? <CustomButton className="universities-main__btn" onClick={() => loadMore()} icon="plus" text="Загрузить ещё" /> : ''
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}