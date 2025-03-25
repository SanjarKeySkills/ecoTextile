import React from "react";
import styles from "./popUpProductCard.module.scss";
import PopUpProductGenerator from "../popUpProductGenerator/PopUpProductGenerator";
import PopUpProduct from "../PopUpProductData.js";

const popUpProductCard = () => {
    return (
        <div className={styles.productCards}>
            <div className={styles.productCardsWrapper}>
                <div className={styles.productItemContainer}>
                    <PopUpProductGenerator data={PopUpProduct} type="type" />
                </div>
            </div>
        </div>
    );
};

export default popUpProductCard;
