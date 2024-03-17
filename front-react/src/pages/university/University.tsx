import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { loadUniversity } from "../../entites/university/api";
import { IUniversityItem } from "../../entites/university/types";
import { FaCheck } from "react-icons/fa6";
import Accordion from "../../shared/hocs/Accordion";
import { formEducation } from "../../app/data";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import BtnIcon from "../../shared/ui/BtnIcon";

export default function University() {
    const params = useParams()
    const [university, setUniversity] = useState<IUniversityItem | null>(null)
    const [sipper, setSwipper] = useState<null | SwiperClass>()

    useEffect(() => {
        const universityId = parseInt(String(params.universityId))
        if (universityId) {
            loadUniversity(universityId).then(data => setUniversity(data))
        }
    }, [])

    return (
        <>
            <section className="university">
                <div className="container">
                    <h2 className="university__title">{university?.name}</h2>
                    <div className="university-inner">
                        <div className="university-content">
                            <img className="university-content__img" src={university?.photo} alt="" />
                            <h3 className="university-content__title">О ВУЗе</h3>
                            
                            <p className="university-content__text">
                            {
                                university?.information
                            }
                            </p>
                            <p className="university-content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                            <p className="university-content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                            <p className="university-content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="university-sidebar">
                            <div className="university-info">
                                <div className="university-info-inner">
                                    <ul className="university-info-list">
                                        <li className="university-info-item">
                                            <span className="university-info__key">Расположение</span>
                                            <span className="university-info__value">{university?.country.name}</span>
                                        </li>
                                        <li className="university-info-item">
                                            <span className="university-info__key">Год основания</span>
                                            <span className="university-info__value">{university?.year}</span>
                                        </li>
                                        <li className="university-info-item">
                                            <span className="university-info__key">К-во студентов</span>
                                            <span className="university-info__value">{university?.students_cnt.toLocaleString()}</span>
                                        </li>
                                        <li className="university-info-item">
                                            <span className="university-info__key">Средняя цена за семестр</span>
                                            <span className="university-info__value">{university?.price_year.toLocaleString()} $</span>
                                        </li>
                                        <li className="university-info-item">
                                            <span className="university-info__key">Средняя цена за проживание</span>
                                            <span className="university-info__value">{university?.price_hostel.toLocaleString()} $</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="university-documents">
                                <h3 className="university-documents__title">Документы для поступления</h3>
                                <ul className="university-documents__list">
                                    {
                                        university?.documents.map(doc =>
                                            <li key={doc.id} className="university-documents__item">
                                                <FaCheck size={20} fill="rgb(82, 191, 255)" />
                                                <span>{doc.name}</span>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="academic">
                <div className="container">
                    <div className="academic-inner">
                        <h3 className="academic__title">Академические программы</h3>
                        {
                            formEducation.map(fn => <Accordion title={fn}>
                                <div className="academic-list">
                                    {
                                        university?.academic_programs
                                            .filter(pr => pr.form_education === fn)
                                            .map(data => <span className="academic-item">{data.name}</span>)
                                    }
                                </div>
                            </Accordion>)
                        }
                    </div>
                </div>
            </section>

            <section className="university-carousel">
                <div className="container">
                    <div className="university-carousel-inner">
                        <BtnIcon size={25} onClick={() => sipper?.slideNext()} className="slider-btn slider-btn-next" icon={"next"} />
                        <BtnIcon size={25} onClick={() => sipper?.slidePrev()} className="slider-btn slider-btn-pref" icon={"pref"} />
                        <Swiper 
                        allowTouchMove={false}
                        onInit={swipper => setSwipper(swipper)}
                        slidesPerView={1}>
                            {
                                university?.gallery.map(gal =>
                                    <SwiperSlide className="university-carousel-item">
                                        <img src={gal.img} alt="" />
                                    </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="why-we">
                <img className="tree-top-left" src="/images/tree.png" alt="" />
                <div className="container">
                    <div className="why-we-inner">
                        <h4 className="why-we__subtitle">Мы предлагаем нашим клиентам следующие услуги:</h4>
                        <h2 className="why-we__title">Услуги</h2>
                        <ul className="why-we-list">
                            <li className="why-we-item">
                                <img className="why-we-item__img" src="/images/why-we/1.png" alt="Картинка" />
                                <h4>Сертифицированные услуги нашей профессиональной команды</h4>
                            </li>
                            <li className="why-we-item">
                                <img className="why-we-item__img" src="/images/why-we/2.png" alt="Картинка" />
                                <h4>Высокие визовые ставки (98% наших студентов получили визу)</h4>
                            </li>
                            <li className="why-we-item">
                                <img className="why-we-item__img" src="/images/why-we/3.png" alt="Картинка" />
                                <h4>Учеба в престижных университетах, которые входят в Топ-1000</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}