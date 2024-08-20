import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const DesktopDashboardNav = ({ path, actives, inActive, name }) => {
  const [active, setActive] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname]);
  return (
    <Link
      to={path}
      className={` ml-auto self-end w-11/12 $ justify-between mb-4 ${
        active && "bg-[#1A3A57]"
      }  py-4  h-fit flex px-6 rounded-l-full items-center`}
    >
      {active ? actives : inActive}

      <p className={`text-white p-0 m-0 ${active && "font-semibold "}`}>
        {name}
      </p>
      <FaArrowRight fontSize={25} />
    </Link>
  );
};

export default DesktopDashboardNav;
