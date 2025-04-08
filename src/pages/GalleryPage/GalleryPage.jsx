import React from "react";
import styles from "./galleryPage.module.scss";
import GalleryBlock from "../../components/widgets/GalleryBlock/GalleryBlock";
import GalleryData from "../../components/widgets/GalleryBlock/Gallery";

const GalleryPage = () => {
    return (
        <div className={styles.galleryPage}>
            <div className={styles.galleryPageWrapper}>
                <GalleryBlock data={GalleryData} />
            </div>
        </div>
    );
};

export default GalleryPage;
