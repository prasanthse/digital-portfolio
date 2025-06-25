import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import HeroLayout from "../sections/hero/heroLayout";
import ConnectWithMeLayout from "../sections/connectWithMe/connectWithMeLayout";
import AboutMeLayout from "../sections/aboutMe/aboutMeLayout";
import AcademicLayout from "../sections/academic/academicLayout";
import ExpertiseLayout from "../sections/expertise/expertiseLayout";
import WorkExperienceLayout from "../sections/workExperience/workExperienceLayout";
import LatestProjectsLayout from "../sections/projects/latestProjectsLayout";
import SoftSkillsNLanguagesLayout from "../sections/softSkillsNLanguages/softSkillsNLanguagesLayout";
import ReviewsNPublicationsLayout from "../sections/reviewsNPublications/reviewsNPublicationsLayout";
import TheEnd from "../sections/theEnd/theEndLayout";

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

            <ExpertiseLayout />

            <WorkExperienceLayout />

            <LatestProjectsLayout />

            <SoftSkillsNLanguagesLayout />

            <ReviewsNPublicationsLayout />

            <TheEnd />
        </>
    );
}

export default LandingPage;