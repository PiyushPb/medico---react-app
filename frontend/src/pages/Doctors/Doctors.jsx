import { useState, useEffect } from "react";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/doctors");
        const data = await response.json();

        if (data.success) {
          setAllDoctors(data.data);
          setFilteredDoctors(data.data);
        } else {
          console.error("Error fetching doctors:", data.message);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSearchInputChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    // Automatically reset search results if the search term is empty
    if (newSearchTerm === "") {
      setFilteredDoctors(allDoctors);
    } else {
      // Otherwise, filter doctors based on the search term
      const filtered = allDoctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(newSearchTerm)
      );
      setFilteredDoctors(filtered);
    }
  };

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Our Qualified Doctors</h2>
          <div className="max-w-[570px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
