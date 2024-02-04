const SimpleDiv = () => {
  return (
    <div className=" animate-updown flex justify-between mx-20 my-28 bg-sky-100 p-14 rounded-2xl shadow-lg">
      <div data-aos="fade-up">
        <h5 className="text-5xl text-[#485ca4] font-semibold">8566+</h5>
        <p className="font-semibold">Happy Patients</p>
      </div>

      <div data-aos="fade-up">
        <h5 className="text-5xl text-[#485ca4] font-semibold">135+</h5>
        <p className="font-semibold">Expert Doctors</p>
      </div>
      <div data-aos="fade-up">
        <h5 className="text-5xl text-[#485ca4] font-semibold">4.9</h5>
        <p className="font-semibold">Average Rating</p>
      </div>
      <div data-aos="fade-up">
        <h5 className="text-5xl text-[#485ca4] font-semibold">120+</h5>
        <p className="font-semibold">Award Winning</p>
      </div>
    </div>
  );
};

export default SimpleDiv;
