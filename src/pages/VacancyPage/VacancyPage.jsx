import React from "react";
import VacancyBlock from "../../components/widgets/VacancyBlock/VacancyBlock";
import styles from "./vacancyPage.module.scss";
import VacavciesData from "../../components/widgets/VacancyBlock/VacanciesData";

const VacancyPage = () => {
    return (
        <div className={styles.vacancyPage}>
            <h1>Вакансии</h1>
            <VacancyBlock data={VacavciesData} />
        </div>
    );
};

export default VacancyPage;
