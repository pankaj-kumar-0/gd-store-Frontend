import React from "react";
import "./Home.css";
import img1 from "../../../Asset/Images/landing/img1.png";
import img2 from "../../../Asset/Images/landing/img2.png";

import { Fade} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PdHome from "../../../Components/PdHome/PdHome";
import Button from "../../../Components/Button/Button";
import Services from "../../../Components/Services/Services";
import Banner from "../../../Components/Banner/Banner";
import SlideBox from "../../../Components/SlideBox/SlideBox";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className="box1">
            <h1>We are gadget world</h1>
            <h1>
              {" "}
              Get 40% Off on your First shopping with credit card and debit card
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis adipisci facere tempora, delectus cupiditate
              exercitationem alias facilis omnis quis sint laudantium illum
              voluptatibus at inventore? Nisi veniam tempora porro. Sed?
            </p>
            <Button to_={'/products'} btn_name="View Collections" />
          </div>

          <div className="box1">
            <Fade
              prevArrow=<button style={{ display: "none" }}>1</button>
              nextArrow=<button style={{ display: "none" }}>2</button>
              duration="5000"
            >
              <img src={img1} alt="Loading" className="landing_img" />
              <img src={img2} alt="Loading" className="landing_img" />
            </Fade>
          </div>
        </div>
      </div>
      <Banner/>
      <SlideBox/>
      <PdHome/>
      <Services/>
    </>
  );
};

export default Home;
