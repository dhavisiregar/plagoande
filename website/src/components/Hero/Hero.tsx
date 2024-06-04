import Image from "../../assets/laptop.png";

const Hero = () => {
  return (
    <div className="relative z-[-1] bg-primary">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-white order-2 sm:order-1">
            <h1 data-aos="fade-up" className="text-7xl font-bold">
              Hello!
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="300" className="text-5xl">
              I'm Dhavi Siregar, a web Developer.
            </h2>
          </div>

          {/* image section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="relative z-30 order-1 sm:order-2"
          >
            <img
              src={Image}
              alt="laptop"
              className="object-cover h-100% w-100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
