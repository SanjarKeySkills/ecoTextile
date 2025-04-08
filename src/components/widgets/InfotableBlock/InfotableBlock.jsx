import React, { useEffect } from "react";
import styles from "./infotableBlock.module.scss";
import infoImg1 from "../../../assets/gallery/cloth_recycling_2.png";
import infoImg2 from "../../../assets/gallery/recycle_pad.png";
import infoImg3 from "../../../assets/gallery/production.png";

import PopUpProductCard from "../PopUpProductBlock/popUpProductCard/PopUpProductCard";
import PopUpGoodsCard from "../PopUpProductBlock/PopUpGoodsCard/PopUpGoodsCard";

const InfotableBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.infoTableBlock}>
            <div className={styles.infoList}>
                <h1>НАШ ПРОИЗВОДСТВЕНЫЙ ЦИКЛ</h1>
                <div className={styles.infoImg}>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg1} alt="infoImg1"></img>
                        <h4>Сбор отходов швейной отрасли</h4>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg2} alt="infoImg2"></img>
                        <h4>Переработка отходов швейной отрасли</h4>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg3} alt="infoImg3"></img>
                        <h4>Реализация переработанных товаров</h4>
                    </div>
                </div>
                <div className={styles.industryContainer}>
                    <div className={styles.industryWrapper}>
                        <div className={styles.industry}>
                            <h3> ЧТО ПЕРЕРАБАТЫВАЕМ</h3>
                            <div>
                                <PopUpProductCard />
                            </div>
                        </div>
                        <div className={styles.industry}>
                            <h3> ЧТО ПРОИЗВОДИМ</h3>
                            <div>
                                <PopUpGoodsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfotableBlock;
