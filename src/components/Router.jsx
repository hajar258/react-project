import React from "react";
import {
    BrowserRouter,
    useLocation,
    Route,
    Routes,
    Router,
} from "react-router-dom";
import Home from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import ProjectPage from "../screens/ProjectPage";
import MyProject from "../screens/MyProject";
import AllCollaboratoers from "../screens/AllCollaborators";




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignupPage />} />
                <Route path={"/project-view"} element={<ProjectPage />} />
                <Route path={"/my-projects"} element={<MyProject/>} />
                <Route path={"/all-collborators"} element={<AllCollaboratoers/>} />



                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;