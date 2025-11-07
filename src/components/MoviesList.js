import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function MoviesList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="nav container">
      <div className="d-flex justify-content-between container">
      <h2>Movies</h2>
      <h2><Link to="/cart" className="text-success text-decoration-none">Go to Cart 🛒</Link></h2>
      </div>
      <div className="container-fluid">
      <div className="row mt-3 gx-4 text-center">
        {products.map(product => (
          <>
          <div key={product._id}  className="col-12 col-md-4 col-lg-3 mb-4">
           <div className="card">
            <Link to={`/Movies/${product._id}`} className="link"> 
          
             
                <img src={product.image} alt={product.name} className="image card-img-top" />
                <div className="card-body">
                <h3>{product.name}</h3>
                <p>₹{product.ticketprice}</p>
                <p>Director: {product.director}</p>
              </div>
              
              </Link></div>
            </div>
            </>
        ))}
    </div>
    </div>
    </div>
  );
}

export default MoviesList;