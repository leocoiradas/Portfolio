import Introduction from "../components/Introduction";
import Page from "../components/Page";
import { FaHome } from "react-icons/fa";

function Home(){
    const homeText = {
        title: "Home",
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