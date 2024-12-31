import img from "/src/assets/img/bg-coffee beans.png";
import img_1 from "/src/assets/img/bg-coffee beans.png";
import Buttons from "./Buttons";

function Categories() {
  return (
    <section className="category  relative" id="menu">
      <div className="image absolute opacity-70 w-full h-full">
        <img src={img} className="absolute left-0 bottom-0" alt="" />
        <img
          src={img_1}
          className="absolute right-0 bottom-0 transform scale-x-[-1]"
          alt=""
        />
      </div>
      <div className="container py-24 mx-auto">
        <div className="title text-center">
          <h2 className="font-ubuntu font-bold md:text-4xl text-2xl mb-6 w-3/4 text-center mx-auto capitalize">
            What kind of Coffee we serve for you
          </h2>
          <p className="font-ubuntu">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="boxes grid md:grid-cols-3 md:mt-20 mt-10 ">
          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                espresso
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                hot coffee
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                cold coffee
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                hot drinks
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                cold drinks
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                traditional tea & coffee
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                desserts
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                bakery
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>

          <div className="box p-7 m-4 shadow-xl shadow-brownLight/25 rounded-2xl">
            <div className="title flex justify-between items-center py-4">
              <h2 className="font-ubuntu capitalize font-bold text-lg ">
                breakfast
              </h2>
            </div>
            <p className="capitalize font-normal text-sm font-ubuntu leading-relaxed text-brownLight/90">
              Usage of the Internet is becoming more common due to rapid
              advance.
            </p>
          </div>
        </div>

        <Buttons>menu</Buttons>
      </div>
    </section>
  );
}

export default Categories;
