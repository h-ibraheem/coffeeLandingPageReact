import Buttons from "../Buttons";
import SocialMediaIcons from "../SocialMediaIcons";

function Landing({ introText }) {
  return (
    <section className="landing" style={{ height: "calc(100dvh - 96px)" }}>
      <div className="container  flex flex-col-revesre md:flex-row items-center  mx-auto  md:space-y-0">
        <div className="content absolute top-1/4">
          <div className="text">
            <h2 className="uppercase text-white font-ubuntu font-bold text-l my-7 text-center md:text-left">
              Now you can feel the Energy
            </h2>
            <p className="md:w-3/4 text-4xl mx-2 text-brownLight tracking-wider leading-relaxed font-bold md:text-6xl text-center md:text-left">
              {introText}
            </p>
          </div>
          <Buttons>menu</Buttons>
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
}

export default Landing;
