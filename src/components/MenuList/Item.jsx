// import Logo from "../src/assets/img/kims-logo-dark.svg";
function Item({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="grid grid-cols-2 gap-4 m-4 p-4 " key={item.item}>
          <div className="mr-2 meal-detail">
            <h2 className="font-bold my-3 text-xl text-right">{item.item}</h2>
            <p className="text-x mb-4 text-right mr-2">{item.description}</p>
            <div className="flex justify-between">
              <p>
                <span>السعر :</span> {item.price}
              </p>
              <p>200 سعره حرارية</p>
            </div>
          </div>

          <div className="bg-mainBrown/80 rounded-xl">
            <img
              src="../src/assets/img/logoWight.svg"
              alt="Item Image"
              className="w-32 mx-auto my-4"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Item;
{
  /* 
          <h2 className="relative font-bold text-brownLight text-xl">
            14
            <span className="absolute -top-3 uppercase text-sm">sr</span>
          </h2> */
}
