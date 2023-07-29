import useCart from "../hooks/useCart"

type PropType= {
    viewCart:boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>

}
const Footer = ({viewCart}:PropType) => {
    const {totalItems,totalPrice}=useCart()
    const year:number = new Date().getFullYear()
    const pageContent=viewCart?<p className="m-2 footer p-10 bg-base-200 text-base-content">Shopping Cart: {year}</p>:(<>
     <p className="text-xl">Total Items {totalItems}</p>
     <p className="text-xl">Total Price {totalPrice}</p>
     <p className="text-xl">Shopping Cart{year}</p>

     </>)

     const Content=(<footer className="footer">{pageContent}</footer>)
  return Content
}

export default Footer