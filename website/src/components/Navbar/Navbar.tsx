const Navbar = () => {
  return (
    <div className="bg-white text-black shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* logo section */}
        <div className="font-bold text-3xl ">Logo</div>

        {/* navlinks section */}
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#home"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
