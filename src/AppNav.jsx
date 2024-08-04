import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing'
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useAuth } from "../Context";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Landing2 from "./pages/Landing2";
import NotFound from "./pages/NotFound";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import PayBills from "./pages/PayBills";
import SellGiftCards from "./pages/SellGiftCards";
import TvBills from "./pages/TvBills";
import BuyData from "./pages/BuyData"
import Electricity from "./pages/Electricity";
import BettingChannels from "./pages/Betting";
import CFAWallet from "./pages/CFAWallet";
import Exchange from "./pages/Exchange";

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
                <Route path="/wallet" element={<Wallet/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
                <Route path="/paybills" element={<PayBills/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/sellcards" element={<SellGiftCards/>}/>
                <Route path="/tvbills" element={<TvBills/>}/>
                <Route path="/buydata" element={<BuyData/>}/>
                <Route path="/electricity" element={<Electricity/>}/>
                <Route path="/betting" element={<BettingChannels/>}/>
                <Route path="/cfawallet" element={<CFAWallet/>}/>
                <Route path="/exchange" element={<Exchange/>}/>
            </Routes>
        </Router>
    );
}

export default AppNav;