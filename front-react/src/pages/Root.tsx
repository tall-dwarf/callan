import { Outlet } from "react-router-dom"
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { routerConfig } from "../app/router";
import { NavLink } from "react-router-dom";

export default function Root() {
    const navConfig = [
        { id: 1, text: 'Главная', path: routerConfig.main, },
        { id: 2, text: 'О нас', path: routerConfig.about, },
        { id: 3, text: 'Университеты', path: routerConfig.universities, },
        { id: 4, text: 'Заявка на консультацию', path: routerConfig.consultation, }
    ]

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <NavLink to={routerConfig.main} >
                            <img className="logo header-logo" src="/images/logo.png" alt="Логотип" />
                        </NavLink>
                        <div className="social header-social">
                            <a className="social-link" href="/">
                                <FaInstagram className="social-icon" size={25} />
                            </a>
                            <a className="social-link" href="/">
                                <FaFacebook className="social-icon" size={25} />
                            </a>
                            <a className="social-link" href="/">
                                <FaYoutube className="social-icon" size={25} />
                            </a>
                        </div>
                        <nav className="nav header-nav">
                            <ul className="nav-list header-nav__list">
                                {
                                    navConfig.map(navItem =>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" key={navItem.id} to={navItem.path}>{navItem.text}</NavLink>
                                        </li>)
                                }
                            </ul>
                        </nav>

                        <div className="lang header-lang">
                            <div className="lang-item lang-item--active">РУС</div>
                            <div className="lang-item">UZ</div>
                        </div>

                        <button className="button-white header-button">
                            <FaPhone color="#ffffff" size={35} />
                            <span>Оставить заявку</span>
                        </button>
                        <div role="button" className="burger">
                            <img src="/images/burger.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-main">
                            <img src="/images/callan.png" alt="" />
                            <nav className="nav footer-nav">
                                <ul className="nav-list footer-nav-list">
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">О нас</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Услуги</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Университеты</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Студенты</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Новости</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="social">
                                <a className="social-link" href="/">
                                    <i className="social-icon fa-brands fa-instagram fa-xl"></i>
                                </a>
                                <a className="social-link" href="/">
                                    <i className="social-icon fa-brands fa-facebook-f fa-xl"></i>
                                </a>
                                <a className="social-link" href="/">
                                    <i className="social-icon fa-brands fa-youtube fa-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="footer-info">
                            <img src="/images/world-wide.png" alt="" />
                            <div className="info-item">
                                <i className="fa-solid fa-phone fa-xl"></i>
                                <strong>+998 (99) 878-63-99</strong>
                                <strong>+998 (99) 878-63-99</strong>
                            </div>
                            <div className="info-item">
                                <i className="fa-solid fa-clock fa-xl"></i>
                                <strong>Пн-Пт 9:00 - 18:00</strong>
                            </div>
                            <div className="info-item">
                                <i className="fa-solid fa-location-dot fa-xl"></i>
                                <strong>г. Город</strong>
                                <span>ул. Улица, 24 (Офис 24)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}