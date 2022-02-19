import React from "react";
import AboutSideImg from ".././assets/images/png/About-us-side-img.png";
import ElegantAboutImg from ".././assets/images/png/elegant-watch-with-silver-golden-chain-isolated-img-2.png";

const About = () => {
  return (
    <div>
      {/* <!-- ================================== ABOUT-US-SECTION ================================================ --> */}
      <section
        id="about"
        className="about-us-section position-relative py-4 py-lg-0 mt-sm-5"
      >
        <div className="container py-3 py-lg-5">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div
              className="col-auto col-lg-7 z-index-1 order-2 order-lg-0 mt-5 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="ps-xxl-4 pe-xxl-5">
                <h1 className="heading my-linear-gradient mb-3 text-center text-lg-start">
                  About us
                </h1>
                <p className="para mb-2 opacity-7">
                  We believe that a watch does so much more than just telling
                  the time - the right watch is an extension of your identity, a
                  representation of your ambition and a dynamite investment
                  opportunity.
                </p>
                <p className="para mb-2 opacity-7">
                  Lux Dubai has been in the game of luxury timepieces for over a
                  decade, servicing some of the most exclusive clientele in
                  Dubai. We are collectors and connoisseurs of the finest in
                  premium watches and we specialise in tracking down rare pieces
                  from around the globe.
                </p>
                <p className="para mb-0 opacity-7">
                  Chrono is our take on the NFT with a difference. CHRONO will
                  be launching 10 000 NFTs each NFT can be burned for the
                  physical watch that backs it. The exciting part is which watch
                  this will be. We have a wide range of the world’s finest
                  watches from the humble G-Shock to Rolex Daytonas to the
                  God-tier $3 million Richard Mille Sapphire RM56.
                </p>
              </div>
            </div>
            <div className="col-8 col-lg-5 col-xl-auto z-index-1 invisible about-us-img my-3 mt-lg-0">
              <img
                className="w-100 px-3 px-sm-0"
                src={ElegantAboutImg}
                alt="elegant-watch-with-silver-golden-chain-isolated-img"
              />
            </div>
          </div>
        </div>
        <div className="position-absolute side-text d-none d-xl-block">
          <img className="w-100" src={AboutSideImg} alt="About-us-side-img" />
        </div>
      </section>
      {/* <!-- ================================== ABOUT-US-SECTION-ENDS =========================================== --> */}
    </div>
  );
};

export default About;
