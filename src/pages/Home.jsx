import Introduction from "../components/home_components/Introduction";
import Page from "../components/Page";
import { FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home(){
    const { t } = useTranslation("global")
    const homeText = {
        title: t("page.home.title"),
        comment: "",
        icon: <FaHome />
    }
    return(
        <Page info={homeText}>
            <Introduction />
        </Page>
    )
}

export default Home