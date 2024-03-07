import { Swiper, SwiperSlide } from 'swiper/react';


export default function Reviews() {


    return (
        <section className="reviews">
            <img className="reviews-bg" src="/images/reviews/bg.png" alt="" />
            <img className="reviews-clouds" src="/images/clouds.png" alt="" />
            <div className="container">
                <div className="reviews-inner">
                    <h2 className="reviews__title">Отзывы наших студентов</h2>
                    <Swiper spaceBetween={20} slidesPerView={3} className="reviews-slider">
                        <SwiperSlide>
                            <div className="reviews-item">
                                <div className="reviews-item__content">
                                    <img className="reviews-item__img" src="/images/reviews/1.png" alt="" />
                                </div>
                                <div className="reviews-item__info">
                                    <h4 className="reviews-item__title">Александр Иванов</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews-item">
                                <div className="reviews-item__content">
                                    <img className="reviews-item__img" src="/images/reviews/1.png" alt="" />
                                </div>
                                <div className="reviews-item__info">
                                    <h4 className="reviews-item__title">Александр Иванов</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews-item">
                                <div className="reviews-item__content">
                                    <img className="reviews-item__img" src="/images/reviews/1.png" alt="" />
                                </div>
                                <div className="reviews-item__info">
                                    <h4 className="reviews-item__title">Александр Иванов</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews-item">
                                <div className="reviews-item__content">
                                    <img className="reviews-item__img" src="/images/reviews/1.png" alt="" />
                                </div>
                                <div className="reviews-item__info">
                                    <h4 className="reviews-item__title">Александр Иванов</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}