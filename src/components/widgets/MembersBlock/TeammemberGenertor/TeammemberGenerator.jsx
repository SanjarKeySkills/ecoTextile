import React from "react";
import styles from "./teammemberGenerator.module.scss";
import { Link } from "react-router-dom";
// import clsx from "clsx";

export default function TeammembersGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className={styles.cardList}>
            {data.map((member) => (
                <div key={member.id} className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <p className={styles.memberName}>{member.name}</p>
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
            ))}
        </div>
    );
}
