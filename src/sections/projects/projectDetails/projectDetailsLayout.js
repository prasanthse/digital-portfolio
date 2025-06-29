import { useCallback, useEffect, useRef, useState } from "react";
import content from '../../../data/profile.json';
import ProjectDetails from "./projectDetails";
import ErrorView from "../../../components/errorView";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ProjectsDetailsHero from "./projectDetailsHero";

const ProjectDetailsLayout = ({area, projectID}) => {
    const {t} = useTranslation();

    const [projectDetails, setProjectDetails] = useState({
        loading: true,
        project: null
    });

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
        setProjectDetails({
            loading: false,
            project: getProjectDetails()
        });
    }, []);

    const navigate = useNavigate();

    let body;

    if(projectDetails.loading){
        body = <></>
    }
    else if(!projectDetails.project) {
        body = <ErrorView 
            icon={`${process.env.PUBLIC_URL}/images/utils/item-not-found.png`}
            errorTitle={t(`errors.project_not_found.title`)}
            errorDescription={t(`errors.project_not_found.description`)}
            actionTxt={t(`errors.project_not_found.action`)}
            action={() => navigate('/project')}
        />
    }
    else{
        body = <>
            <ProjectsDetailsHero 
                title={projectDetails.project.title}
                area={area}
                tagLine={projectDetails.project.tag_line}
            />

            <ProjectDetails project={projectDetails.project} />
        </>
    }

    return (
        <>
            {body}
        </>
    );
}

export default ProjectDetailsLayout;