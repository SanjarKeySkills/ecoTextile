import React, { useEffect } from "react";
import styles from "./missionBlock.module.scss";

const MissionBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.missionBlock}>
            <div className={styles.missionContainer}>
                <h1 className={styles.missionTitle}>
                    "ECOTEXTILEPLUS" - лидер в переработке отходов швейной
                    отрасли
                </h1>
                <div className={styles.missionProposal}>
                    <p className={styles.proposalText}>
                        Мы стремимся предложить инновационные и экологически
                        безопасные решения для переработки текстильных отходов в
                        востребованные товары хозяйственного и бытового
                        назначения.
                        <br />
                        <br />
                        Проект направлен на улучшение экологической ситуации,
                        снижение объема сжигания отходов швейной отрасли и
                        уменьшение воздействия на окружающую среду, обеспечивая
                        будущее без отходов.
                    </p>
                </div>
                <div className={styles.missionInfo}>
                    <p className={styles.infoText}>
                        Переработка отходов швейной отрасли позволяет снизить
                        потребность в их сжигании. Вместо жигания остатки ткани
                        будут переработаны в новые продукты. Это будет включать
                        производство вторичных сырьевых материалов, волокон, а
                        также конечных товаров, таких как текстильные изделия,
                        утеплители, покрытия для мебели и другие товары, что
                        позволит уменьшить нагрузку на окружающую среду.
                        Современные технологии переработки помогут эффективно
                        обрабатывать не только натуральные, но и синтетические
                        ткани.
                        <br />
                        <br />
                        Внедрение этих технологий на предприятии позволит
                        переработать такие материалы, как полиэстер, акрил,
                        нейлон, деним и другие виды волокон. Это поможет
                        сократить количество токсичных выбросов в атмосфере.
                        Переработка отходов швейной промышленности не только
                        решает проблему загрязнения, но и открывает новые
                        экономические возможности. Cоздаются новые рабочие места
                        для создания продукции, востребованной на экспортном и
                        внутренних рынках.
                        <br />
                        <br />В рамках настоящего проекта переработка становится
                        не только экологически чистым решением, но и источником
                        новых рабочих мест и развития местного бизнеса. И самое
                        главное: переработка отходов напрямую ведет к снижению
                        выбросов двуокиси углерода и азота, которая является
                        одним из главных факторов, способствующих образованию
                        смога в городе. Настоящий проект поможет предотвратить
                        выделение токсичной сажа - пободного продукта сжигания
                        хлопчатобумажной ткани и синтетических материалов.
                    </p>
                </div>
                <div className={styles.missionImg}></div>
                <span>
                    Швейный бизнес по-прежнему сжигет швейные отходы в качестве
                    топлива для хозяйственных нужд. <br /> Автор фото: Михеев
                    Дмитрий.
                </span>

                <h2 className={styles.paragraphTitle}>
                    Реализация и преимущества
                </h2>
                <div className={styles.missionProposal}>
                    <p className={styles.proposalText}>
                        Для эффективной реализации проекта по переработке
                        отходов швейной отрасли, необходимо создать
                        инфраструктуру для сбора, сортировки и переработки
                        материалов. Важно разработать и внедрить системы,
                        которые позволят эффективно разделять отходы на виды
                        тканей, например, текстиль и синтетические материалы,
                        чтобы направлять их на переработку соответствующими
                        технологиями. Это потребует инвестиций в новые
                        технологии и оборудование, а также в обучение персонала.
                        Результаты будут стоить этих усилий.
                    </p>
                    <br />
                    <p className={styles.proposalText}>
                        Переработка отходов швейной промышленности позволит:
                    </p>
                    <ul>
                        <li className={styles.proposalText}>
                            Значительно снизить количество загрязняющих веществ
                            в атмосфере;
                        </li>
                        <li className={styles.proposalText}>
                            Уменьшить количество отходов, которые накапливаются
                            на свалках;
                        </li>
                        <li className={styles.proposalText}>
                            Снизить уровень смога в некоторых районах города;
                        </li>
                        <li className={styles.proposalText}>
                            Cоздать новые рабочие места и стимулировать развитие
                            бизнеса в области переработки.
                        </li>
                    </ul>
                    <br />
                    <p className={styles.proposalText}>
                        Переработка отходов швейной отрасли представляет собой
                        не только экологически ответственное решение, но и
                        важный шаг в направлении улучшения качества воздуха в
                        городе, страдающих от смога и загрязнения.
                    </p>
                    <br />
                    <p className={styles.proposalText}>
                        Эффективная переработка материалов, использование
                        инновационных технологий и создание устойчивой
                        инфраструктуры переработки может значительно снизить
                        выбросы загрязняющих веществ, таких как <b>CO2, NO2</b>и
                        сажа, и помочь значительно улучшить экологическую
                        ситуацию. Этот процесс не только выгоден для экологии,
                        но и открывает новые возможности для бизнеса, создавая
                        новые товары и рабочие места, что делает переработку
                        отходов швейной промышленности устойчивым звеном в
                        решении проблемы загрязнения воздуха.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionBlock;
