import React, { useRef } from "react";
import CarouselFour from ".././assets/images/png/carousel-for.png";
import CarouselThree from ".././assets/images/png/carousel-third.png";
import CarouselTwo from ".././assets/images/png/carousel-two.png";
import CarouselOne from ".././assets/images/png/carousel.png";
import TeamImg from ".././assets/images/svg/Team.svg";
import Slider from "react-slick";
// import previousIcon from "../assets/images/svg/prev.svg";
// import nextIcon from "../assets/images/svg/next.svg";
export const TeamCarousel = () => {
  const slider = useRef();
  const settings = {
    // nextArrow: '<button id="next-icon"> </button> ',
    // prevArrow: '<button id="previous-icon"> </button> ',
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 800,
    speed: 500,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          dots: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 595,
        settings: {
          dots: true,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div id="team" className="carousel py-5 my-lg-5">
      <div className="position-absolute team-image d-none d-md-block">
        <img className="w-100" src={TeamImg} alt="image" />
      </div>
      <div className="container position-relative">
        {/* <!------------------------------------ CAROUSEL-SECTION-START============================================--> */}
        <div className="d-flex align-items-center">
          <div
            className="cursor-pointer"
            id="previous-icon"
            onClick={() => slider?.current?.slickNext()}
          >
            {/* <img src={previousIcon} alt="" /> */}
          </div>
          <div
            className="cursor-pointer"
            id="next-icon"
            onClick={() => slider?.current?.slickPrev()}
          >
            {/* <img src={nextIcon} alt="" /> */}
          </div>
        </div>
        <div className="row pb-sm-5 mb-3">
          <div className="col-12">
            <h1 className="text-center heading my-linear-gradient">Team</h1>
          </div>
        </div>
        <Slider ref={slider} {...settings}>
          <div>
            <img className="w-100" src={CarouselFour} alt="image" />
            <h1 className="small-heading text-center mt-3 pt-1">Mesh</h1>
            <h6 className="font-sm text-center">The Watch Guru</h6>
          </div>
          <div>
            <img className="w-100" src={CarouselThree} alt="image" />
            <h1 className="small-heading text-center mt-3 pt-1">Mesh</h1>
            <h6 className="font-sm text-center">The Watch Guru</h6>
          </div>
          <div>
            <img className="w-100" src={CarouselTwo} alt="image" />
            <h1 className="small-heading text-center mt-3 pt-1">Mesh</h1>
            <h6 className="font-sm text-center">The Watch Guru</h6>
          </div>
          <div>
            <img className="w-100" src={CarouselOne} alt="image" />
            <h1 className="small-heading text-center mt-3 pt-1">Mesh</h1>
            <h6 className="font-sm text-center">The Watch Guru</h6>
          </div>
          <div>
            <img className="w-100" src={CarouselThree} alt="image" />
            <h1 className="small-heading text-center mt-3 pt-1">Mesh</h1>
            <h6 className="font-sm text-center">The Watch Guru</h6>
          </div>
        </Slider>
      </div>
    </div>
  );
};
