function SpecialItems() {
  return (
    <div className="fav pt-24 ">
      <div className="title text-center mx-auto">
        <h2 className="font-ubuntu font-bold md:text-4xl text-2xl mb-6 w-3/4 text-center mx-auto capitalize">
          Special items
        </h2>
        <p className="font-ubuntu text-sm md:text-xl md:w-3/4 mx-auto">
          Nestled in the heart of the city, our café is a sanctuary where
          community and flavor come together. We pride ousrelves on serving
          expertly brewed coffee, artisanal pastries, and a warm, inviting
          atmosphere. It's a place where convesrations flow as freely as the
          coffee, and every visit feels like a comforting escape.
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 pt-16 gap-6 px-5">
        <div className="box bg-brownLight rounded-2xl">
          <img
            src="../src/assets/img/hot-1.jpeg"
            alt="imge"
            className="rounded-2xl flex items-center w-full mx-auto md:max-w-max p-2"
          />
          <h2 className="font-ubuntu text-2xl py-5 text-center uppercase font-bold">
            flat white
          </h2>
          <p className="capitalize text-center text-white w-3/4 flex justify-center items-center mx-auto pb-5 leading-6">
            a coffee drink consisting of espresso and steamed milk
          </p>
        </div>

        <div className="box bg-brownLight rounded-2xl">
          <img
            src="../src/assets/img/hot-3.jpg"
            alt="imge"
            className="rounded-2xl flex items-center w-full mx-auto md:max-w-max p-2"
          />
          <h2 className="font-ubuntu text-2xl py-5 text-center uppercase font-bold">
            Cortado
          </h2>
          <p className="capitalize text-center text-white w-3/4 flex justify-center items-center mx-auto pb-5 leading-6">
            a Spanish beverage consisting of espresso mixed with a roughly equal
            amount of warm milk to reduce the acidity,
          </p>
        </div>
        <div className="box bg-brownLight rounded-2xl">
          <img
            src="../src/assets/img/hot-2.jpg"
            alt="imge"
            className="rounded-2xl flex items-center w-full mx-auto md:max-w-max p-2"
          />
          <h2 className="font-ubuntu text-2xl py-5 text-center uppercase font-bold">
            Turkish coffee
          </h2>
          <p className="capitalize text-center text-white w-3/4 flex justify-center items-center mx-auto pb-5 leading-6">
            a style of coffee prepared in a cezve using very finely ground
            coffee beans without filtering
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialItems;
