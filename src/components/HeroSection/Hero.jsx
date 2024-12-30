import Header from "./Header";
import Landing from "./Landing";

function Hero() {
  return (
    <div className="bg-neutral-100 text-mainBrown relative">
      <div className="absolute w-full">
        <Header />
      </div>
      <Landing introText="Start your day with a black Coffee" />
    </div>
  );
}

export default Hero;
