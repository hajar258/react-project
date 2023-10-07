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




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/LogIn"} element={<LoginPage />} />
                <Route path={"/SignUp"} element={<SignupPage />} />

                <Route path={"/ListOfCourses"} element={<ListOfCourses />} />
                <Route path={"/MyCourses"} element={<MyCourses />} />
                <Route path={"/SeeMore"} element={<SeeMore />} />
                <Route path={"/AboutUs"} element={<AboutUs />} />
                <Route path={"/UpdateCourse"} element={<UpdateCourse />} />
                <Route path={"/CreateCourse"} element={<CreateCourse />} />
                <Route path={"/AddIns"} element={<AddIns />} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;