type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {

    const button = viewCart
        ? <button className="btn btn-outline btn-secondary mt-2" onClick={() => setViewCart(false)}>View Products</button>
        : <button className="btn btn-outline btn-secondary mt-2" onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <nav className="nav">
            {button}
        </nav>
    )

    return content
}
export default Nav