import { useEffect, useState } from "react"
import { UniversitiesParams, loadUniversities } from "../../entites/university/api"
import { IUniversityList } from "../../entites/university/types"
import UniversitiesItem from "../../entites/university/ui/UniversitiesItem"
import UniversitiesForm from "../../entites/university/ui/UniversitiesForm"
import CustomButton from "../../shared/ui/CustomButton"
import UniversitiesFilter from "../../entites/university/ui/UniversitiesFilter"


export default function Universities() {
    const [universities, setUniversities] = useState<IUniversityList[]>([])

    const [params, setParams] = useState<UniversitiesParams>({ page: 1, name: '', price: 0, rating: 0, sortField: '', sortOrder: '', countries: [], programs: [] })
    const [lastPage, setLastPage] = useState(0)

    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIserror] = useState(false)

    const updateParam = (key: keyof UniversitiesParams, value: string | number) => {
        setParams({ ...params, [key]: value })
    }

    const updateCheckbox = (key: 'countries' | 'programs', value: number) => {
        if (params[key].includes(value)) {
            return setParams({ ...params, [key]: params[key].filter(itm => itm != value) })
        }
        setParams({ ...params, [key]: [...params[key], value] })
    }

    const loadData = async () => {
        try {
            setIsLoad(true)
            const data = await loadUniversities(params)
            setIsLoad(false)
            return data
        } catch {
            setIserror(true)
            return { data: [], last_page: 0}
        }

    }

    const filtred = async () => {
        const data = await loadData()
        setUniversities(data.data)
        setLastPage(data.last_page)
    }


    useEffect(() => {
        loadData()
            .then(data => {
                setUniversities([...universities, ...data.data])
                setLastPage(data.last_page)
            })
    }, [params.page])


    // console.log(setLastPage);
    

    return (

        <section className="universities">
            <div className="container">
                <div className="universities-inner">
                    <h2 className="universities__title">Университеты</h2>
                    <div className="universities-content">
                        <div className="universities-sidebar">
                            <h3 className="universities-sidebar__title">Фильтры</h3>
                            <UniversitiesFilter
                                onCheckbox={(key, value) => updateCheckbox(key, value)}
                                onUpdate={(key, value) => updateParam(key, value)} />

                            <CustomButton className="universities-sidebar__btn" onClick={() => filtred()} icon="search" text="Поиск" />
                        </div>
                        <div className="universities-main">

                            
                            <UniversitiesForm
                                onSort={(order, field) => setParams({ ...params, sortOrder: order, sortField: field })}
                                onSearch={(text) => updateParam('name', text)} />

                                {/* <div className="universities-loader"></div> */}
                            <ul className="universities-list">
                                {
                                    universities.map((univ) => <UniversitiesItem key={univ.id} university={univ} />)
                                }
                                {/* <li className="universities-loader"></li> */}
                            </ul>
                            {
                                params.page <
                                    lastPage ?
                                    <CustomButton className="universities-main__btn" onClick={() => updateParam('page', params.page + 1)} icon="plus" text="Загрузить ещё" /> : ''
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}