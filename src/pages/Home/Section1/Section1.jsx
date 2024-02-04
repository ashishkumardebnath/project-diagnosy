import img from "../../../assets/section1/63b3b6ec5bacadc6653b0c56_about-image.webp";
const Section1 = () => {
  return (
    <div className="px-20 pb-28">
      <div data-aos="fade-up">
        <h1 className="text-xl text-center">WELCOME TO DIAGONSY</h1>
        <h4 className="text-4xl font-semibold text-center mt-5 mb-16">
          Consult with our best Doctor <br /> for proper Treatment
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-16 ">
        <div data-aos="zoom-in">
          <img src={img} alt="" />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Book an Appointment is very easy <br /> and simple way for all
          </h2>
          <p className="text-lg mb-5" data-aos="fade-up">
            Diagnosy always help to provide proper treatment for most of get the{" "}
            proper cure and healty life which is the cooperate focus thing for
            us patient our main proprity services
          </p>
          <p className="text-lg mb-5" data-aos="fade-up">
            Diagnosy always help to provide proper treatment for most of get the
            proper cure and healty life which cooperate
          </p>
          <div className=" flex justify-between">
            <div>
              <p className="text-lg mb-4">Quick Action</p>
              <p className="text-lg ">Easy and Simple</p>
            </div>
            <div className=" ">
              <p className="text-lg mb-4">24/7 Support</p>
              <p className="text-lg">Various Department</p>
            </div>
          </div>
          <button className="btn bg-[#485ca4] text-white font-semibold text-lg mt-6">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
