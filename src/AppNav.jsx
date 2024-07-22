import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useAuth } from "../Context";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Landing2 from "./pages/Landing2";


const AppNav = () => {
    const [loading, setloading] = useState(true)
    const { authenticated, setauthenticated, userEmails, setuserEmails } = useAuth();

    useEffect(() => {
        console.log("Werey: ", authenticated)
    }, [authenticated])


    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing2/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default AppNav;