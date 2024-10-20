import "./index.css";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Popup from "reactjs-popup";

import AddToCartModal from '../AddToCartModal'
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { details } = props;
  const { image, name } = details;
 const navigate = useNavigate();
  const handleViewProduct = () => {
    
    navigate(`/thank-you/${name}`);
  };
  return (
    <div className="product-card">
      <img src={`${image}`} alt={name} />
      <button className="fill-button view-button" onClick={handleViewProduct}>
        View Product
      </button>
      <h1>{name}</h1>
      <p style={{ color: "#aaa" }}>Indoor plant, Low Maintainence</p>
      <div>
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStarHalf color="yellow" /> 4.9 Ratings
      </div>
      <p className="strikeout">₹359</p>
      <span> ₹299</span>
      <div className="row button-container">
        <Popup
          trigger={<button className="fill-button">- Add to Cart +</button>}
          position="top"
        >
          {(close) => (
            <div className="modal">
              <AddToCartModal closeModal={close} details={details} />
            </div>
          )}
        </Popup>

        <button className="outline-button">Buy on Rent</button>
      </div>
    </div>
  );
};
export default ProductCard;
