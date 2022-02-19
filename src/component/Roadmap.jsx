import React from "react";
import RoadmapOne from ".././assets/images/svg/roadmap.svg";
import RoadmapTwo from ".././assets/images/svg/roadmap-two.svg";
import RoadmapThird from ".././assets/images/svg/roadmap.third.svg";
import RoadmapFour from ".././assets/images/svg/roadmap-for.svg";
import RoadmapFive from ".././assets/images/svg/roadmap-five.svg";
import RoadmapSix from ".././assets/images/svg/roadmap-six.svg";
import RoadmapSeven from ".././assets/images/svg/roadmap-seven.svg";

const Roadmap = () => {
  return (
    <div>
      {/* <!--================================== Roadmap ========================================================= --> */}
      <section className="roadmap my-5 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-duration="2000">
              <h1 className="text-center heading my-linear-gradient">
                Roadmap
              </h1>
            </div>
          </div>

          {/* <!-- one-row --> */}
          <div className="row justify-content-lg-center mt-4 mt-sm-5 pt-2">
            <div className="col-5 d-none d-lg-block"></div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 ps-1" src={RoadmapOne} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div
              className="col-10 col-md-8 col-lg-5 ps-5 ps-sm-2"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Phase 1.</h1>
                <p className="small-heading">
                  Chrono season one raffle open, Social media Whitelisting start
                  : Dates TBA 0{" "}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- second-row --> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-10 col-md-8 col-lg-5 order-3 order-lg-0 ps-5 ps-sm-2"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Phase 2.</h1>
                <p className="small-heading">
                  Partnership announcements and collaborations (We already have
                  some of the largest watch expert YouTube’s on board)
                </p>
              </div>
            </div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 ps-1 w-66" src={RoadmapTwo} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div className="col-5 d-none d-lg-block"></div>
          </div>

          {/* <!-- third-row --> */}
          <div className="row justify-content-lg-center">
            <div className="col-5 d-none d-lg-block"></div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 w-55" src={RoadmapThird} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div
              className="col-10 col-md-8 col-lg-5 ps-5 ps-sm-2 py-4 py-sm-0"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Phase 3.</h1>
                <p className="small-heading  mb-5">Whitelist sale opens</p>
              </div>
            </div>
          </div>

          {/* <!--fourth-row --> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-10 col-md-8 col-lg-5  order-3 order-lg-0 ps-5 ps-sm-2 py-4 py-sm-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Phase 4.</h1>
                <p className="small-heading mb-5">Public sale opens</p>
              </div>
            </div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 ps-1 w-55" src={RoadmapFour} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div className="col-5 d-none d-lg-block"></div>
          </div>

          {/* <!-- fiveth-row --> */}
          <div className="row justify-content-lg-center">
            <div className="col-5 d-none d-lg-block"></div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 w-55" src={RoadmapFive} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div
              className="col-10 col-md-8 col-lg-5 ps-5 ps-sm-2 py-4 py-sm-0"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Phase 5.</h1>
                <p className="small-heading mb-5">Public Burn opens</p>
              </div>
            </div>
          </div>

          {/* <!-- sixth-row --> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-10 col-md-8 col-lg-5  order-3 order-lg-0 ps-5 ps-sm-2 pt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Phase 6.</h1>
                <p className="small-heading">
                  Delivery of watches will be recorded and uploaded to our
                  YouTube. (If the community member allow it) All behind the
                  scenes will also be uploaded to our channel for transparency
                  and because recording this adventure will ensure that our
                  entire community is in the loop.
                </p>
              </div>
            </div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 ps-1 w-66" src={RoadmapSix} alt="image" />
              </div>
              <div className="loadmap-line ms-29 mx-sm-auto"></div>
            </div>
            <div className="col-5 d-none d-lg-block"></div>
          </div>

          {/* <!-- seventh-row --> */}
          <div className="row justify-content-lg-center">
            <div className="col-5 d-none d-lg-block"></div>
            <div className="col-2 col-lg-1">
              <div className="roadmap-circle text-center mx-auto">
                <img className="pt-1 w-55" src={RoadmapSeven} alt="image" />
              </div>
            </div>
            <div
              className="col-10 col-md-8 col-lg-5 ps-5 ps-sm-2 pt-3"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Phase 7.</h1>
                <p className="small-heading">Season 2 Launch reveal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================================== Roadmap =Ends===================================================== --> */}
    </div>
  );
};

export default Roadmap;
