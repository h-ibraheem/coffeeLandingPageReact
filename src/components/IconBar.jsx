import hotCaffee from "../assets/img/hot-coffee-cup-svgrepo-com.svg";
import coffeeToGo from "../assets/img/coffe-to-go-svgrepo-com.svg";
import coffeePot from "../assets/img/coffee-pot-svgrepo-com.svg";
import dessert from "../assets/img/dessert-svgrepo-com.svg";

function IconBar() {
  return (
    <section className="h-24 bg-brownLight/35 p-6 text-mainBrown/75">
      <div className="container mx-auto text-center flex items-center justify-center md:space-x-20  space-x-9">
        <div className="box ">
          <img src={hotCaffee} className="w-10 " />
          <p className="font-ubuntu font-semibold capitalize text-xs mt-2">
            hot
          </p>
        </div>
        <div className="box">
          <img src={coffeeToGo} className="w-10 " />
          <p className="font-ubuntu font-semibold capitalize text-xs mt-2">
            cold
          </p>
        </div>
        <div className="box">
          <img src={coffeePot} className="w-10 " />
          <p className="font-ubuntu font-semibold capitalize text-xs mt-2 ">
            drip
          </p>
        </div>
        <div className="box">
          <img src={dessert} className="w-10" alt="" />
          <p className="font-ubuntu font-semibold capitalize text-xs mt-2 ">
            Dessert
          </p>
        </div>
      </div>
    </section>
  );
}

export default IconBar;
