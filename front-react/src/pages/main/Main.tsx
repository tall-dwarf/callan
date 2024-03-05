



export default function Main() {

    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="main-inner">
                        <div className="main-slider">
                            <div className="main-slider-wrapper">
                                <div className="main-slider-item">
                                    <h1 className="main-slider__title">Грант и контрактное обучение в <strong className="text-blue">зарубежных</strong> вузах</h1>
                                    <h4 className="main-slider__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</h4>
                                    <button>
                                        <i className="fas fa-phone"></i>
                                        <span>Связаться с нами</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="main-info">
                            <div className="info-item">
                                <i className="fa-solid fa-location-dot fa-xl"></i>
                                <strong>г. Город</strong>
                                <span>ул. Улица, 24 (Офис 24)</span>
                            </div>
                            <div className="info-item">
                                <i className="fa-solid fa-clock fa-xl"></i>
                                <strong>Пн-Пт 9:00 - 18:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="why-we">
                <img className="tree-top-left" src="/images/tree.png" alt="" />
                <div className="container">
                    <div className="why-we-inner">
                        <h4 className="why-we__subtitle">Добро пожаловать в нашу группу иностранного образования</h4>
                        <h2 className="why-we__title">Почему мы?</h2>
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

            <section className="section-university">
                <div className="container">
                    <div className="section-university-inner">
                        <h2 className="section-university__title">Университеты</h2>
                        <h4 className="section-university__subtitle">В нашем каталоге вы найдете более 100 университетов из более чем 14 стран</h4>
                        <div className="university-slider">
                            <div className="university-slider-wrapper">
                                <div className="university-slider-item">
                                    <img src="/images/university/1.png" alt="" />
                                    <div className="university-slider-item__info">
                                        <strong>Россия</strong>
                                        <span>15 вузов</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews">
                <img className="reviews-bg" src="/images/reviews/bg.png" alt="" />
                <img className="reviews-clouds" src="/images/clouds.png" alt="" />
                <div className="container">
                    <div className="reviews-inner">
                        <h2 className="reviews__title">Отзывы наших студентов</h2>
                        <div className="reviews-slider">
                            <div className="reviews-slider-wrapper">
                                <div className="reviews-item">
                                    <div className="reviews-item__content">
                                        <img className="reviews-item__img" src="/images/reviews/1.png" alt="" />
                                    </div>
                                    <div className="reviews-item__info">
                                        <h4 className="reviews-item__title">Александр Иванов</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="students-photo">
                <div className="container">
                    <div className="students-photo-inner">
                        <h2 className="students-photo__title">Фотографии наших студентов</h2>
                        <div className="students-photo-slider">
                            <div className="students-photo-wrapper">
                                <div className="students-photo-item">
                                    <img className="students-photo-item__img" src="/images/students/1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="question">
                <img className="bottom-clouds" src="/images/clouds.png" alt="" />
                <div className="container">
                    <div className="question-inner">
                        <h2 className="question__title">Вопросы и ответы</h2>

                        <ul className="question-list">
                            <li className="question-item">
                                <button className="question-item__button button-icon"><i className="fa-solid fa-plus"></i></button>
                                <h4 className="question-item__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</h4>
                                <p className="question-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                            </li>
                            <li className="question-item question-item--open">
                                <button className="question-item__button button-icon"><i className="fa-solid fa-plus"></i></button>
                                <h4 className="question-item__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</h4>
                                <p className="question-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="feedback">
                <img className="bottom-clouds" src="/images/clouds.png" alt="" />
                <div className="container">
                    <div className="feedback-inner">
                        <div className="feedback-info">
                            <img src="/images/feedback/woman.png" alt="" />
                        </div>
                        <div className="feedback-form">
                            <div className="feedback-form__inner">
                                <h3 className="feedback-form__title">Связатся с нами</h3>
                                <h4 className="feedback-form__subtitle">Оставьте свои данные и наш специалист обязательно свяжемся с Вами в течение дня</h4>
                                <form className="form" action="">
                                    <input placeholder="Ваше имя" type="text" />
                                    <input placeholder="+998 (___) __ - __ - __" type="text" />
                                    <input placeholder="Дополнительные комментарии" type="text" />
                                    <button className="form__btn">
                                        <i className="fa-solid fa-message"></i>
                                        <span>Отправить</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts">
                <img className="tree-top-left" src="/images/tree.png" alt="" />
                <img className="top-clouds" src="/images/clouds.png" alt="" />
                <img className="bottom-clouds" src="/images/clouds.png" alt="" />
                <img className="contacts-truck" src="/images/truck.png" alt="" />
                <div className="container">
                    <div className="contacts-inner">
                        <h2 className="contacts__title">Остались вопросы?</h2>
                        <h4 className="contacts__subtitle">Свяжитесь с нами и мы ответим на все ваши вопросы</h4>
                        <div className="contacts-info">
                            <div className="contacts-info__inner">
                                <div className="contacts-item">
                                    <i className="fa-solid fa-phone-volume fa-lg text-blue"></i>
                                    <div className="contacts-item-content">
                                        <span className="contacts-item__title">Телефоны</span>
                                        <span className="contacts-item__subtitle">+998 (99) 878-63-99</span>
                                        <span className="contacts-item__subtitle">+998 (99) 878-63-99</span>
                                    </div>
                                </div>
                                <div className="contacts-item">
                                    <i className="fa-solid fa-location-dot fa-lg text-blue"></i>
                                    <div className="contacts-item-content">
                                        <span className="contacts-item__title">Адрес</span>
                                        <span className="contacts-item__subtitle">г. Город, ул. Улица, 24 (Офис 24)</span>
                                    </div>
                                </div>
                                <div className="contacts-item">
                                    <i className="fa-regular fa-clock fa-lg text-blue"></i>
                                    <div className="contacts-item-content">
                                        <span className="contacts-item__title">Время работы</span>
                                        <span className="contacts-item__subtitle">Пн-Пт 9:00 - 18:00</span>
                                    </div>
                                </div>

                            </div>
                            <button className="contacts-info__btn">
                                <i className="fa-solid fa-phone"></i>
                                <span>Связаться с нами</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


