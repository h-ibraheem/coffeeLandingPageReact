import Hero from "../components/HeroSection/Hero";
import Categories from "../components/Categories";
import IconBar from "../components/IconBar";
import OurStore from "../components/OurStore";
import SpecialItems from "../components/SpecialItems";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div className="bg-neutral-100 text-mainBrown">
      <Hero />
      <IconBar />
      <OurStore />
      <SpecialItems />
      <Categories />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
