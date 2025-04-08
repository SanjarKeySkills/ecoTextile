import React from "react";
import styles from "./accountPage.module.scss";
import certificate from "../../assets/certificate.png";

const AccountPage = () => {
    return (
        <div className={styles.accountPage}>
            <div className={styles.accountPageInfo}>
                <h2>Реквизиты ОсОО «Ду Кастомс»</h2>
                <p>
                    Общество с ограниченной ответственностью “Ду Кастомс” <br />
                    <br />
                    Limited Liability Company «Do Customs» <br />
                    <br />
                </p>
                <p>
                    Директор: Аманов Санжарбек Жаныбекович <br />
                    <br /> ИНН 00103202310164 ОКПО: 31824166 <br />
                    <br /> Юридический адрес: Кыргызская Республика город
                    Бишкек, Первомайский район,ул.Токтоналиева дом 44 кв.63.
                    <br />
                    <br />
                    УГНС по Первомайскому району <br />
                    <br />
                </p>
                <h2>Реквизиты Банка</h2>
                <div className={styles.bankingAccount}>
                    <div className={styles.table}>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>
                                Расчетный счет СОМ
                            </div>
                            <div className={styles.tableCell}>KGS</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>Банк</div>
                            <div className={styles.tableCell}>
                                Филиал ОАО “Оптима Банк” в г.Бишкек №5
                            </div>
                        </div>
                        <div className={styles.tableCell}>Адрес Банка</div>
                        <div className={styles.tableCell}>
                            город Бишкек,Байтик Баатыра,д 20-20а
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>БИК</div>
                            <div className={styles.tableCell}>109016</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCell}>
                                Расчетный счет
                            </div>
                            <div className={styles.tableCell}>
                                1091612054670170
                            </div>
                        </div>
                    </div>
                    <img src={certificate} alt="certificate" />
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
