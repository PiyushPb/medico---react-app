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
    <div className="max-w-[1170px] mt-5">
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading &&
      !error &&
      Array.isArray(appointments?.bookings) &&
      appointments.bookings.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.bookings.map((booking) => {
            // Find the corresponding doctor in the doctors array
            const doctorInfo = appointments.doctors.find(
              (doctor) => doctor.name === booking.doctor.name
            );

            return <DoctorCard key={booking._id} doctor={doctorInfo} />;
          })}
        </div>
      ) : (
        <div>No appointments found.</div>
      )}
    </div>
  );
};

export default MyBookings;
