import React from "react";
import styles from "./galleryBlock.module.scss";

export default function GalleryBlock({ data }) {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className={styles.gallery}>
            {data.map((item) => (
                <div key={item.id} className={styles.galleryWrapper}>
                    <img
                        className={styles.galleryImg}
                        src={item.image}
                        alt={item.id}
                    />
                </div>
            ))}
        </div>
    );
}
