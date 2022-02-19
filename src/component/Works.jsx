import React from "react";
import HowItWorksImg from ".././assets/images/png/how-it-works-gp-img.png";
import HowItWorksTextImg from ".././assets/images/png/How-it-works-text-img.png";

const Works = () => {
  return (
    <div>
      {/* <!-- ================================== HOW-IT-WORKS-SECTION ============================================ --> */}
      <section
        id="how-to"
        className="howit-works-section position-relative py-lg-5 my-xxl-5"
      >
        <div className="container pb-5 pb-xl-0 py-xl-5">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div
              className="col-7 mt-5 mt-lg-0 col-xl-5 z-index-1"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className="w-100 pe-xl-3 pe-xxl-5"
                src={HowItWorksImg}
                alt="how-it-works-gp-img"
              />
            </div>
            <div
              className="col-lg-11 mx-auto mx-xl-0 col-xl-7 z-index-1 mt-5 mt-lg-0"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="px-xl-4 px-xxl-5">
                <h1 className="heading my-linear-gradient mb-3 text-center text-lg-start">
                  How it works
                </h1>
                <p className="para text-black mb-2">
                  Once whitelists have been allocated, the CHRONO NFTs will be
                  minted and the holders are faced with a choice.
                </p>
                <p className="para text-black mb-2">
                  Either hold the CHRONO NFT and watch it grow in value as the
                  supply decreases OR burn your NFT and find out what watch your
                  NFT is paired with, just like standard NFTs, CHRONO NFTs are
                  sorted by rarity except instead of rare traits, CHRONO NFT
                  rarity is based on the price of the time piece (please refer
                  to our watch list for the different rarity ranges). The top
                  100 rarest watches will be delivered in person by the team
                  anywhere in the world and the other 9900 watches will be
                  delivered via our trusted shipping partners.{" "}
                </p>
                <p className="para text-black mb-2">
                  The rarest of them all being the Richard Mille RM56-02
                  Sapphire worth $2.5-$3m, That’s 1000X mint.
                </p>
                <p className="para text-black">
                  How’s that for return on investment?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute side-text-2 d-none d-lg-block">
          <img
            className="w-100"
            src={HowItWorksTextImg}
            alt="How-it-works-text-img"
          />
        </div>
      </section>
      {/* <!-- ================================== HOW-IT-WORKS-SECTION-ENDS ======================================= --> */}
    </div>
  );
};

export default Works;
