import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  if (cart.length === 0)
    return (
      <div className="container text-center mt-5">
        <h4 className="text-muted">Your cart is empty 🛒</h4>
      </div>
    );

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.ticketprice * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item._id}
          className="card mb-3 shadow-sm"
          style={{ borderRadius: "10px" }}
        >
          <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            {/* Movie Info */}
            <div className="mb-3 mb-md-0">
              <h5 className="card-title mb-1">{item.name}</h5>
              <p className="mb-0 text-muted">Price: ₹{item.ticketprice}</p>
            </div>

            {/* Quantity Controls */}
            <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
              <button
                onClick={() => decreaseQty(item._id)}
                className="btn btn-warning btn-sm"
              >
                −
              </button>

              <span className="fw-bold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item._id)}
                className="btn btn-success btn-sm"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(item._id)}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>

          </div>
        </div>
      ))}

      {/* Total Section */}
      <div
        className="text-end mt-4 p-3 bg-light rounded shadow-sm"
        style={{ fontSize: "20px" }}
      >
        <strong>Total Amount:</strong><span className="text-success mx-2">₹{totalAmount}</span> 
      </div>
    </div>
  );
}
