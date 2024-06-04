import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white bg-primary sm:grid-cols-2">
      <div className="grid grid-cols-3 gap-5 grid-rows-2 ">
        {/* header section */}
        <div data-aos="fade-up" className="col-span-3">
          <h1 className="py-10 text-7xl font-bold text-center">Contact Me!</h1>
        </div>

        {/* ig section */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center space-y-4 grid-cols-1"
        >
          <div className="flex justify-center">
            <CiInstagram className="text-5xl" />
          </div>
          <div>
            <a
              href="https://www.instagram.com/dhavisiregar/"
              className="text-xl"
            >
              @dhavisiregar
            </a>
          </div>
        </div>

        {/* email section */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center space-y-4 grid-cols-1 "
        >
          <div className="flex justify-center">
            <MdEmail className="text-5xl " />
          </div>
          <div>
            <p className="text-xl">sultanmuhammaddhavi@gmail.com</p>
          </div>
        </div>

        {/* linkedin section */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-center space-y-4 grid-cols-1"
        >
          <div className="flex justify-center">
            <FaLinkedin className="text-5xl" />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sultan-muhammad-dhavi-5a7125234/"
              className="text-xl"
            >
              Sultan Muhammad Dhavi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
