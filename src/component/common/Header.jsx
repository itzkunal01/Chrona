import React from "react";
import { useScreenFixedProvider } from "../context/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import ChronoLogo from "../../assets/images/svg/chrono-logo.svg";
import MyChronoLogo from "../../assets/images/png/my-chrono-logo.png";

const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 1199.9 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 });
    return isDesktop ? children : null;
  };
  const siderBar = () => {
    setShowOverlay(!showOverlay);
    if (showOverlay === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper py-3">
        <Desktop>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <img className="nav-logo" src={ChronoLogo} alt="logo" />

              <ul className="nav-items-list list-unstyled align-items-center d-flex m-auto">
                <li className="n-item pe-3 nav-links-active">
                  <a
                    href="#home"
                    className="nav-links middle text-decoration-none"
                  >
                    Home
                  </a>
                </li>
                <li className="n-item px-xl-4 px-2 px-xxl-2">
                  <a
                    className="nav-links middle text-decoration-none opacity-07"
                    href="#about"
                  >
                    About us
                  </a>
                </li>
                <li className="n-item px-xl-3 px-2">
                  <a
                    href="#how-to"
                    className="nav-links middle text-decoration-none opacity-07"
                  >
                    How to works
                  </a>
                </li>
                <li className="n-item px-xl-3 px-2">
                  <a
                    href="#enter"
                    className="nav-links middle text-decoration-none opacity-07"
                  >
                    Enter raffle
                  </a>
                </li>

                <li className="n-item px-xl-3 px-2">
                  <a
                    href="#watch-list"
                    className="nav-links middle text-decoration-none opacity-07"
                  >
                    Watch list
                  </a>
                </li>
                <li className="n-item px-xl-3 px-2">
                  <a
                    href="#team"
                    className="nav-links middle text-decoration-none opacity-07"
                  >
                    Team
                  </a>
                </li>
                <li className="n-item px-xl-3 px-2">
                  <a
                    href="#faq"
                    className="nav-links middle text-decoration-none opacity-07"
                  >
                    FAQs
                  </a>
                </li>
              </ul>

              <button class="common-btn border-0 py-3 wallet-btn text-white d-flex align-items-center d-none d-md-block">
                Connect Wallet
              </button>
            </div>
          </div>
        </Desktop>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column text-center ">
                <ul className="p-0">
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#home"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#about"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        About us
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-1 mt-sm-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#how-to"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        How to works
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-1 mt-sm-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#enter"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Enter raffle
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-1 mt-sm-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#watch-list"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Watch list
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-1 mt-sm-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#team"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Team
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-1 mt-sm-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#faq"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        FAQs
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <nav className="navbar h-86 navbar-expand-lg navbar-light px-3 p-sm-3 w-100">
              <div className="d-flex justify-content-between w-100 align-items-center">
                <img
                  className="my-logo d-none d-sm-block"
                  src={MyChronoLogo}
                  alt="logo"
                />

                <button class="common-btn border-0 py-2 py-sm-3 wallet-btn text-white d-flex align-items-center d-xl-none">
                  Connect Wallet
                </button>

                <div
                  className={`${
                    showOverlay ? "animate" : ""
                  } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-xl-none`}
                  onClick={() => siderBar()}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </nav>
          </div>
        </BeforeDesktop>
      </section>
    </>
  );
};
export default Header;
