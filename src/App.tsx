import { useState } from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart?<Cart/>:<ProductList/>

  const Content=(
    <div className="p-4">
      <Header viewCart={viewCart} setViewCart={setViewCart}/>
      {pageContent}
      <Footer viewCart={viewCart} setViewCart={setViewCart} />
    </div>
  )

  return Content
}

export default App
