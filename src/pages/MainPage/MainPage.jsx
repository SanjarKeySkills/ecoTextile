import React from "react";
import HeroBlock from "../../components/widgets/HeroBlock/HeroBlock.jsx";
import MediaBlock from "../../components/widgets/MediaBlock/MediaBlock.jsx";
// import WelcomeBlock from "../../components/widgets/WelcomeBlock/WelcomeBlock.jsx";
// import InfotableBlock from "../../components/widgets/InfotableBlock/InfotableBlock.jsx";
// import PartnersBlock from "../../components/widgets/PartnersBlock/PartnersBlock.jsx";

const MainPage = () => {
    return (
        <div>
            <HeroBlock />
            <MediaBlock />
            {/* <WelcomeBlock />
            <InfotableBlock />
            <PartnersBlock /> */}
        </div>
    );
};

export default MainPage;
