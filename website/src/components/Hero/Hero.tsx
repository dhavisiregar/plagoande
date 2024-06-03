const Hero = () => {
  return (
    <div className="relative z-[-1] bg-primary">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-white order-2 sm:order-1">
            <h1 className="text-7xl font-bold">Hello!</h1>
            <h2 className="text-5xl">I'm Dhavi Siregar, a web Developer.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
