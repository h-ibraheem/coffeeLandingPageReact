import Header from "../components/HeroSection/Header";
import Landing from "../components/HeroSection/Landing";
function PageNotFound() {
  return (
    <div className="bg-neutral-100 text-mainBrown relative">
      <div className="absolute w-full">
        <Header />
      </div>
      <Landing introText="Page Not Found !" />
    </div>
  );
}

export default PageNotFound;
