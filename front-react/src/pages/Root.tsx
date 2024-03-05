import { Outlet } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { routerConfig } from "../app/router";
import { NavLink } from "react-router-dom";
import BtnIcon from "../shared/ui/BtnIcon";
import { useState } from "react";
import { ModalContext } from "../shared/context/modalcontext";
import Modal from "../shared/hocs/Modal";
import FeedbackForm from "../widgets/FeedbackForm/FeedbackForm";

export default function Root() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const navConfig = [
        { id: 1, text: 'Главная', path: routerConfig.main, },
        { id: 2, text: 'О нас', path: routerConfig.about, },
        { id: 3, text: 'Университеты', path: routerConfig.universities, },
        { id: 4, text: 'Заявка на консультацию', path: routerConfig.consultation, }
    ]

    return (
        <>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} ><FeedbackForm /></Modal>
            
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

                        <BtnIcon className="button-white header-button" icon="phone" text="Оставить заявку" />
                        <div role="button" className="burger">
                            <img src="/images/burger.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <ModalContext.Provider value={{ open: () => setModalIsOpen(true) }}>
                <Outlet />
            </ModalContext.Provider>

            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-main">
                            <img src="/images/callan.png" alt="" />
                            <nav className="nav footer-nav">
                                <ul className="nav-list footer-nav-list">
                                    {
                                        navConfig.map(navItem =>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" key={navItem.id} to={navItem.path}>{navItem.text}</NavLink>
                                            </li>)
                                    }
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