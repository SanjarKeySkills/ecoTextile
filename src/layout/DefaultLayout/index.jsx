import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../../components/widgets/LayoutComponentsBlock/Header/Header.jsx";
import Footer from "../../components/widgets/LayoutComponentsBlock/Footer/Footer.jsx";

export const ContentFallback = () => <div className={styles.loader}></div>;

const DefaultLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.wrapper}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default index;
