import React from "react";
import WatchListImg from ".././assets/images/png/Watch-List-img.png";
import StarImg from ".././assets/images/png/Star-img.png";

const Roadmapwatchlist = () => {
  return (
    <div>
      {/* <!-- ================================== WATCH-LIST ROADMAP-SECTION-STARTS =============================== --> */}
      <section className="position-relative ps-2 ms-1" id="watch-list">
        <div className="position-absolute side-text-4">
          <img className="w-100" src={WatchListImg} alt="Watch-List-img" />
        </div>
        <div className="container py-lg-5">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="heading my-linear-gradient mt-3">Watch List</h1>
          </div>
          {/* <!--------------------------------------- row-1 -----------------------------------------> */}
          <div className="row justify-content-lg-center mt-lg-5 pt-4">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 1: $2.5m-$3m</h1>
                <h4 className="small-heading">1/10 000</h4>
                <p className="para text-black mb-3 pb-3">
                  • Richard Mille - RM 56-02
                </p>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-2 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="  col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 2: $200k-$300k</h1>
                <h4 className="small-heading">5/10 000</h4>
                <p className="para text-black mb-1">
                  • Audemars Piguet: Royal Oak offshore Tourbillon 26388PO
                </p>
                <p className="para text-black mb-1">
                  • Rolex: Daytona Platinum 116506
                </p>
                <p className="para text-black mb-1">
                  • Rolex: Daytona “Hulk” 116508
                </p>
                <p className="para text-black mb-1">
                  • Hublot: Big Bang King Power Black Mamba Kobe Bryant
                </p>
                <p className="para text-black mb-1">
                  • Patek Phillippe: Aquanaut 5164A-001
                </p>
                <p className="para text-black mb-3 pb-3">
                  • Patek Phillippe: Grand Complications 5270G-018
                </p>
              </div>
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
          {/* <!--------------------------------------- row-3 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 3: $100k-$200k</h1>
                <h4 className="small-heading">5/10 000</h4>
                <p className="para text-black mb-1">• Rolex: Daytona 16528</p>
                <p className="para text-black mb-1">
                  • Rolex: Sky-Dweller Everose 326935
                </p>
                <p className="para text-black mb-1">• Rolex: “Panda” 6263</p>
                <p className="para text-black mb-1">
                  • Patek Phillippe: 7118/1R-010
                </p>
                <p className="para text-black mb-1">
                  • Audemars Piguet: 26022OR.OO.D088CR.01
                </p>
                <p className="para text-black mb-1">
                  • Audemars Piguet: 26252OR.OO.D092CR.02
                </p>
                <p className="para text-black mb-3 pb-3">• Cartier: W1556216</p>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-4 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 4: $50k-$100k</h1>
                <h4 className="small-heading">10/10 000</h4>
                <p className="para text-black mb-1">
                  • Rolex: Sky-Dweller 326934
                </p>
                <p className="para text-black mb-1">
                  • Rolex: Cosmograph 116520
                </p>
                <p className="para text-black mb-1">• Rolex: Daytona 116500</p>
                <p className="para text-black mb-1">
                  • Rolex: Submariner Gold 16618
                </p>
                <p className="para text-black mb-1">
                  • Rolex: Yacht Master II 116681
                </p>
                <p className="para text-black mb-1">
                  • Audemars Piguet: 26480T1.00.A027CA.01
                </p>
                <p className="para text-black mb-1">• Hublot: 411JX1170RX</p>
                <p className="para text-black mb-1">• Rolex: “pepsi” 1675</p>
                <p className="para text-black mb-3 pb-3">
                  • Rolex: Submariner “Hulk” 116610LV
                </p>
              </div>
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
          {/* <!--------------------------------------- row-5 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className="col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 5: $20k-$50k</h1>
                <h4 className="small-heading">50/ 10 000</h4>
                <p className="para text-black mb-1">
                  • Rolex: Submariner 116610LN
                </p>
                <p className="para text-black mb-1">• Panerai: PAM00960</p>
                <p className="para text-black mb-1">• Rolex: 126333</p>
                <p className="para text-black mb-1">• Rolex: 126000</p>
                <p className="para text-black mb-1">
                  • Ulysee Nardin: 3715-260-3/CARB
                </p>
                <p className="para text-black mb-1">• Rolex: Datejust 126334</p>
                <p className="para text-black mb-1">• Rolex: 126234</p>
                <p className="para text-black mb-1">
                  • Tag Heuer: CAR5A8CBF0707
                </p>
                <p className="para text-black mb-1">
                  • Jaeger-LeCoultre: 1362510
                </p>
                <p className="para text-black mb-3 pb-3">• Cartier: WGSA0019</p>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-6 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 6: $10k-$20k</h1>
                <h4 className="small-heading">100/10 000</h4>
                <p className="para text-black mb-1">
                  • Breitling: Navitimer UB0127211B1P2
                </p>
                <p className="para text-black mb-1">
                  • Frank Muller: V45SCDTLCKTTNRMC
                </p>
                <p className="para text-black mb-1">
                  • Omega: Speedmaster Moon 304.30.44.52.01.001
                </p>
                <p className="para text-black mb-1">• Cartier: WSBB0021</p>
                <p className="para text-black mb-1">• Rolex: 277200</p>
                <p className="para text-black mb-1">• Rolex: 278240</p>
                <p className="para text-black mb-3 pb-3">
                  • Tag Heuer: CAR2A5BFT6044
                </p>
              </div>
            </div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
          {/* <!--------------------------------------- row-7 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 7: $5k-$10k</h1>
                <h4 className="small-heading">200/10 000</h4>
                <p className="para text-black mb-1">
                  • Omega: Seamaster 210.32.42.20.06.001
                </p>
                <p className="para text-black mb-1">
                  • Omega: Basel 210.30.42.20.06.001
                </p>
                <p className="para text-black mb-1">
                  • Omega: Speedmaster 326.30.40.50.03.001
                </p>
                <p className="para text-black mb-1">• UBOAT: 8060</p>
                <p className="para text-black mb-1">• UBOAT: U1-1001</p>
                <p className="para text-black mb-1">• Panerai: PAM00754</p>
                <p className="para text-black mb-1">• Bell & Ross: BR03-94</p>
                <p className="para text-black mb-1">
                  • Breitling: AB2020121B1A1
                </p>
                <p className="para text-black mb-1">
                  • Breitling: AB2020161C1A1
                </p>
                <p className="para text-black mb-1">
                  • Breitling: A13385101C1X2
                </p>
                <p className="para text-black mb-1">• IWC: IW329005</p>
                <p className="para text-black mb-1">
                  • Tag Heuer: Aquaracer CAKZ11A.B0833
                </p>
                <p className="para text-black mb-1">• Chopard: 168565-3001</p>
                <p className="para text-black mb-1">
                  • Poljot: Toubillon Skeleton
                </p>
                <p className="para text-black mb-1">• Cartier: WSPN0007</p>
                <p className="para text-black mb-1">• Rolex: Explorer II</p>
                <p className="para text-black mb-3 pb-3">• Rolex: Date</p>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-8 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 8: $2.5k-$5k</h1>
                <h4 className="small-heading mb-3 pb-3">400/10 000</h4>
              </div>
            </div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
          {/* <!--------------------------------------- row-9 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 9: $2k</h1>
                <h4 className="small-heading mb-3 pb-3">500/10 000</h4>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-10 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 10: $1k</h1>
                <h4 className="small-heading mb-3 pb-3">1000/10 000</h4>
              </div>
            </div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
          {/* <!--------------------------------------- row-11 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-duration="2000"
            ></div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-9 col-md-8 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h1 className="sub-heading">Tier 11: $500</h1>
                <h4 className="small-heading mb-3 pb-3">2000/10 000</h4>
              </div>
            </div>
          </div>
          {/* <!--------------------------------------- row-12 -----------------------------------------> */}
          <div className="row justify-content-lg-center">
            <div
              className="col-9 col-md-8 col-lg-5 order-2 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="text-lg-end">
                <h1 className="sub-heading">Tier 12: $200</h1>
                <h4 className="small-heading mb-3 pb-3">5729/10 000</h4>
              </div>
            </div>
            <div className=" col-2 d-flex flex-column align-items-center">
              <img className="roadmap-star-img" src={StarImg} alt="Star-img" />
              <div className="roadmap-line"></div>
            </div>
            <div
              className="col-5 d-none d-lg-block"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- ================================== WATCH-LIST ROADMAP-SECTION-ENDS ================================ --> */}
    </div>
  );
};

export default Roadmapwatchlist;
