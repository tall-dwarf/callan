


export default function About(){

    return(
        <>
        <section className="about">
        <div className="container">
            <div className="about-inner">
                <h2 className="about__title">О нас</h2>
                <div className="about-content">
                    <div className="about-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut.
                        </p>
                    </div>
                    <img className="about-img" src="/images/about/1.png" alt="" />
                </div>
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