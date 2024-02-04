import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="mx-20 mb-28">
      <div data-aos="fade-up">
        <h1 className="text-xl font-semibold">OUR DOCTOR</h1>
        <div className="flex justify-between mt-4">
          <h4 className="text-4xl font-semibold mb-5">
            Meet our high quality <br /> & expert Doctors
          </h4>
          <Link className=" text-lg border-0 underline mt-12">View all</Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <div className="shadow-xl rounded-xl" data-aos="fade-up">
              <img
                className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src={doctor.img}
                alt=""
              />
              <div className="p-3">
                <h1 className="text-xl font-semibold">{doctor.name}</h1>
                <div className="flex justify-between my-2">
                  <p className=" text-lg text-gray-600">{doctor.title}</p>
                  <div className="flex items-center gap-2 ">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#485ca4]"
                      />
                    </div>
                    <p className="text-[#485ca4] font-medium">
                      {doctor.rating}
                      <span> / 5.0</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between mt-2 text-gray-600 ">
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
