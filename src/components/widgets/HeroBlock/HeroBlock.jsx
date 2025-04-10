import React, { useEffect } from "react";
import styles from "./heroBlock.module.scss";
import imageTop from "../../../assets/gallery/heroTop.png";

const HeroBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.heroBlock}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroImg}>
                        <img
                            src={imageTop}
                            alt="heroTopImage"
                            className={styles.imageTop}
                        />
                    </div>
                    <div className={styles.heroTitle}>
                        <p>
                            ЭФФЕКТИВНАЯ <br />
                            Переработка отходов швейной отрасли
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBlock;
