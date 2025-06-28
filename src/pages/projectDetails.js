import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ProjectDetailsLayout from "../sections/projects/projectDetails/projectDetailsLayout";

const ProjectDetailsPage = () => {
    <Helmet>
        <title>Project Details</title>
    </Helmet>

    let { area, id } = useParams();

    return (
        <>
            <ProjectDetailsLayout area={area} projectID={id}/>
        </>
    );
}

export default ProjectDetailsPage;