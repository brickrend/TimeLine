import Item from "./Item";
import data from "../data";

const ItemList = () => {
  const itemList = data.map((item) => {
    return (
      <Item
        id={item.id}
        year={item.year}
        discription={item.discription}
        image={item.image}
      />
    );
  });
  return itemList;
};

export default ItemList;
