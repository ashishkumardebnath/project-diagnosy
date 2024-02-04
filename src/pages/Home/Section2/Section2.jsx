import { Link } from "react-router-dom";
import img1 from "../../../assets/section2/63b3c8f019c92c261b4ddb1c_service-section.webp";
import { useEffect, useState } from "react";
const Section2 = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("section2.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="px-20">
      <div data-aos="fade-up">
        <h1 className="text-xl font-semibold">OUR SERVICES</h1>
        <h4 className="text-4xl font-semibold mb-5">
          Different types of Department <br /> we have for your healthcare
        </h4>
        <Link className=" text-lg border-0 underline">View all</Link>
      </div>
      <div className="grid grid-cols-2 ">
        <div data-aos="zoom-in">
          <img src={img1} alt="" />
        </div>
        <div className=" grid grid-cols-2 gap-8 mt-24">
          {cards.map((card) => (
            <div key={card.id}>
              <div
                className="bg-white w-72 h-56 p-5 rounded-2xl shadow-xl hover:bg-[#485ca4] hover:text-white"
                data-aos="flip-right"
              >
                <div className="flex justify-between mb-4">
                  <div className="bg-sky-100 p-3 rounded-2xl flex justify-center items-center">
                    <img className="w-8" src={card.image} alt="" />
                  </div>
                  <div>
                    <img src={card.icon} alt="" />
                  </div>
                </div>
                <h1 className="text-xl font-bold mb-2">{card.title}</h1>
                <p className="">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
