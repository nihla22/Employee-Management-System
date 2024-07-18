import react from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import "../App.css";
import slide01 from "../static/slide01.jpg";

const Contactus = () => {
  return (
    <div className="contactus" expand="md">
      <h1 cl>Contact Us</h1>
      <p>For any queries, please contact us at</p>
      <p>
        <FaPhone /> Phone: 1234567890
      </p>
      <p>
        <FaEnvelope /> Email: emp@gmail.com
      </p>
    </div>
  );
};

export default Contactus;
