import { Swiper, SwiperSlide } from 'swiper/react';


export default function StudentsPhoto() {

    return (
        <section className="students-photo">
            <div className="container">
                <div className="students-photo-inner">
                    <h2 className="students-photo__title">Фотографии наших студентов</h2>
                    <Swiper spaceBetween={20} slidesPerView={4}>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="students-photo-item">
                                <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}