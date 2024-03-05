


export default function University(){

    return(
        <>
        <section className="university">
        <div className="container">
            <h2 className="university__title">Название университета</h2>
            <div className="university-inner">
                <div className="university-content">
                    <img className="university-content__img" src="/images/university/2.jpeg" alt="" />
                    <h3 className="university-content__title">О ВУЗе</h3>
                    <p className="university-content__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
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
                                    <span className="university-info__value">США, Флорида</span>
                                </li>
                                <li className="university-info-item">
                                    <span className="university-info__key">Год основания</span>
                                    <span className="university-info__value">1990</span>
                                </li>
                                <li className="university-info-item">
                                    <span className="university-info__key">К-во студентов</span>
                                    <span className="university-info__value">10 000</span>
                                </li>
                                <li className="university-info-item">
                                    <span className="university-info__key">Средняя цена за семестр</span>
                                    <span className="university-info__value">10 000 грн</span>
                                </li>
                                <li className="university-info-item">
                                    <span className="university-info__key">Средняя цена за проживание</span>
                                    <span className="university-info__value">10 000 грн</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="university-documents">
                        <h3 className="university-documents__title">Документы для поступления</h3>
                        <ul className="university-documents__list">
                            <li className="university-documents__item">
                                <i className="fa-solid fa-check fa-lg text-blue"></i>
                                <span>Название документа</span>
                            </li>
                            <li className="university-documents__item">
                                <i className="fa-solid fa-check fa-lg text-blue"></i>
                                <span>Название документа</span>
                            </li>
                            <li className="university-documents__item">
                                <i className="fa-solid fa-check fa-lg text-blue"></i>
                                <span>Название документа</span>
                            </li>
                            <li className="university-documents__item">
                                <i className="fa-solid fa-check fa-lg text-blue"></i>
                                <span>Название документа</span>
                            </li>
                            <li className="university-documents__item">
                                <i className="fa-solid fa-check fa-lg text-blue"></i>
                                <span>Название документа</span>
                            </li>
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
                <ul className="question-list">
                    <li className="question-item">
                        <button className="question-item__button button-icon"><i className="fa-solid fa-plus"></i></button>
                        <h4 className="question-item__title">Бакалавриат</h4>
                        <p className="question-item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                    </li>
                </ul>
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