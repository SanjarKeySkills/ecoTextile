import React from "react";
import styles from "./popUpProductCard.module.scss";
import PopUpProductGenerator from "../popUpProductGenerator/PopUpProductGenerator";
import PopUpProduct from "../PopUpProductData";

const popUpProductCard = () => {
    return (
        <div className={styles.productCards}>
            <div className={styles.productCardsWrapper}>
                <div className={styles.productItemContainer}>
                    <h2>Test</h2>
                    <PopUpProductGenerator data={PopUpProduct} type="type" />
                </div>
            </div>
        </div>
    );
};

export default popUpProductCard;
