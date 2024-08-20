import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
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
import BuyData from "./pages/BuyData";
import Electricity from "./pages/Electricity";
import BettingChannels from "./pages/Betting";
import CFAWallet from "./pages/CFAWallet";
import Exchange from "./pages/Exchange";
import DesktopDashboard from "./layouts/DesktopDashboard";

const AppNav = () => {
  const [loading, setloading] = useState(true);
  const { authenticated, setauthenticated, userEmails, setuserEmails } =
    useAuth();

  useEffect(() => {
    console.log("Werey: ", authenticated);
  }, [authenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/home"
          element={
            <DesktopDashboard>
              <Home />
            </DesktopDashboard>
          }
        />
        <Route
          path="/wallet"
          element={
            <DesktopDashboard>
              <Wallet />
            </DesktopDashboard>
          }
        />{" "}
        <Route
          path="/transactions"
          element={
            <DesktopDashboard>
              <Transactions />
            </DesktopDashboard>
          }
        />
        <Route
          path="/paybills"
          element={
            <DesktopDashboard>
              <PayBills />
            </DesktopDashboard>
          }
        />
        <Route
          path="/sellcards"
          element={
            <DesktopDashboard>
              <SellGiftCards />
            </DesktopDashboard>
          }
        />
        <Route
          path="/tvbills"
          element={
            <DesktopDashboard>
              <TvBills />
            </DesktopDashboard>
          }
        />
        <Route
          path="/buydata"
          element={
            <DesktopDashboard>
              <BuyData />
            </DesktopDashboard>
          }
        />
        <Route
          path="/electricity"
          element={
            <DesktopDashboard>
              <Electricity />
            </DesktopDashboard>
          }
        />
        <Route
          path="/betting"
          element={
            <DesktopDashboard>
              <BettingChannels />
            </DesktopDashboard>
          }
        />
        <Route
          path="/cfawallet"
          element={
            <DesktopDashboard>
              <CFAWallet />
            </DesktopDashboard>
          }
        />
        <Route
          path="/exchange"
          element={
            <DesktopDashboard>
              <Exchange />
            </DesktopDashboard>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppNav;
