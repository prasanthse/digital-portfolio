import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/layout";
import LandingPage from "../pages/landingPage";
import NotFound from "../pages/notFound";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default Router;