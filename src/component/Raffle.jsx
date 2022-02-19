import React from "react";
import EnterRaffleImg from ".././assets/images/png/Enter-raffle-img.png";
import video from ".././assets/video/raffle-video.mp4";

const Raffle = () => {
  return (
    <div>
      {/* <!-- ================================== Enter-Raffle-SECTION-STARTS ===================================== --> */}
      <section id="enter" className="bg-color-gray position-relative py-lg-5">
        <div className="container py-5">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div
              className="col-auto col-lg-4 col-xl-5 z-index-1"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <video className="w-100 h-100" loop muted playsInline autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div
              className="col-lg-8 mx-auto mx-xl-0 col-xl-7 z-index-1 pe-xxl-5 mt-5 mt-xl-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="px-lg-4 px-xxl-5">
                <h1 className="heading my-linear-gradient mb-3 text-center text-md-start">
                  Enter Raffle
                </h1>
                <p className="para text-black mb-2">
                  CHRONO believes in fair play and equal chances for everyone to
                  participate - not just feeding the bots and gas wars. CHRONO
                  will allocate 4 000 whitelist spots to registered addresses. 1
                  000 whitelist spots will be reserved for our Discord and
                  Twitter competitions and 5 000 CHRONO NFT’s will be listed for
                  public sale after the whitelist sale.
                </p>
                <div className=" text-center text-md-start mt-4 mt-md-0">
                  <div className="click-btn px-lg-3 d-inline-block">
                    <button className="my-linear-gradient border-0 p-3 ">
                      Click here to enter
                    </button>
                  </div>
                  <p className="para text-black mt-2 mb-0">
                    *mint price 0.7 eth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute side-text-3 d-none d-sm-block">
          <img className="w-100" src={EnterRaffleImg} alt="Enter-raffle-img" />
        </div>
      </section>
      {/* <!-- ================================== Enter-Raffle-SECTION-ENDS ======================================= --> */}
    </div>
  );
};

export default Raffle;
