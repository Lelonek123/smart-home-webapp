import React from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper.js";
import ModalWindow from "../../components/ModalWindow/ModalWindow.js";
import { useNavigate } from "react-router-dom";

//main app page component
const isAuth = false;

function AppPage(props) {
    let navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <ContentWrapper>Content</ContentWrapper>
        </div>
    );
}

export default AppPage;
