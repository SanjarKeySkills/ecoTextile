import React from "react";
import styles from "./errorPage.module.scss";
import errorImg from "../../assets/404-error.png";

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <img src={errorImg} alt="errorImg" className={styles.errorImg} />
        </div>
    );
};

export default ErrorPage;
