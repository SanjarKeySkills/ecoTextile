import React from "react";
import styles from "./vacancy.module.scss";

export default function VacancyBlock({ data }) {
    return (
        <div className={styles.vacancy}>
            {data.map((vacancy) => (
                <div key={vacancy.id} className={styles.vacancyBlock}>
                    <div className={styles.vacancyInfo}>
                        <h2>Должность</h2>
                        <div>{vacancy.position}</div>
                    </div>
                    <div className={styles.vacancyInfo}>
                        <h2>Зарплата</h2>
                        <div>{vacancy.salary}</div>
                    </div>
                    <div className={styles.vacancyInfo}>
                        <h2>Описание</h2>
                        <div>{vacancy.disc}</div>
                    </div>
                    <div className={styles.vacancyInfo}>
                        <h2>Тип занятости</h2>
                        <div>{vacancy.type}</div>
                    </div>
                    <div className={styles.vacancyInfo}>
                        <h2>Дата публикации</h2>
                        <div>{vacancy.date}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
