import img from "../../../assets/banner/doctor.png";
import img1 from "../../../assets/banner/download (1).webp";
import img2 from "../../../assets/banner/download.webp";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bg-sky-100 h-[580px] mb-28 px-20">
      <div className="flex justify-between">
        <div className="flex justify-center items-center" data-aos="fade-right">
          <div>
            <h2 className="text-xl  ">FOR BETTER HEALTHCARE</h2>
            <h6 className="text-6xl font-semibold mt-6 mb-5">
              Quality Healthcare <br /> Solution for all
            </h6>
            <p className="text-lg  ">
              Diagnosy always help to provide proper treatment for all of get
              the <br />
              proper cure and healty life which is the most focus thing for us
            </p>
            <button className="btn bg-[#485ca4] text-white font-semibold text-lg mt-6">
              Our Service
            </button>
            <div className="flex gap-28 mt-8">
              <div className="flex gap-3 text-center">
                <img className="w-14 h-14" src={img1} alt="" />
                <div className="text-start">
                  <h2 className="text-2xl font-semibold">265k+</h2>
                  <p className="text-lg">Recovered Patients</p>
                </div>
              </div>
              <div className="flex gap-3 text-center">
                <img className="w-14 h-14" src={img2} alt="" />
                <div className="text-start">
                  <h2 className="text-2xl font-semibold">265k</h2>
                  <p className="text-lg">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <img className="mt-9" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
