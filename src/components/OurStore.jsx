function OurStore() {
  return (
    <div className="story py-24 relative h-96 " id="story">
      <div className="overlay z-10"></div>
      <div className="z-20 absolute w-full">
        <div className="title text-center ">
          <h2 className="font-ubuntu font-bold md:text-4xl text-2xl mb-6 capitalize">
            our story
          </h2>
          <p className="font-ubuntu text-sm md:text-xl md:max-w-3xl mx-auto">
            Nestled in the heart of the city, our café is a sanctuary where
            community and flavor come together. We pride ousrelves on serving
            expertly brewed coffee, artisanal pastries, and a warm, inviting
            atmosphere. It's a place where convesrations flow as freely as the
            coffee, and every visit feels like a comforting escape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
