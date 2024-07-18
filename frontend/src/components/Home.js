import slide01 from "../static/slide01.jpg";
import slide02 from "../static/slide02.jpg";
import slide03 from "../static/slide03.jpg";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Navigation from "./Navigation";

import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="row">
      <Carousel variant="dark" expand="xl">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide01}
            alt="First slide"
            height="80%"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="d-block w-100"
            src={slide03}
            alt="Second slide"
            height="80%"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide02}
            alt="Third slide"
            height="80%"
            width="100%"
          />
        </Carousel.Item>
      </Carousel>
      <Aboutus></Aboutus>
      <Contactus></Contactus>
    </div>
  );
};

export default Home;
