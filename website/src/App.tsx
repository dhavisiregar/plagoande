import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
