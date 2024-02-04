import { useEffect, useState } from "react";
import plane from "../../assets/icon/airplane-engines.svg";
import "./BackTotop.css";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down, hide it otherwise
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 130);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button animate-updown ${
        isVisible ? "visible" : ""
      }`}
      onClick={scrollToTop}
    >
      <img className=" text-white btn_ripple" src={plane} alt="" />
    </div>
  );
};

export default BackToTop;
