import { Swiper, SwiperSlide } from 'swiper/react';


export default function UniversitySlider() {
    const data = [
        { id: 1, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
        { id: 2, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
        { id: 3, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
        { id: 4, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
        { id: 5, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
        { id: 6, img: '/images/university/1.png', country: 'Россия', cnt: 12, },
    ];

    return (
        <section className="section-university">
            <div className="container">
                <div className="section-university-inner">
                    <h2 className="section-university__title">Университеты</h2>
                    <h4 className="section-university__subtitle">В нашем каталоге вы найдете более 100 университетов из более чем 14 стран</h4>
                </div>
            </div>
            <Swiper
                className="university-slider"
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map(dItem => <SwiperSlide key={dItem.id}>
                        <div className="university-slider-item">
                            <img src={dItem.img} alt="" />
                            <div className="university-slider-item__info">
                                <strong>{dItem.country}</strong>
                                <span>{dItem.cnt} вузов</span>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    )
}