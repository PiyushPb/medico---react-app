import { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import { BiMenu } from "react-icons/bi";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile Information
        </button>

        <div className="mt-[100px] w-full">
          <button
            className="w-full py-4 text-white bg-primaryColor rounded-md text-[16px]"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="w-full py-4 mt-4 text-white bg-red-600 rounded-md text-[16px] leading-7">
            Delete account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
