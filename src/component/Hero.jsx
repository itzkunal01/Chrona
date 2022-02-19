import React from "react";
import HeroImg from "../assets/images/svg/hero-watch.svg";
import HeroImg2 from "../assets/images/svg/hero.svg";
import HeroImg3 from "../assets/images/png/hero-img-2.png";

const Hero = () => {
  return (
    <div>
      {/* <!--================================== HERO SECTION STARTS ============================= --> */}
      <div className="container py-5 pt-4 mt-3">
        <div className="row justify-content-center pt-md-5 pt-xxl-0">
          <div className="col-6" data-aos="zoom-in" data-aos-duration="1500">
            <div className="pe-xxl-5 me-xxl-3">
              <img className="w-100" src={HeroImg2} alt="image" />
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col d-none d-md-block"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img className="w-100 " src={HeroImg} alt="image" />
          </div>
          <div
            className="col-12 mx-auto mt-5 d-md-none d-block"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img className="w-100" src={HeroImg3} alt="" />
          </div>
        </div>
      </div>
      {/* <!--================================== HERO SECTION ENDS ============================= --> */}
    </div>
  );
};

export default Hero;
