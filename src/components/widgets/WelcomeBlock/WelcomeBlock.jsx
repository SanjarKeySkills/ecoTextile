import React from "react";
import styles from "./welcomeBlock.module.scss";

const WelcomeBlock = () => {
    return (
        <div className={styles.welcomeBlock}>
            <div className={styles.welcomeContainer}>
                <p className={styles.welcomeText}>
                    Мы гордимся тем, что являемся частью движения за
                    экологически чистое будущее. Наша компания специализируется
                    на переработке отходов швейной отрасли. Наша основная цель —
                    не только сократить негативное воздействие на окружающую
                    среду отходов швейной отрасли, но и предложить эффективное
                    решение для уменьшения смога в городах. <br /> <br />
                    Мы стремимся перерабатывать текстильные отходы без сжигания,
                    превращая их в востребованные товары, которые могут быть
                    использованы снова.
                    <br /> <br /> Мы заботимся о здоровье граждан и активно
                    обеспечиваем чистоту воздуха в городе для всех горожан.
                    <br /> <br />С нами будущее без отходов!
                </p>
            </div>
        </div>
    );
};

export default WelcomeBlock;
