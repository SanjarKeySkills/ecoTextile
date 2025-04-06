import React from "react";
import styles from "./infotableBlock.module.scss";
import infoImg1 from "../../../assets/gallery/cloth_recycling_2.png";
import infoImg2 from "../../../assets/gallery/recycle_pad.png";
import infoImg3 from "../../../assets/gallery/production.png";

import PopUpProductCard from "../PopUpProductBlock/popUpProductCard/PopUpProductCard";
import PopUpGoodsCard from "../PopUpProductBlock/PopUpGoodsCard/PopUpGoodsCard";

const InfotableBlock = () => {
    return (
        <div className={styles.infoTableBlock}>
            <div className={styles.infoList}>
                <h1>НАШ ПРОИЗВОДСТВЕНЫЙ ЦИКЛ</h1>
                <div className={styles.infoImg}>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg1} alt="infoImg1"></img>
                        <h4>Сбор отходов швейной отрасли</h4>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg2} alt="infoImg2"></img>
                        <h4>Переработка отходов швейной отрасли</h4>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={infoImg3} alt="infoImg3"></img>
                        <h4>Реализация переработанных товаров</h4>
                    </div>
                </div>
                <p className={styles.infoText}>
                    "ECOTEXTILEPLUS" перерабатывает широкий спектр тканей в
                    товары бытового и хозяйственного назначения.
                </p>
                <div className={styles.industrywrapper}>
                    {/* <div className={styles.industry}>
                        <h3> ЧТО ПЕРЕРАБАТЫВАЕМ</h3>
                        <div>
                            <PopUpProductCard />
                        </div>
                    </div>
                    <div className={styles.industry}>
                        <h3> ЧТО ПРОИЗВОДИМ</h3>
                        <div>
                            <PopUpGoodsCard />
                        </div>
                    </div> */}
                </div>

                {/* <div className={styles.infoCard}>
                    <div className={styles.industryBlock}>
                        <ul className={styles.listWrapper}>
                            <li>
                                <h5>Хлопок</h5>
                                Одежда, текстильные отходы, обрезки, старые
                                ткани. Применение: перерабатываем в новые
                                текстильные изделия, изоляционные материалы,
                                ткани для бытовых нужд.
                            </li>
                            <li>
                                <h5>Полиэстер</h5>
                                Отходы производства одежды, старые изделия из
                                полиэстера. Применение: перерабатываем в новые
                                синтетические ткани, утеплители, мебельные
                                ткани, упаковочные материалы.
                            </li>
                            <li>
                                <h5>Шерсть</h5>
                                Излишки шерстяных тканей, старые изделия.
                                Применение: перерабатываем в новые текстильные
                                изделия, ковры, утеплители, звукоизоляционные
                                материалы.
                            </li>
                            <li>
                                <h5>Лен</h5>
                                Остатки ткани, старое льняное белье. Применение:
                                перерабатываем в новые ткани, упаковочные
                                материалы, фильтры.
                            </li>
                            <li>
                                <h5>Нейлон</h5>
                                Нейлоновые ткани, остатки тканей из
                                синтетических волокон. Применение:
                                перерабатываем в новые синтетические ткани,
                                сумки, коврики, строительные материалы.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.industryBlock}>
                        <ul className={styles.listWrapper}>
                            <li>
                                <h5>Вискоза</h5>
                                Отходы ткани, производственные обрезки.
                                Применение: перерабатываем в новые ткани,
                                изоляционные и фильтрующие материалы.
                            </li>
                            <li>
                                <h5>Спандекс (или эластан)</h5>
                                Остатки тканей с содержанием эластана, старые
                                изделия. Применение: перерабатываем в эластичные
                                материалы, изделия для медицинской и спортивной
                                одежды.
                            </li>
                            <li>
                                <h5>Деним (джинсовая ткань)</h5>
                                Излишки ткани или старые джинсы. Применение:
                                перерабатываем в текстильные изделия, коврики,
                                упаковочные материалы, мебельные обивки.
                            </li>
                            <li>
                                <h5>Акрил</h5>
                                Остатки тканей, старые изделия. Применение:
                                перерабатываем в новые изделия из акрила,
                                утеплители, декоративные ткани. Кожа и
                                искусственная кожа Излишки, отходы производства.
                                Применение: перерабатываем в мебельные покрытия.
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default InfotableBlock;
