import { Link } from "react-router-dom";
import img1 from "../../../assets/section6//img1.jpg";
import img2 from "../../../assets/section6//img2.jpg";
import small1 from "../../../assets/section6/small1.png";
import small2 from "../../../assets/section6/small2.png";
import calender from "../../../assets/section6/calender.png";
const Section6 = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-20 mb-28" data-aos="fade-up">
      <div className="mt-14">
        <h2 className="text-lg ">OUR BLOG</h2>
        <h5 className="text-4xl font-semibold my-5">
          Latest Post <br /> from our Blog
        </h5>
        <p className="text-lg mb-5">
          Diagnosy always help to provide proper treatment for most of get the
          proper cure and healty life which is the cooperate are focus thing for
          us patient proprity
        </p>
        <Link className="underline text-xl">View all</Link>
      </div>
      <div className="shadow-xl rounded-xl">
        <img
          className="transition duration-300 ease-in-out hover:scale-110"
          src={img1}
          alt=""
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-3">
            How to take care about your Child health and protect thems
          </h1>
          <p className="text-lg mb-3">
            Diagnosy always tries to provide the most common of getting the
            proper issuer...
          </p>
          <hr />
          <div className="flex justify-between mt-2">
            <div className="flex gap-2">
              <img className="w-6 rounded-full" src={small1} alt="" />
              <p>Ethan Williams</p>
            </div>
            <div className="flex gap-2">
              <img className="w-6" src={calender} alt="" />
              <p>Jan 26, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-xl">
        <img
          className="transition duration-300 ease-in-out hover:scale-110"
          src={img2}
          alt=""
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-3">
            How to take care about your Child health and protect thems
          </h1>
          <p className="text-lg mb-3">
            Diagnosy always tries to provide the most common of getting the
            proper issuer...
          </p>
          <hr />
          <div className="flex justify-between mt-2">
            <div className="flex gap-2">
              <img className="w-6 rounded-full" src={small2} alt="" />
              <p>Alester Clark</p>
            </div>
            <div className="flex gap-2">
              <img className="w-6" src={calender} alt="" />
              <p>Jan 26, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
