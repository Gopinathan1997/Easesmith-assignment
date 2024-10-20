import "./index.css";

const Modal = ({ closeModal, details }) => {
  console.log(details);
  const { name, image } = details;
  console.log(name);
  return (
    <div className="modal-container">
      <div className="cart-head-container">
        <h1 className="your-cart">Your Cart</h1>
        <hr />
      </div>

      <div className="cart-content-container">
        <h1 className="congrats-text">Please Confirm Your Item to Cart</h1>
        <img src={`${image}`} alt={name} border="0" className="image" />
        <div className="plant1"></div>
        <p className="thank-text">
          Thank you for choosing <b>{name}</b> from Chapperone services. We will
          soon get in touch with you!
        </p>
        <div className="cart-button-container">
          <button className="cart-button" onClick={() => closeModal()}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
