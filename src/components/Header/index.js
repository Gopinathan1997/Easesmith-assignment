import "./index.css";
import { GoPerson } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="row">
        <img
          src="https://i.ibb.co/XpcpMXX/Chaperone-logo.png"
          alt="Chaperone-logo"
          border="0"
          className="logo"
        />
        <p className="title">Chaperone</p>
      </div>
      <ul className="header-menu">
        <li className="normal"><Link to='/'>Home</Link></li>
        <li>Plants & Pots</li>

        <li className="tools">
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                <div className="dropdown">
                  <p>Gardening Tool</p>
                  <p>Pest Control</p>
                  <p>Fertilizers</p>
                  <p>Watering Can</p>
                  <p>Garden Accessories</p>
                </div>
              </Tooltip>
            }
          >
            <span>
              Tools <FaAngleDown />
            </span>
          </OverlayTrigger>
        </li>

        <li>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                <div className="dropdown">
                  <p>Book a Maali</p>
                  <p>Plant Day Care</p>
                  <p>Rent Plants</p>
                </div>
              </Tooltip>
            }
          >
            <span>
              Our Services <FaAngleDown />
            </span>
          </OverlayTrigger>
        </li>
        <li>Blog</li>
        <li>Our Story</li>
        <li>FAQs</li>
      </ul>
      <div className="row">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>
              <div className="dropdown">
                <p>Hello User!</p>
                <b>9876543210</b>
                <hr />
                <p>My Account</p>
                <p>Orders & Refund</p>
                <p>Whislist</p>
                <p>Gift Cards</p>
                <p>Service Membership</p>
                <p>Refer to Friend</p>
                <p>Help & Support</p>
                <p>Logout</p>
              </div>
            </Tooltip>
          }
        >
          <div className="profile-container">
            <GoPerson size={28} />
            <p style={{ margin: "0px" }}>My Profile</p>
          </div>
        </OverlayTrigger>

        <div className="profile-container">
          <div className="row">
            <GiShoppingCart size={28} />
            <sup>3</sup>
          </div>
          <p style={{ margin: "0px" }}>Cart</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
