import React from "react";
import "./home.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../../images/knife1.jpeg";
import image2 from "../../images/knife2.jpeg";
import image3 from "../../images/knife3.jpeg";
import image4 from "../../images/knife4.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="homeCarousel">
        <div className="homeTop">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={4000}
            centerMode={true}
            centerSlidePercentage={60}
            showThumbs={false}
          >
            <div>
              <img src={image1} />
            </div>
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
