import Base from "./Base";
import Documentation from "./Documentation";
import Footer from "./Footer";
import Hero from "./Hero";
import Info from "./Info";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Documentation />
      <Base />
      <Footer />
      {/* </main> */}
    </>
  );
};

export default Homepage;
