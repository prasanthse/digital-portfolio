import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ProjectDetailsLayout from "../sections/projects/projectDetails/projectDetailsLayout";
import SpeedScroll from "../components/speedScroll";

const ProjectDetailsPage = () => {
    <Helmet>
        <title>Project Details</title>
    </Helmet>

    let { area, id } = useParams();

    return (
        <>
            <ProjectDetailsLayout area={area} projectID={id}/>

            <SpeedScroll />
        </>
    );
}

export default ProjectDetailsPage;