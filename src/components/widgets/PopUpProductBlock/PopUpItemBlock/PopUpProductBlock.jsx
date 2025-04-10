import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./popUpItemBlock.module.scss";
import popUpProductData from "../PopUpProductData.js";
import popUpGoodsData from "../PopUpGoodsData.js";
import imgEco from "../../../../assets/gallery/recycling_clothes.png";

const PopUpProductBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();

    const mapData = {
        product: popUpProductData,
        goods: popUpGoodsData,
    };

    const item = mapData[type].find((e) => e.id === id);
    // возвращает объект в к-р есть информация из type, id,
    // придет тот id того мембера на кого кликнули
    // получаем того мембера, у кого такой id тот и мембер придет в нашу константу.
    // вместо type -  встанет массив mapData[type]
    return (
        <div className={styles.popUpItemBlock}>
            <div key={item.id} className={styles.popUpItemBlockWrapper}>
                <div className={styles.itemTitle}>
                    <img src={item.image} alt="itemPage" />
                    <h2>{item.name}</h2>
                </div>
                <div className={styles.popUpItemInfo}>
                    <img src={imgEco} alt="imgEco" />
                    <div className={styles.popUpItemDescription}>
                        {item.annotation}
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <a href="/contact" className={styles.applyBtn}>
                        <h2>Свяжитесь с нами прямо сейчас!</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopUpProductBlock;
