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
import ProfilePage from "../screens/ProfilePage";
import ProjectPage from "../screens/ProjectPage";




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/LogIn"} element={<LoginPage />} />
                <Route path={"/SignUp"} element={<SignupPage />} />
                <Route path={"/project/:id"} element={<ProjectPage />} />
                <Route path={"/Profile/:id"} element={<ProfilePage />} />

                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;