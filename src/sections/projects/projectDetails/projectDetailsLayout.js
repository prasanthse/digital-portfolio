import { useCallback, useEffect, useRef } from "react";
import content from '../../../data/profile.json';
import ProjectDetails from "./projectDetails";
import ErrorView from "../../../components/errorView";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProjectDetailsLayout = ({area, projectID}) => {
    const {t} = useTranslation();

    const projectDetails = useRef(null);

    const getProjectDetails = useCallback(() => {
        let project = null;

        for(let i = 0; i < content.projects.length; i++){
            if(content.projects[i].area === area){
                const index = projectID - 1;

                if(index < content.projects[i].list.length){
                    project = content.projects[i].list[index];
                }
                
                break;
            }
        }

        return project;
    }, [area, projectID]);

    useEffect(() => {
        projectDetails.current = getProjectDetails();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            {
                projectDetails.current
                ?
                <ProjectDetails project={projectDetails.current} />
                :
                <ErrorView 
                    icon={`${process.env.PUBLIC_URL}/images/utils/item-not-found.png`}
                    errorTitle={t(`errors.project_not_found.title`)}
                    errorDescription={t(`errors.project_not_found.description`)}
                    actionTxt={t(`errors.project_not_found.action`)}
                    action={() => navigate('/project')}
                />
            }
        </>
    );
}

export default ProjectDetailsLayout;