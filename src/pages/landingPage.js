import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import HeroLayout from "../sections/hero/heroLayout";
import ConnectWithMeLayout from "../sections/connectWithMe/connectWithMeLayout";
import AboutMeLayout from "../sections/aboutMe/aboutMeLayout";
import AcademicLayout from "../sections/academic/academicLayout";

const LandingPage = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>

    return(
        <>
            <TopNavigationLayout />

            <HeroLayout />

            <ConnectWithMeLayout />

            <AboutMeLayout />

            <AcademicLayout />
        </>
    );
}

export default LandingPage;