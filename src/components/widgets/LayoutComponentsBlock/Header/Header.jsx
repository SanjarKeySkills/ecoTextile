import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../../../assets/ecotextile_logo.png";
import burgerButton from "../../../../assets/uIelements/burgerBtn.svg";
import arrowPopUp from "../../../../assets/uIelements/arrowBtn.svg";
import PopUpProductCard from "../../PopUpProductBlock/popUpProductCard/PopUpProductCard";
import PopUpGoodsCard from "../../PopUpProductBlock/PopUpGoodsCard/PopUpGoodsCard";

const arrLinks = [
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/mission", label: "МИССИЯ" },
    { to: "/team", label: "КОМАНДА" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
    { to: "/vacancy", label: "ВАКАНСИИ" },
    { to: "/contact", label: "КОНТАКТЫ" },
];
const arrLan = [
    { id: 1, to: "/kg", label: "KG" },
    { id: 2, to: "/en", label: "EN" },
    { id: 3, to: "/ru", label: "RU" },
];

// Header Desctop menu
const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState(false);
    const togglePopup = () => setOpenPopUp(!isOpenPopUp);
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerUp}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="main"
                            className={styles.headerLogo}
                        />
                    </Link>
                    <div className={styles.listNavbarWrapper}>
                        <ul>
                            {arrLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.to} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lansDesctop}>
                        {arrLan.map((link) => (
                            <div className={styles.lan}>{link.label}</div>
                        ))}
                    </div>
                </div>
                {/* Header bottom */}
                <div className={styles.headerBottom}>
                    {/* dropdownButton */}
                    <div className={styles.dropdownWrapper}>
                        <div className={styles.dropdown}>
                            <Link className={styles.dropdownButton}>
                                ЧТО ПЕРЕРАБАТЫВАЕМ
                            </Link>
                            <div className={styles.dropdownContent}>
                                <PopUpProductCard />
                            </div>
                        </div>
                        <div className={styles.dropdown}>
                            <Link className={styles.dropdownButton}>
                                ЧТО ПРОИЗВОДИМ
                            </Link>
                            <div className={styles.dropdownContent}>
                                <PopUpGoodsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile responcive menu */}
            <div className={styles.headerMobile}>
                <div className={styles.headerMobileWrapper}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="main"
                            onClick={togglePopup}
                            className={styles.headerLogo}
                        />
                    </Link>
                    <img
                        src={burgerButton}
                        alt="burger"
                        onClick={togglePopup}
                        className={styles.burgerBtn}
                    />
                    <HeaderMobileMenu
                        isOpenPopUp={isOpenPopUp}
                        togglePopup={togglePopup}
                    />
                </div>
            </div>
        </div>
    );
};
export default Header;

// Header popUp
const HeaderMobileMenu = (props) => {
    const { isOpenPopUp, togglePopup } = props;
    const handlePopUpLinkClick = () => togglePopup(); // Закрытие адаптивного popUp меню
    return (
        <div
            className={styles.popUpMobile}
            style={{ display: isOpenPopUp ? "block" : "none" }}>
            <div className={styles.wrapperPopUp}>
                <img
                    src={arrowPopUp}
                    alt="arrow"
                    onClick={togglePopup}
                    className={styles.arrowPopupImg}
                />
                {/* <ul className={styles.listNavbarPopUp}>
                    {arrLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul> */}
                {/* <ul className={styles.listLanPopUp}>
                    {arrLan.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.lan}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};
