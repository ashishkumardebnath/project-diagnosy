import img1 from "../../../assets/section3/download.webp";
import img2 from "../../../assets/section3/download (1).webp";
import img3 from "../../../assets/section3/download (2).webp";
import img4 from "../../../assets/section3/63b55ce43a6a5b519fd93f1e_Choose-thumbnail.webp";
const Section3 = () => {
  return (
    <div className="px-20 mb-28">
      <div data-aos="fade-up">
        <h1 className="text-xl text-center font-semibold">WHY CHOOSE US</h1>
        <h4 className="text-4xl text-center font-semibold mb-5 mt-5">
          Complete Healthcare Solution <br /> for our valuable Patients
        </h4>
      </div>
      <div className="flex justify-between mt-16">
        <div>
          <div className="flex items-center gap-5" data-aos="fade-up">
            <img
              className="bg-sky-100 p-6 rounded-2xl h-24 w-24"
              src={img1}
              alt=""
            />
            <div>
              <h2 className="text-2xl font-semibold">Modern Instrument</h2>
              <p>
                Diagnosy always try to provide the most common <br /> of get the
                proper issuer for cure Healthcare
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 my-16" data-aos="fade-up">
            <img
              className="bg-sky-100 p-6 rounded-2xl h-24 w-24"
              src={img2}
              alt=""
            />
            <div>
              <h2 className="text-2xl font-semibold">Easy Billing System</h2>
              <p>
                Diagnosy always try to provide the Billing system <br /> of get
                the proper very simple and easy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5" data-aos="fade-up">
            <img
              className="bg-sky-100 p-6 rounded-2xl h-24 w-24"
              src={img3}
              alt=""
            />
            <div>
              <h2 className="text-2xl font-semibold">
                Qualified Nurses & Staff
              </h2>
              <p>
                Diagnosy always try to provide qualified Nurses & <br /> Stuff
                are get the proper cure Healthcare
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
