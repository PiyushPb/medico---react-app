import { useContext, useState } from "react";
import { authContext } from "../../context/authContext";

import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../loader/Loading";
import Error from "../../error/Error";
import Tabs from "./Tabs";

import starIcon from "../../assets/images/Star.png";
import DoctorsAbout from "./DoctorsAbout";
import Profile from "./Profile";
import Appoitments from "../../pages/Doctors/Appoitments";

const Dashboard = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("overview");

  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-5">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10 w-full">
                      <figure className="max-w-[200px] max-h-[200px]:">
                        <img src={data?.photo} alt="" className="w-full" />
                      </figure>

                      <div>
                        <span className="bg-[#CCF0F3] text-irisBlueColor px-4 py-3 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold rounded">
                          {data?.specialty}
                        </span>

                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                          {data?.name}
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon} alt="" />
                            {data?.averageRating}
                          </span>
                          <span className=" text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            ({data?.totalRating})
                          </span>
                        </div>
                        <p className="text__para font-[15px] lg:max-w-[490px] leading-6">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
                    <DoctorsAbout data={data} />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appoitments appointments={data?.appointments} />
                )}
                {tab === "settings" && <Profile doctorData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
