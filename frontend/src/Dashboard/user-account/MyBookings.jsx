import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../loader/Loading";
import Error from "../../error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading &&
      !error &&
      Array.isArray(appointments) &&
      appointments.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div>No appointments found.</div>
      )}
    </div>
  );
};

export default MyBookings;
