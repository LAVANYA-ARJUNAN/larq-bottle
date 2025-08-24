import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../Redux/CartSlice";
import { Link } from "react-router-dom";
import NavBar from "../Router/NavBar";
import Footer from "../Router/Footer";
import "./Cart.css"; 


const Cart = () => {
  const cartProduct = useSelector((state) => state.mycart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
 

  const totalQuantity = cartProduct.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartProduct.reduce((sum, items) => {
    const price = parseFloat(items.price.toString().replace(/[^\d]/g, ""));
    return sum + price * items.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <NavBar />
<h1>My cart</h1>
      {cartProduct.length === 0 ? (
        <h2 className="empty-cart">Your Cart is empty</h2>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartProduct.map((item) => (
              <div key={item._id} className="cart-card">
                <img src={item.image} alt={item.title} className="cart-image" />
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementCart(item._id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementCart(item._id, item.quantity)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => deleteCart(item)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Items: {totalQuantity}</h3>
            <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
            <Link to="/" className="checkout-btn">Checkout</Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
