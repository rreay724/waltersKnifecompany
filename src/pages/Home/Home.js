import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import { Knife } from "../../components/index";
import { knifeData } from "../../knifeData";

import image1 from "../../images/knife1.jpeg";
import image2 from "../../images/knife6.jpeg";
import image3 from "../../images/knife3.jpeg";

function Home() {
  return (
    <div className="home">
      {/* <div className="spacing"></div> */}
      <div className="homeCarousel">
        <div className="homeTop">
          {/* <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            centerMode={true}
            centerSlidePercentage={55}
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
          </Carousel> */}
          <Carousel fade interval={4000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "100%" }}
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "100%" }}
                src={image2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "100%" }}
                src={image3}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="homeMiddle">
        <div className="homeText">
          <h2>About O'Noodles</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere
            posuere dolor, ac fringilla justo molestie et. Nunc sollicitudin
            arcu nunc, vel facilisis turpis auctor et. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nam imperdiet lorem magna, ac convallis risus porta in. Sed gravida
            molestie elit, eu aliquam odio dictum nec. Donec aliquam lorem quis
            diam ornare, et lacinia magna pellentesque. Fusce auctor cursus odio
            ac fermentum. Quisque a consequat lorem, faucibus consectetur purus.
            Nullam volutpat tempor porta. Mauris eget justo efficitur, tristique
            urna a, sagittis magna. Vestibulum vitae ligula a arcu mattis
            malesuada sit amet ac libero. Maecenas tortor ligula, mollis et
            massa at, malesuada dictum ipsum. Nullam at tempor ipsum, eget
            vulputate orci. Nam semper, massa et lobortis scelerisque, enim
            libero porttitor ligula, in congue quam augue sagittis nulla. Proin
            venenatis magna non lacinia ultrices. Donec in enim odio. Donec et
            justo lectus. Integer posuere condimentum lacus eget maximus.
            Suspendisse laoreet diam vel dolor hendrerit, at lobortis ex
            consectetur. Sed sapien tortor, pretium non vehicula quis, vehicula
            tincidunt elit. Quisque bibendum diam sit amet urna scelerisque
            tincidunt. Curabitur eu massa sollicitudin, venenatis turpis a,
            venenatis metus. Praesent at nisi sollicitudin, volutpat mauris
            quis, gravida sem. Nunc vestibulum congue tempor. Praesent elit
            massa, condimentum vitae luctus eget, viverra in magna. Fusce lectus
            turpis, aliquet a dui a, ultrices ultrices tortor. Sed et nunc quis
            ex lobortis tincidunt. Aliquam ultricies ut metus id mollis.
          </p>
        </div>
      </div>
      <div>
        <h3 className="featured">Featured Knives</h3>
      </div>
      <div className="homeBottom">
        <div className="homeRow">
          {knifeData.map((item) => {
            return (
              <Knife
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
