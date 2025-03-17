import React from "react";
import styles from "./teammemberCard.module.scss";
import TeammembersGenerator from "../TeammemberGenertor/TeammemberGenerator";
import TeammembersData from "../TeammembersData";

const TeammemberCard = () => {
    return (
        <div className={styles.teammemberCards}>
            <div className={styles.memberCardsWrapper}>
                <div className={styles.membersItemContainer}>
                    <h4>КОМАНДА ПРОЕКТА</h4>
                    <p>
                        Для успешной реализации проетка была создана команда из
                        профессионалов с глубокими компетенциями в области
                        переработки отходов швейной отрасли, защиты окружающей
                        среды, менеджмента и IT. <br /> На данной странице
                        отображены портфолио, отражающие профессиональный опыт
                        экспертов команды в области переработки отходов швейной
                        отрасли и ESG.
                    </p>
                    <TeammembersGenerator data={TeammembersData} type="type" />
                </div>
            </div>
        </div>
    );
};

export default TeammemberCard;
