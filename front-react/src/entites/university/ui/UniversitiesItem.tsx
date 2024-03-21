import { IUniversityList } from "../types"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

type UniversitiesItemProps = {
    university: IUniversityList
}

export default function UniversitiesItem({ university }: UniversitiesItemProps) {


    return (
        <li className="universities-item">
            <Swiper className="universities-item-slider">
                {
                    university.gallery.map(g =>
                        <SwiperSlide key={g.id}>
                            <div className="universities-item-slider-item">
                                <img src={g.small_img} alt="" />
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
                <h4>{university.id} <Link to={`${university.id}`}>{university.name}</Link></h4>
                <ul className="universities-item-list">
                    <li><i className="fa-solid fa-book fa-xl text-blue"></i></li>
                    {
                        university.academic_programs.slice(0, 10).map(ac => <li key={ac.name}>{ac.name}</li>)
                    }
                    <li><a className="text-blue" href="">ещё...</a></li>
                </ul>
                <div className="">
                    <i className="fa-solid fa-flag fa-xl text-blue"></i>
                    <span>{university.country.name}</span>
                </div>
            </div>
            <div className="universities-item-info">
                <h4 className="text-blue universities-item-info__title">от {university.price_year} €</h4>
                <h4>за год</h4>
            </div>
        </li>
    )
}