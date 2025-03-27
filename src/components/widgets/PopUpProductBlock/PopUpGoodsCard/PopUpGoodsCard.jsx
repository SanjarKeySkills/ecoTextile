import React from "react";
import styles from "./popUpGoodsCard.module.scss";
import PopUpProductGenerator from "../popUpProductGenerator/PopUpProductGenerator";
import PopUpGoods from "../PopUpGoodsData";

const PopUpGoodsCard = () => {
    return (
        <div className={styles.productCards}>
            <div className={styles.productCardsWrapper}>
                <div className={styles.productItemContainer}>
                    <PopUpProductGenerator data={PopUpGoods} type="goods" />
                </div>
            </div>
        </div>
    );
};

export default PopUpGoodsCard;
