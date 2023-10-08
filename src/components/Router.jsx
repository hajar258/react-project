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
import { ProfilePage } from "../screens/ProfilePage";




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignupPage />} />
                <Route path={"/project-view/:id"} element={<ProjectPage />} />
                <Route path={"/profile-view/:id"} element={<ProfilePage />} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;