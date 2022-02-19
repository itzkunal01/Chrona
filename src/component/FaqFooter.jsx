import React from "react";
import FaqLeftsideImg from ".././assets/images/png/FAQs-left-side-img.png";
import FooterLogoChrono from ".././assets/images/png/footer-logo-chrono.png";
import TwiiterIcon from ".././assets/images/svg/twitter-icon.svg";
import DiscordIcon from ".././assets/images/svg/discord-icon.svg";

const FaqFooter = () => {
  return (
    <div>
      {/* //   <!-- ================================== FAQ-SECTION-STARTS ============================================== --> */}
      <section id="faq" className="position-relative mt-lg-5">
        <div className="position-absolute side-text-4">
          <img
            className="w-100 d-none d-md-block"
            src={FaqLeftsideImg}
            alt="FAQs-left-side-img"
          />
        </div>

        <div className="container pb-4 py-sm-5 mt-lg-5">
          {/* <!-- row-1 --> */}
          <div className="row faq-border mt-4 mt-sm-5">
            <div className="col-12 z-index-1">
              <h1 className="heading mb-4 my-linear-gradient">FAQs</h1>
            </div>
          </div>
          {/* <!-- row-2 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  Who can we talk to about collabs?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                The CHRONO team always keeps an open mind for collaborations,
                brainstorming and connecting. If you’d like to reach out, drop
                us a line: hi@chrono.io
              </p>
            </div>
          </div>
          {/* <!-- row-3 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  What is a fair drop raffle?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                At CHRONO, we want to give each member of our community an equal
                chance at becoming a part of the CHRONO family by using a fair
                raffle for all NFTs, we’re able to keep out the bots and gas
                wars.
              </p>
            </div>
          </div>
          {/* <!-- row-4 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  Can we sell our NFTs instead of burning them?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                Yes, sales can be made on OpenSea. We do, however, encourage
                HODLing your CHRONO NFT for as long as possible to maximize the
                benefit of the deflationary mechanisms we have built in.
              </p>
            </div>
          </div>
          {/* <!-- row-5 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  Do we really get high end watches?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                Short answer: yes. We are, first and foremost, a premium watch
                curator and reseller based out of Dubai. All watches won are
                certified and verified factory original pieces fit for resale
                A+.
              </p>
            </div>
          </div>
          {/* <!-- row-6 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  What about the ultra-rare watches, are they new?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                As watch collectors, we understand some pieces have been
                discontinued. 99% of our collection is brand new from the
                factory and these extra rare pieces will all be in showroom
                condition with original boxes and papers. All of our watches are
                certified and verified original.
              </p>
            </div>
          </div>
          {/* <!-- row-7 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  What is the mint price?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                The mint price will be 0.7 eth.
              </p>
            </div>
          </div>
          {/* <!-- row-8 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  How will we get our watches?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                The top 100 rarest watches will be hand-delivered by a member of
                our team personally, anywhere in the world. The rest of the
                collection will be handled by our trusted delivery partners.
              </p>
            </div>
          </div>
          {/* <!-- row-9 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  After the burn, when do we get our watches?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                90% of our collection are in stock and will be sent out as soon
                as your NFT is burned and your details are passed on to your
                personal CHRONO agent. The remainder of the collection are the
                ultra-rare pieces, which could take a little longer to acquire
                but rest assured that our team, are experts at sourcing the
                rarest of pieces from around the globe in record time. Each burn
                will be handled by a member of our team, who will run the
                process from your burn to the receipt of your watch.
              </p>
            </div>
          </div>
          {/* <!-- row-10 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  What if my watch can’t be sourced?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                On the off chance that we aren’t able to source the exact watch
                revealed upon your burn, we will provide you with options -
                either we can source a watch in the same price bracket or we can
                send the equivalent in Ethereum to the NFT holder. Your
                allocated care agent will handle this process with you.
              </p>
            </div>
          </div>
          {/* <!-- row-11 --> */}
          <div className="row faq-border  ">
            <div className="col-lg-6 z-index-1">
              <ul className="ps-4">
                <li className="small-heading my-3 my-xl-4">
                  What if all the rare watches get claimed before we burn?
                </li>
              </ul>
            </div>
            <div className="col-lg-6 z-index-1">
              <p className="para text-black my-lg-4">
                We have anticipated the possibility of this, which is why we
                have allocated a portion of the royalties to buyintg more rare
                watches over time. This means that the longer you hold your
                CHRONO NFT, the higher your chances of revealing an ultra-rare
                watch upon burning.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-xl-2 text-center">
            <a href="#">
              <img
                className="cursor-pointer  w-100"
                src={FooterLogoChrono}
                alt="footer-logo-chrono"
              />
            </a>
          </div>
        </div>
        <div className="text-center pt-3">
          <div className="d-flex align-items-center justify-content-center mt-4 mt-sm-5 pb-3 footer-svgs faq-border">
            <a className="mb-3" href="https://www.twitter.com/" target="_blank">
              <img src={TwiiterIcon} alt="twitter-icon" />
            </a>
            <a
              className="mb-3 ms-2 ms-sm-4"
              href="https://www.discord.com/"
              target="_blank"
            >
              <img src={DiscordIcon} alt="discord-icon" />
            </a>
          </div>

          <p className="para text-black my-3">© Chrono 2022 </p>
        </div>
      </section>
      ;
      {/* <!-- ================================== FAQ-SECTION-ENDS ================================================ --> */}
    </div>
  );
};

export default FaqFooter;
