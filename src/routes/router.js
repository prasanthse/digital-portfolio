import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/layout";
import LandingPage from "../pages/landingPage";
import NotFound from "../pages/notFound";
import ProjectsPage from "../pages/projects";
import ProjectDetailsPage from "../pages/projectDetails";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="project" element={<ProjectsPage />} />
                <Route path="project/:area/:id" element={<ProjectDetailsPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default Router;