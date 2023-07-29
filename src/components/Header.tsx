
import useCart from "../hooks/useCart";
import Nav from "./Nav";

type PropType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ viewCart, setViewCart }: PropType) => {
  const {totalItems,totalPrice}=useCart()
  const Content = (
    <header className="bg-base-100">
      <div className="text-4xl">
        <h1>SHOP FOR ITEMS </h1>
        <div className="glass">
          <p className="">Total Items:{totalItems}</p>
          <p className="">Total Prices:{totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} /> 
    </header>
  );

  return Content
};

export default Header;
