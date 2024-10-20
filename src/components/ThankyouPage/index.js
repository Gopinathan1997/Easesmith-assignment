import './index.css'
import Header from "../Header";
import { useParams } from "react-router-dom";
const ThankyouPage = () => {
    const { productName } = useParams();
  return (
    <div>
      <Header />
      <div className="thankyou-container">
        <div className="image-container">
          <img
            src="https://i.ibb.co/Bg9czq8/rb-12887.png"
            alt="thank-you"
            className="thankyou-image"
          />
        </div>
        <div className="thankyou-content">
          <h1>
            Thank You for your interest in <b className='colour'>{productName}</b>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ThankyouPage;
