import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import HeroLayout from "../sections/hero/heroLayout";
import ConnectWithMeLayout from "../sections/connectWithMe/connectWithMeLayout";
import AboutMeLayout from "../sections/aboutMe/aboutMeLayout";
import AcademicLayout from "../sections/academic/academicLayout";
import ExpertiseLayout from "../sections/expertise/expertiseLayout";
import WorkExperienceLayout from "../sections/workExperience/workExperienceLayout";
import FeaturedProjectsLayout from "../sections/projects/featuredProjects/featuredProjectsLayout";
import SoftSkillsNLanguagesLayout from "../sections/softSkillsNLanguages/softSkillsNLanguagesLayout";
import ReviewsNPublicationsLayout from "../sections/reviewsNPublications/reviewsNPublicationsLayout";
import TheEnd from "../sections/theEnd/theEndLayout";
import FooterLayout from "../sections/footer/footerLayout";
import content from '../data/profile.json';
import { getFeaturedProjects } from "../utils/utils";
import SpeedScroll from "../components/speedScroll";

const LandingPage = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>

    return(
        <>
            <TopNavigationLayout />

            <HeroLayout />

            {
                content.connect_me.length > 0
                ?
                <ConnectWithMeLayout />
                :
                <></>
            }

            <AboutMeLayout />

            {
                content.academic.length > 0
                ?
                <AcademicLayout />
                :
                <></>
            }

            {
                content.expertise.length > 0
                ?
                <ExpertiseLayout />
                :
                <></>
            }
            
            {
                content.work_experience.length > 0
                ?
                <WorkExperienceLayout />
                :
                <></>
            }

            {
                getFeaturedProjects(content.projects).length > 0
                ?
                <FeaturedProjectsLayout />
                :
                <></>
            }

            {
                content.languages.length > 0 || content.soft_skills.list.length > 0
                ?
                <SoftSkillsNLanguagesLayout />
                :
                <></>
            }

            {
                content.reviews.length > 0 || content.publications.length > 0
                ?
                <ReviewsNPublicationsLayout />
                :
                <></>
            }

            <TheEnd />

            <FooterLayout />

            <SpeedScroll />
        </>
    );
}

export default LandingPage;