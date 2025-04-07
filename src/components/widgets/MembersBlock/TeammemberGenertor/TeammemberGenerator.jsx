import React from "react";
import styles from "./teammemberGenerator.module.scss";
import { Link } from "react-router-dom";
// import clsx from "clsx";

export default function TeammembersGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className={styles.cardList}>
            {/* // <div className={clsx(styles.cardList, styles.img, { [styles.active]: true })}> */}
            {data.map((member) => (
                <div key={member.id} className={styles.cardPage}>
                    {/* <div className={styles.cardWrapper}> */}
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardText}>
                                <h2 className={styles.memberName}>
                                    {member.name}
                                </h2>
                                <p className={styles.annotationName}>
                                    {member.annotation}
                                </p>
                                <Link
                                    to={`/member/${type}/${member.id}`}
                                    className={styles.linkMember}>
                                    РЕЗЮМЕ
                                </Link>
                            </div>
                            <img
                                className={styles.memberImg}
                                src={member.image}
                                alt={member.name}
                            />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            ))}
        </div>
    );
}
