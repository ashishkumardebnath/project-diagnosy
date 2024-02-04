import img1 from "../../../assets/Section/img1.png";
import img2 from "../../../assets/Section/img2.png";
import img3 from "../../../assets/Section/img3.png";
const Section = () => {
  return (
    <div
      className=" animate-updown flex justify-between mx-20 my-40"
      data-aos="fade-up"
    >
      <div className="flex items-center">
        <img className="w-20 me-4" src={img1} alt="" />
        <div>
          <h1 className="text-xl font-semibold">Emervency Services</h1>
          <p>24/7 Emergency service</p>
        </div>
      </div>
      <div className="flex items-center">
        <img className="w-20 me-4" src={img2} alt="" />
        <div>
          <h1 className="text-xl font-semibold">Qulified Doctors</h1>
          <p>Best Doctors Collection</p>
        </div>
      </div>
      <div className="flex items-center">
        <img className="w-20 me-4" src={img3} alt="" />
        <div>
          <h1 className="text-xl font-semibold">Get Online Report</h1>
          <p>We mail your Report</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
