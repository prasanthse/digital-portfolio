import { Helmet } from "react-helmet";
import ErrorView from "../components/errorView";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    <Helmet>
        <title>Not Found</title>
    </Helmet>

    const {t} = useTranslation();

    const navigate = useNavigate();

    return(
        <>
            <ErrorView 
                icon={`${process.env.PUBLIC_URL}/images/utils/404.png`}
                errorTitle={t(`errors.general.title`)}
                errorDescription={t(`errors.general.description`)}
                actionTxt={t(`errors.general.action`)}
                action={() => navigate('/')}
            />
        </>
    );
}

export default NotFound;