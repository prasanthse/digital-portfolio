import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import HeroLayout from "../sections/hero/heroLayout";

const LandingPage = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>

    return(
        <>
            <TopNavigationLayout />

            <HeroLayout />
        </>
    );
}

export default LandingPage;