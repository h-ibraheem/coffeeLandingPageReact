import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className=" container mx-auto">
      <Item items={items} />
    </div>
  );
}

export default ItemList;
