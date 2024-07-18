import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useAuth } from "../Context";


const AppNav = () => {
    const [loading, setloading] = useState(true)
    const { authenticated, setauthenticated, userEmails, setuserEmails } = useAuth();

    useEffect(() => {
        console.log("Werey: ", authenticated)
    }, [authenticated])


    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default AppNav;