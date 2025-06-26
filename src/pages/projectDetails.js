import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import content from '../data/profile.json';

const ProjectDetailsPage = () => {
    <Helmet>
        <title>Project Details</title>
    </Helmet>

    let { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if(id <= 0 || id > content.projects.length){
            navigate('/not-found');
        }
    }, [id]);

    return (
        <>
        
        </>
    );
}

export default ProjectDetailsPage;