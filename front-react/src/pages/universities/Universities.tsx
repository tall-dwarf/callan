


export default function Universities(){

    return(
        
    <section className="universities">
    <div className="container">
        <div className="universities-inner">
            <h2 className="universities__title">Университеты</h2>
            <div className="universities-content">
                <div className="universities-sidebar">
                    <h3>Фильтры</h3>
                    <div className="filter-item">
                        <span className="filter-item__title text-black">Страны</span>
                    </div>
                </div>
                <div className="universities-main">
                    <div className="universities-form">
                        <input className="universities-form__input" placeholder="Поиск" type="text" />
                        <div className="radio-icon-list">
                            <div className="radio-icon">
                                <input id="huey1" className="radio-icon-input" type="radio" name="drone" />
                                <label className="radio-icon-label" htmlFor="huey1"><i
                                        className="radio-icon-icon fa-solid fa-fire fa-lg"></i>По популярности</label>
                            </div>
                            <div className="radio-icon">
                                <input id="huey2" className="radio-icon-input" type="radio" name="drone" />
                                <label className="radio-icon-label" htmlFor="huey2"><i
                                        className="radio-icon-icon fa-solid fa-arrow-up fa-lg"></i>По цене</label>
                            </div>
                            <div className="radio-icon">
                                <input id="huey3" className="radio-icon-input" type="radio" name="drone" />
                                <label className="radio-icon-label" htmlFor="huey3"><i
                                        className="radio-icon-icon fa-solid fa-arrow-down fa-lg"></i>По цене</label>
                            </div>
                        </div>
                    </div>
                    <ul className="universities-list">
                        <li className="universities-item">
                            <div className="universities-item-slider">
                                <div className="universities-item-wrapper">
                                    <div className="universities-item-slider-item">
                                        <img src="/images/university/1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="universities-item-content">
                                <h4>Название университета</h4>
                                <ul className="universities-item-list">
                                    <li><i className="fa-solid fa-book fa-xl text-blue"></i></li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li><a className="text-blue" href="">ещё...</a></li>
                                </ul>
                                <div className="">
                                    <i className="fa-solid fa-flag fa-xl text-blue"></i>
                                    <span>Москва, Россия</span>
                                </div>
                            </div>
                            <div className="universities-item-info">
                                <h4 className="text-blue universities-item-info__title">от 3 000 €</h4>
                                <h4>за семестр</h4>
                            </div>
                        </li>
                        <li className="universities-item">
                            <div className="universities-item-slider">
                                <div className="universities-item-wrapper">
                                    <div className="universities-item-slider-item">
                                        <img src="/images/university/1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="universities-item-content">
                                <h4>Название университета</h4>
                                <ul className="universities-item-list">
                                    <li><i className="fa-solid fa-book fa-xl text-blue"></i></li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li>Архитектура</li>
                                    <li><a className="text-blue" href="">ещё...</a></li>
                                </ul>
                                <div className="">
                                    <i className="fa-solid fa-flag fa-xl text-blue"></i>
                                    <span>Москва, Россия</span>
                                </div>
                            </div>
                            <div className="universities-item-info">
                                <h4 className="text-blue universities-item-info__title">от 3 000 €</h4>
                                <h4>за семестр</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}