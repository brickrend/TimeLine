import { ItemWrap } from "../styles";

const Item = (prop) => {
  return (
    <ItemWrap>
      <img src={prop.image} alt="" />
      <p>{prop.year}</p>
      <p>{prop.discription}</p>
    </ItemWrap>
  );
};

export default Item;
