import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

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
    <div className="container-fluid row">
      <div className="col-12 col-sm-6">
      <img src={product.image} alt={product.name} className="w-25 h-100 w-md-100" style={{float:"left"}}/> 
      </div>
      <div className="container">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.ticketprice}</p>
      <p><strong>Description:</strong> {product.description}</p>

       <button onClick={() => addToCart(product)} className="btn btn-primary">
        Add to Cart
      </button>
      <br /><br />
      <Link to="/cart"><button className="btn rounded-2 btn-dark text-light">Go to Cart</button></Link>
      <br /><br/>
      <Link to="/"><button className="btn rounded btn-warning">Back to Movies</button></Link>
    </div>
    
    </div>
  );
}

export default MovieDetails;