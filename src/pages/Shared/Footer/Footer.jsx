import logo from "../../../assets/navbar/63b2608659086bfaa081b7cf_logo.png";
import BackToTop from "../../../components/BackToTop/BackTotop";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import img1 from "../../../assets/footer/Facebook_Logo_2023.png";
import img2 from "../../../assets/footer/pngtree-twitter-social-media-round-icon-png-image_6315985.png";
import img3 from "../../../assets/footer/LinkedIn_icon_circle.svg.png";
const Footer = () => {
  return (
    <>
      <BackToTop></BackToTop>
      <footer className="footer p-10 bg-sky-100 text-base-content px-20" data-aos="fade-up">
        <aside>
          <div className="flex">
            <img src={logo} alt="" />
          </div>
          <p className="text-lg mt-5">
            Diagnosy always try to provide the <br /> most common of get the
            proper are <br />
            for cure Healthcare Treatment
          </p>
          <div className="flex gap-3 mt-5">
            <img className="w-8 h-8" src={img1} alt="" />
            <img className="w-8 h-8" src={img2} alt="" />
            <img className="w-8 h-8" src={img3} alt="" />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-xl ">Company</h6>
          <a className="link link-hover ">About Us</a>
          <a className="link link-hover ">Our Services</a>
          <a className="link link-hover ">Doctor</a>
          <a className="link link-hover  ">Blog Post</a>
          <a className="link link-hover ">Our Team</a>
          <a className="link link-hover ">Our Experts</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl ">Information</h6>
          <a className="link link-hover ">Appointment</a>
          <a className="link link-hover ">Oncologist</a>
          <a className="link link-hover ">Cardiologist</a>
          <a className="link link-hover ">Style Guide</a>
          <a className="link link-hover ">Change Log</a>
          <a className="link link-hover ">License</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl ">Contact info</h6>
          <a className="link link-hover ">
            <p>
              256/A, Central Park Avenue,
              <br /> Main Town, New York City
            </p>
          </a>
          <a className="link link-hover ">
            <p>
              Info@examplesite.com <br />
              www.examplesite.com
            </p>
          </a>
          <a className="link link-hover text-lg">
            <p>
              +12345 658 910 <br /> +12345 658 910
            </p>
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-sky-100 text-base-content">
        <aside>
          <p className=" text-lg">
            Copyright © 2024 - All right reserved by{" "}
            <span className="text-[#485ca4]">Ashish Kumar Deb Nath</span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
