import Base from "./Base";
import Documentation from "./Documentation";
import Footer from "./Footer";
import Hero from "./Hero";
import Info from "./Info";
import Navbar from "./Navbar";
import ScrollBar from "./ScrollBar";

const Homepage = () => {
  return (
    <>
      <main className="h-[881px] w-full bg-gradient-to-b from-[#dbf0ff] to-white dark:h-full dark:bg-gradient-to-b dark:from-[#2a3d5f] dark:to-[#253146]">
        <ScrollBar />
        <Navbar />
        <Hero />
        <Info />
        <Documentation />
        <Base />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
