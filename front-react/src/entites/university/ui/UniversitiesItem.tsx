import { IUniversityAll } from "../types"
import { Swiper, SwiperSlide } from 'swiper/react';
import BtnIcon from "../../../shared/ui/BtnIcon";
type UniversitiesItemProps = {
    university: IUniversityAll
}

export default function UniversitiesItem({ university }: UniversitiesItemProps) {


    return (
        <li className="universities-item">
            <Swiper className="universities-item-slider">
                {
                    university.gallery.map(g =>
                        <SwiperSlide key={g.id}>
                            <div className="universities-item-slider-item">
                                <img src={g.img} alt="" />
                            </div>
                        </SwiperSlide>
                    )
                }
                <SwiperSlide>
                    <div className="universities-item-slider-item">
                        <img src={university.photo} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="universities-item-content">
                <h4>{university.id} {university.name}</h4>
                <ul className="universities-item-list">
                    <li><i className="fa-solid fa-book fa-xl text-blue"></i></li>
                    {
                        university.academic_programs.slice(0, 10).map(ac => <li key={ac.name}>{ac.name}</li>)
                    }
                    <li><a className="text-blue" href="">ещё...</a></li>
                </ul>
                <div className="">
                    <i className="fa-solid fa-flag fa-xl text-blue"></i>
                    <span>{university.country}</span>
                </div>
            </div>
            <div className="universities-item-info">
                <h4 className="text-blue universities-item-info__title">от {Math.round(university.price_year / 4)} €</h4>
                <h4>за семестр</h4>
            </div>
        </li>
    )
}