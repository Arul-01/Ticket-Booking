import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import '../MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
   const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data)=> {console.log("API Response:", data);   
        setProduct(data);
        setLoading(false);})
      .catch((err)=>console.error("Error details",err));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
  <div className="container py-4">
    <div className="row align-items-center shadow-sm p-4 rounded bg-light">
      
      {/* Image Section */}
      <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
      </div>

      {/* Details Section */}
      <div className="col-12 col-md-7">
        <h2 className="mb-3">{product.name}</h2>

        <p className="fs-5 mb-2">
          <strong>Price:</strong> ₹{product.ticketprice}
        </p>

        <p className="text-muted mb-4">
          <strong>Description:</strong> {product.description}
        </p>

        {/* Buttons */}
        <div className="d-flex flex-wrap gap-2">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary px-4"
          >
            Add to Cart
          </button>

          <Link to="/cart">
            <button className="btn btn-dark px-4">
              Go to Cart
            </button>
          </Link>

          <Link to="/">
            <button className="btn btn-warning px-4">
              Back to Movies
            </button>
          </Link>
        </div>
      </div>

    </div>
  </div>
);

}

export default MovieDetails;