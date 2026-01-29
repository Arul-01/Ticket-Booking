import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

   const totalAmount = cart.reduce(
    (sum, item) => sum + item.ticketprice * item.quantity,
    0
  );


  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item._id} className="border p-2 mb-2">
          <h5>{item.name}</h5>
          <p>Price: ₹{item.ticketprice}</p>
         

         <button
            onClick={() => decreaseQty(item._id)}
            className="btn btn-warning btn-sm me-2"
          >
            -
          </button>
          
          <span>Quantity: {item.quantity}</span>
          
          <button
            onClick={() => increaseQty(item._id)}
            className="btn btn-success btn-sm me-2"
          >
            +
          </button> 
          
          <button
            onClick={() => removeItem(item._id)}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>

        </div>
      ))}
      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}
