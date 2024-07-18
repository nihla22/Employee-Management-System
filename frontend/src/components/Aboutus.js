import react from "react";
import "../App.css";
import emp1 from "../static/emp1.png";
import { FaAngellist } from "react-icons/fa";

import { VscBookmark } from "react-icons/vsc";

const Aboutus = () => {
  return (
    <div className="aboutus" expand="lg">
      <div className="aboutus-content">
        <br />
        <br />
        <br />
        <br />
        <h1>About us</h1>

        <p>
          {" "}
          We are dedicated to revolutionizing how organizations manage their
          most valuable asset – their people. Established with a vision to
          simplify and streamline employee management, our platform offers
          innovative solutions designed to enhance productivity, foster
          collaboration, and empower HR professionals and managers alike.
        </p>
        <br />

        <h3>
          <FaAngellist /> Our Mission
        </h3>
        <p>
          Our mission is to empower businesses of all sizes to thrive by
          providing intuitive, scalable, and customizable tools that optimize
          every aspect of management. We believe in leveraging technology to
          create seamless experiences that enable companies to focus on what
          truly matters – their people.
        </p>
        <br />
        <h3>
          <VscBookmark /> What We Offer
        </h3>
        <p>
          <b>Comprehensive Solutions:</b> From payroll management to performance
          evaluations, our system covers all aspects of employee administration.
        </p>
        <p>
          <b>User-Friendly Interface:</b> Designed with simplicity in mind, our
          platform ensures ease of use for HR professionals and employees alike.
        </p>
        <p>
          <b>Scalability:</b> Whether you're a small startup or a large
          enterprise, our system adapts to your needs as you grow.
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="aboutus-image">
        <img src={emp1} />
      </div>
    </div>
  );
};

export default Aboutus;
