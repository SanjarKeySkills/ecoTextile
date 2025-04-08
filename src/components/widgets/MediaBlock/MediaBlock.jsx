import React, { useEffect, useRef } from "react";
import styles from "./mediaBlock.module.scss";
import videoBg from "../../../assets/videoplayback.mp4";

const MediaBlock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.mediaBlock}>
            <div className={styles.mediaContainer}>
                <div className={styles.mediaContent}>
                    <p className={styles.mediaText}>
                        "ECOTEXTILEPLUS" - лидер в области переработки отходов
                        швейной отрасли.
                        <br /> <br />
                        Используя экологически безопасные решения по переработке
                        текстильных отходов, компания производит товары
                        хозяйственного и бытового назначения.
                        <br /> <br />
                        Проект направлен на улучшение экологической ситуации,
                        снижение объема сжигания отходов швейной отрасли,
                        уменьшение воздействия на окружающую среду, обеспечивая
                        будущее без отходов.
                    </p>
                </div>
                <div className={styles.videoWrapper}>
                    <video
                        src={videoBg}
                        loop
                        muted
                        ref={videoRef}
                        className={styles.videoBlock}></video>
                    <p className={styles.heroManifest}>
                        ДОВЕРЯЙТЕ ПЕРЕРАБОТКУ <br /> ПРОФЕССИОНАЛАМ
                    </p>
                </div>
            </div>
            <div />
        </div>
    );
};
export default MediaBlock;
