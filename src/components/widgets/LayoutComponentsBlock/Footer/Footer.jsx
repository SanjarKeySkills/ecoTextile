import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import footerLogo from "../../../../assets/ecotextile_logo.png";
import instLogo from "../../../../assets/social/instagram-logo.svg";
import FacebookLogo from "../../../../assets/social/facebook-logo.svg";

const arrLinks = [
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/mission", label: "МИССИЯ" },
    { to: "/team", label: "КОМАНДА" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
    { to: "/vacancy", label: "ВАКАНСИИ" },
    { to: "/contact", label: "КОНТАКТЫ" },
];
const arrLan = [
    { to: "#", label: "KG" },
    { to: "#", label: "EN" },
    { to: "#", label: "RU" },
];

const arrSocial = [
    {
        to: "https://www.instagram.com/invoicepluss?igsh=MWc2c2p4cnd3eW43Nw==",
        label: instLogo,
    },
    {
        to: "https://www.facebook.com",
        label: FacebookLogo,
    },
];

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerContacts}>
                        <img src={footerLogo} alt="Footer Logo" />
                        <p>
                            Кыргызская Республика г.Бишкек, ул. Токтоналиева дом
                            44 - 63
                            <br /> <br /> san4s_47@mail.ru
                            <br /> +996 700 840 099
                        </p>
                    </div>
                    <div className={styles.footerInfo}>
                        <ul className={styles.footerList}>
                            {arrLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerAnnotation}>
                        <ul className={styles.listLanFooter}>
                            {arrLan.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className={styles.lan}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.listSocialFooter}>
                            {arrSocial.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={styles.socialImg}>
                                        <img
                                            src={link.label}
                                            alt="Social Logo"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.remarkWrapper}>
                    <p>
                        All rights reserved. Developed by "KEYSKILLS" LLC. The
                        Kyrgyz Republic Bishkek 2025.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
