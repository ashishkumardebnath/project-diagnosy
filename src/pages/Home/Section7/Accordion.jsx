import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 ">
      <div
        className="bg-sky-100  cursor-pointer rounded-t-lg  p-6 w-[570px]"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="transform transition-transform">
            {isOpen ? "▼" : "▶"}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="bg-sky-100 rounded-b-lg p-6 w-[570px] ">
          <p className="text-lg">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
