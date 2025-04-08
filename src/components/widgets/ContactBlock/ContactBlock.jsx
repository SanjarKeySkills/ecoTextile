import React, { useEffect } from "react";
import styles from "./contactBlock.module.scss";
import instLogo from "../../../assets/social/instagram-logo_contact.svg";
import facebookLogo from "../../../assets/social/facebook-logo_contact.svg";
import Button from "../../ui/Button/Button";

const ContactBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.contact}>
            <div className={styles.contactWrapper}>
                <div className={styles.contactForm}>
                    <div className={styles.contactFormInfo}>
                        <h2>
                            Форма заявки <br /> на переработку отходов швейной
                            отрасли
                        </h2>
                        <p>
                            Кыргызская Республика г.Бишкек, ул. Токтоналиева дом
                            44 - 63
                            <br /> <br /> san4s_47@mail.ru
                            <br /> +996 700 840 099
                        </p>
                    </div>
                    <div className={styles.contactFormButtonsAndSocial}>
                        <a href="/account" className={styles.btnForm}>
                            РЕКВИЗИТЫ
                        </a>

                        <a href="/mission" className={styles.btnForm}>
                            О КОМПАНИИ
                        </a>
                    </div>
                    <div className={styles.contactSocial}>
                        <a href="https://www.instagram.com/">
                            <img
                                src={instLogo}
                                alt="Instagram"
                                className={styles.socialLogo}
                            />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className={styles.socialLogo}
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.contactInput}>
                    <form
                        method="post"
                        action="https://script.google.com/macros/s/AKfycbyd1N8SX-qGRGTjN_maIQcK-VjGjNcTgS-9L0bhMfsKBZchyevfOeP4Xz3bTLCLIs8H/exec"
                        name="submit-to-google-sheet">
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                Название компании
                            </span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Компания"
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                ФИО лица подающего заявку
                            </span>
                            <input
                                type="text"
                                name="name"
                                placeholder="ФИО"
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                Ваша электронная почта
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Электронная почта"
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                Номер телефона
                            </span>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                required
                            />
                        </div>
                        <div className={styles.textareaBox}>
                            <span>Ваш комментарий</span>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Комментарии"></textarea>
                        </div>
                        <p>ОФОРМЛЕНИЕ ЗАКАЗА НА:</p>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="recycle"
                                    name="recycle"
                                    value="recycle"
                                    checked
                                />
                                <label for="active">Переработку отходов</label>
                            </div>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="production"
                                    name="production"
                                    value="production"
                                />
                                <label for="production">
                                    Приобретение продукции
                                </label>
                            </div>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button size="s" variant="outlined">
                                ОТПРАВИТЬ
                            </Button>
                        </div>
                    </form>
                    <div className={styles.contactOfficial}>
                        <span>
                            Для оформления заявки на переработку отходов швейной
                            отрасли заказчику необходимо заполнить анкету онлайн
                            и отправить в Компанию "ECOTEXTILE".
                            <br />
                            Ответственный специалист свяжется с вами в ближайшее
                            доступное время.
                            <br />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;
