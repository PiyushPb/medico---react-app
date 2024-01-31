import { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import userImg from "../../assets/images/doctor-img01.png";

import MyBookings from "./MyBookings";
import Profile from "./Profile";

import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../loader/Loading";
import Error from "../../error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData, " userdata");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-5">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userImg}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  Piyush pardeshi
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  pixi@gmail.com
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood type:{" "}
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    O-
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[100px]">
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
            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor ${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  }`}
                >
                  My bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Setting
                </button>
              </div>

              {tab === "bookings" ? <MyBookings /> : <Profile />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
