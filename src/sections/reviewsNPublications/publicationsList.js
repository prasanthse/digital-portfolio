import { List } from "@mui/material";
import content from '../../data/profile.json';
import PublicationCard from "./publicationCard";
import TitleComponent from '../../components/titleComponent';
import { useTranslation } from "react-i18next";

const PublicationsList = () => {
    const {t} = useTranslation();

    return (
        <>
            {/* Title */}
            <TitleComponent 
                title={t('publications')}
                pb={4}
                textAlign="left"
                richText={false}
                pt={2}
            />
            
            <List
                className="hideScrollBar"
                sx={{
                    width: '100%',
                    position: 'relative',
                    overflow: 'auto',
                    height: 250,
                    '& ul': { padding: 0 }
                }}
                subheader={<li />}
            >
                {
                    content.publications.map((item, index) => (
                        <li key={index}>
                            <ul>
                                <PublicationCard item={item}/>
                            </ul>
                        </li>
                    ))
                }
            </List>
        </>
    );
}

export default PublicationsList;