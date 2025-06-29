import { Helmet } from "react-helmet";
import TopNavigationLayout from "../sections/topNavigation/topNavigationLayout";
import ProjectsHero from "../sections/projects/allProjects/projectsHero";
import AllProjectsTabs from "../sections/projects/allProjects/allProjectsTabs";
import FooterLayout from "../sections/footer/footerLayout";
import SpeedScroll from "../components/speedScroll";

const ProjectsPage = () => {
    <Helmet>
        <title>Projects</title>
    </Helmet>

    return (
        <>
            <TopNavigationLayout />

            <ProjectsHero />

            <AllProjectsTabs />

            <FooterLayout />

            <SpeedScroll />
        </>
    );
}

export default ProjectsPage;