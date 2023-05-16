import React from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper.js";
import ModalWindow from "../../components/ModalWindow/ModalWindow.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase.js";
//main app page component

function AppPage(props) {
    let navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/login");
        }
    }, [user, loading]);

    return (
        <div>
            <ContentWrapper>Content</ContentWrapper>
            <button
                onClick={() => {
                    logout();
                }}
            >
                Log out
            </button>
        </div>
    );
}

export default AppPage;
