import React from "react";
import { useParams } from "react-router-dom";
import styles from "./popUpItemBlock.module.scss";
import PopUpProductData from "../PopUpProductData";

const PopUpItemBlock = () => {
    const { id } = useParams();
    const product = PopUpProductData.find((product) => product.id === id);
    // возвращает объект в к-р есть информация из УРЛ, id,
    // придет тот id того мембера на кого кликнули
    // получаем того мембера, у кого такой id тот и мембер придет в нашу константу.
    // вместо type -  встанет массив PopUpProductData
    return (
        <div className={styles.popUpItemBlock}>
            <div key={product.id} className={styles.popUpItemBlockWrapper}>
                <div className={styles.itemTitle}>
                    <img src={product.image} alt="itemPage" />
                    <h2 className={styles.item.name}>{product.name}</h2>
                </div>
                <div className={styles.popUpItemBlock}>
                    <div>Description</div>
                    <div className={styles.popUpItemDescription}>
                        <p>{product.annotation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpItemBlock;
