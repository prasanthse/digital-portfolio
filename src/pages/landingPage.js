import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import HeroLayout from "../sections/hero/heroLayout";
import ConnectWithMeLayout from "../sections/connectWithMe/connectWithMeLayout";

const LandingPage = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>

    return(
        <>
            <TopNavigationLayout />

            <HeroLayout />

            <ConnectWithMeLayout />
        </>
    );
}

export default LandingPage;