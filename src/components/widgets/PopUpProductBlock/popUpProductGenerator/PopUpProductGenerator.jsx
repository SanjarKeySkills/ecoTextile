import React from "react";
import styles from "./popUpProductGenerator.module.scss";
import { Link } from "react-router-dom";

export default function popUpProductGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className="styles.productList">
            {/* // <div className={clsx(styles.cardList, styles.img, { [styles.active]: true })}> */}
            {data.map((item) => (
                <div key={item.id} className={styles.cardContainer}>
                    <Link
                        to={`/item/${type}/${item.id}`}
                        className={styles.productLink}>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
