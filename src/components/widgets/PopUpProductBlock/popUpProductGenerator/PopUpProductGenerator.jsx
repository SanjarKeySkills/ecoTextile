import React from "react";
import styles from "./popUpProductGenerator.module.scss";
import { Link } from "react-router-dom";

export default function popUpProductGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className="styles.productList">
            {/* // <div className={clsx(styles.cardList, styles.img, { [styles.active]: true })}> */}
            {data.map((product) => (
                <div key={product.id} className={styles.cardContainer}>
                    <Link
                        to={`/product/${type}/${product.id}`}
                        className={styles.productLink}>
                        {product.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
