import { useNavigate } from "react-router-dom";

const DesktopIcons = ({ icons, text, style1, style2, redirect }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`mt-3 border-2 ${style1} rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out`}
      onClick={() => navigate(redirect)}
    >
      {/* Cards div */}
      <div className="flex flex-col lg:flex-row lg:text-nowrap lg:py-4 lg:text-center lg:items-center lg:justify-center lg:gap-3 items-left lg:space-y-0 space-y-3 p-5 lg:px-8">
        <div
          className={`w-[50px] h-[50px] lg:w-[45px] lg:h-[45px] bg-blue-600 rounded-full p-1 flex items-center justify-center ${style2}`}
        >
          {icons}
        </div>
        <div>
          <p
            style={{ fontFamily: "Ubuntu" }}
            className="text-sm text-gray-600 lg:m-0 lg:p-0 lg:font-semibold"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopIcons;
