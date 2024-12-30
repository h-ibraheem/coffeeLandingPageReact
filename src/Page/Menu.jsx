import { data } from "../data/data";
import Header from "../components/HeroSection/Header";
import Category from "../components/menuList/Category";
import ItemList from "../components/menuList/ItemList";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
function Menu() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    function selectedItem() {
      if (selectedCategory === null) {
        return setItems(data);
      } else {
        const itemByCategory = data.filter(
          (item) => item.category === selectedCategory
        );
        setItems(itemByCategory);
      }
    }
    selectedItem();
  }, [selectedCategory]);

  return (
    <div className=" text-mainBrown bg-brownLight/20">
      <Header />

      <Category data={data} setSelectedCategory={setSelectedCategory} />

      <main>
        <ItemList items={items} />
      </main>
      <Footer />
    </div>
  );
}

export default Menu;
