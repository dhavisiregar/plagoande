import Hero from "../../assets/foto-removebg-preview2-fotor-20240603142636.png";

const Profile = () => {
  return (
    <div className="bg-white p-5 grid grid-cols-3 gap-10 text-black ">
      <div className="text-center col-span-3">
        <h1
          data-aos="fade-up"
          className="py-8 tracking-wider text-7xl font-bold text-center"
        >
          Profile
        </h1>
      </div>

      {/* about me section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="grid grid-cols-1 px-3 m-auto gap-5 "
      >
        <div>
          <h2 className="font-bold text-5xl">About Me</h2>
        </div>
        <div>
          <p className="text-xl text-justify">
            A persistent fresh graduate who easily adapts to a new situation.
            Willing to seek experience for an opportunity to work and learn. I
            am seeking a trainee role with the aim of becoming a software
            engineer. I enjoyed working with teammates or individually to
            achieve targets. And I'm a hardworking, fresh graduate seeking
            employment. I am committed to utilizing my skills to further the
            mission of a company.
          </p>
        </div>
      </div>

      {/* image section  */}
      <div data-aos="zoom-in" data-aos-delay="500" className=" w-fit m-auto">
        <img
          src={Hero}
          alt="foto"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>

      {/* details section */}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="grid grid-cols-1 m-auto gap-5 text-left"
      >
        <div>
          <h1 className="font-bold text-5xl">Details</h1>
        </div>
        <div>
          <p className="text-xl text-left">
            <span className="font-bold">Name: </span>
            <br />
            Dhavi Siregar <br />
            <span className="font-bold">Age: </span>
            <br />
            22 years old <br />
            <span className="font-bold">Address: </span>
            <br />
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
