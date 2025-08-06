import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart, updateQuantity } from "../Redux/CartSlice";
import { Link } from "react-router-dom";
import NavBar from "../Router/NavBar";
import Footer from "../Router/Footer";

const Cart = () => {
    const cartProduct = useSelector((state) => state.mycart)
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
    const incrementCart = (id, quantity) => {

        dispatch(updateQuantity({ id, quantity: quantity + 1 }))

    }
    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }))
        }
    }
    const totalQuantity = cartProduct.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartProduct.reduce((sum, items) => {
        const price = parseFloat(items.price.toString().replace(/[^\d]/g, ''));
        return sum + price * items.quantity;
    }, 0)
    return (
        <div style={{ color: "black", margin: "10px" }}>
            <NavBar></NavBar>

            {cartProduct.length === 0 ? (
                <h2>Your Cart is empty</h2>
            ) : (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {cartProduct.map((item) => (
                        <div key={item._id} style={{ border: '2px solid black', margin: "10px", width: "80%" }}>
                            <img src={item.image} alt='' width="100" />
                            <h2>{item.title}</h2>
                            <p>Price: {item.price}</p>
                            <button onClick={() => decrementCart(item._id, item.quantity)}>-</button>
                            {item.quantity}
                            <button onClick={() => incrementCart(item._id, item.quantity)}>+</button>

                            <button onClick={() => deleteCart(item)}>Remove</button>
                        </div>
                    ))}
                    <div >
                        <h3>Total Items: {totalQuantity}</h3>
                        <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
                        <button><Link to="/">Checkout</Link></button>
                    </div>

                </div>
            )
            }
            <Footer />
        </div>
    )
}
export default Cart;