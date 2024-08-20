import DesktopDashboardNav from "../components/DesktopDashboardNav";
import {
  FaHome,
  FaRocket,
  FaBullhorn,
  FaStar,
  FaHeart,
  FaExchangeAlt,
  FaSignOutAlt,
} from "react-icons/fa";
const DesktopDashboard = ({ children }) => {
  return (
    <div className=" flex flex-row w-screen overflow-x-hidden  m-0 p-0 h-full ">
      <nav className="hidden lg:w-[25%]  bg-[#002444] lg:flex  lg:flex-col text-white lg:pt-24 lg:items-center">
        <div className=" flex gap-2 justify-center items-center  mb-12">
          <img src="./mac.png" alt="Logo" width={48} height={48} />
          {/* Replace logo and text with real logo over here */}
          <p className=" text-3xl m-0 p-0" style={{ fontFamily: "Ubuntu" }}>
            {" "}
           Veexchange
          </p>
        </div>
        <div className=" w-full h-fit flex-col justify-center items-center ">
          <DesktopDashboardNav
            name={"Home"}
            path={"/home"}
            actives={
              <FaHome
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaHome
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"Mobile Data"}
            path={"/buydata"}
            actives={
              <FaRocket
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaRocket
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"Electricity"}
            path={"/electricity"}
            actives={
              <FaBullhorn
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaBullhorn
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"Pay Bills"}
            path={"/paybills"}
            actives={
              <FaStar
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaStar
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"Betting"}
            path={"/betting"}
            actives={
              <FaHeart
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaHeart
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"CFA to NGN"}
            path={"/exchange"}
            actives={
              <FaExchangeAlt
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaExchangeAlt
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
          <DesktopDashboardNav
            name={"Logout"}
            path={"/logout"}
            actives={
              <FaSignOutAlt
                style={{ file: "white", stroke: "white" }}
                fontSize={27}
              />
            }
            inActive={
              <FaSignOutAlt
                style={{ fill: "none", stroke: "white", strokeWidth: 40 }}
                fontSize={27}
              />
            }
          />
        </div>
      </nav>
      <div className=" w-screen lg:w-[75%] lg:px-6 lg:mt-6">{children}</div>
    </div>
  );
};

export default DesktopDashboard;
