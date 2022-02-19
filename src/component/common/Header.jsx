// import React from "react";
// import Logo from "../../assets/images/svg/chrono-logo.svg";

// const Header = () => {
//   return (
//     <div>
//       {/* <!-------------- NAVBAR AND HERO SECTION STARTS ---------------------> */}
//       <section className="navbar-section py-3">
//         <main className="main-top-section dragon_bg_img position-relative z-index-10">
//           {/* <!-- NAVBAR START -----------> */}
//           <section className="shadow-white   w-100 navabar-fixed">
//             <nav className="navbar-wrapper d-flex bg-nav py-2 py-lg-2">
//               <div id="overlay">
//                 <div className="container navbar-container">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="left d-flex justify-content-center text-center flex-column align-items-center">
//                         <ul className="list-unstyled pt-5">
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-1">
//                               <a
//                                 href="#home"
//                                 className="overlay-links text-white "
//                               >
//                                 Home
//                               </a>
//                             </span>
//                           </li>
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-2">
//                               <a
//                                 href="#project"
//                                 className="overlay-links text-white"
//                               >
//                                 About us
//                               </a>
//                             </span>
//                           </li>
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-3">
//                               <a
//                                 href="#utilities"
//                                 className="overlay-links text-white"
//                               >
//                                 How to works
//                               </a>
//                             </span>
//                           </li>
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-4">
//                               <a
//                                 href="#roadmap"
//                                 className="overlay-links text-white"
//                               >
//                                 Enter raffle
//                               </a>
//                             </span>
//                           </li>

//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-5">
//                               <a
//                                 href="#team"
//                                 className="overlay-links text-white "
//                               >
//                                 Watch list
//                               </a>
//                             </span>
//                           </li>
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-6">
//                               <a
//                                 href="#faq"
//                                 className="overlay-links text-white "
//                               >
//                                 Team
//                               </a>
//                             </span>
//                           </li>
//                           <li className="py-lg-3 py-2 overflow-hidden">
//                             <span className="d-inline-block section-7">
//                               <a
//                                 href="#faq"
//                                 className="overlay-links text-white "
//                               >
//                                 FAQs
//                               </a>
//                             </span>
//                           </li>

//                           <li className="py-lg-3 pb-4 overflow-hidden mt-3">
//                             <span className="d-inline-block section-8 d-md-none">
//                               <button
//                                 className="common-btn border-0 py-2 py-sm-1 px-3  text-white
//                                                         align-items-center"
//                               >
//                                 Connect Wallet
//                               </button>
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="container container-lg-fluid navbar-container">
//                 <div className="d-flex justify-content-between align-items-center text-nowrap">
//                   <a href="#">
//                     <img className="nav-logo" src={Logo} alt="logo" />
//                   </a>
//                   <div className="nav-items-wrap d-none d-xl-block d-flex">
//                     <ul className="nav-items-list list-unstyled align-items-center d-flex m-auto">
//                       <li className="n-item pe-3 nav-links-active">
//                         <a href="#home" className="nav-links ">
//                           Home
//                         </a>
//                       </li>
//                       <li className="n-item px-xl-4 px-2 px-xxl-2">
//                         <a className="nav-links  opacity-07" href="#about">
//                           About us
//                         </a>
//                       </li>
//                       <li className="n-item px-xl-3 px-2">
//                         <a href="#how-to" className="nav-links  opacity-07">
//                           How to works
//                         </a>
//                       </li>
//                       <li className="n-item px-xl-3 px-2">
//                         <a href="#enter" className="nav-links  opacity-07">
//                           Enter raffle
//                         </a>
//                       </li>

//                       <li className="n-item px-xl-3 px-2">
//                         <a href="#watch-list" className="nav-links  opacity-07">
//                           Watch list
//                         </a>
//                       </li>

//                       <li className="n-item px-xl-3 px-2">
//                         <a href="#team" className="nav-links  opacity-07">
//                           Team
//                         </a>
//                       </li>
//                       <li className="n-item px-xl-3 px-2">
//                         <a href="#faq" className="nav-links  opacity-07">
//                           FAQs
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="nav-quantum d-flex justify-content-between align-items-center">
//                     <div className="n-item px-xxl-3   d-flex align-items-center">
//                       <button className="common-btn border-0 py-3 px-32 text-white d-flex align-items-center d-none d-md-block">
//                         Connect Wallet
//                       </button>
//                     </div>

//                     {/* <!-- Toggle Button nav --> */}
//                   </div>

//                   <div
//                     id="main-menu"
//                     className="hamburger-menu d-inline-block d-xl-none"
//                   >
//                     <span className="first"></span>
//                     <span className="sec"></span>
//                     <span className="third"></span>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </section>
//           {/* //-- NAVBAR END ------------- */}
//         </main>
//       </section>
//       {/* <!-------------- NAVBAR AND HERO SECTION ENDS -----------------------> */}
//     </div>
//   );
// };
import React from "react";
import { useScreenFixedProvider } from "../context/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-center">
        <Desktop>
          <div className="d-flex align-items-center justify-content-center">
            <h1>Logo</h1>
            <li className="mx-3 nav-list-items p-2 d-inline-block"></li>
            <li className="mx-3 p-2 d-inline-block">
              <h1>Logo</h1>
            </li>
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
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a className="nav-link fs-2 text-white text-decoration-none">
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#story"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Story
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#upgrader"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Upgrader
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Roadmap
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
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
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
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
                </ul>
              </div>
            </div>
          </div>

          <nav className="navbar h-86 navbar-expand-lg navbar-light p-3 w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h1>Logo</h1>

              <div
                className={`${
                  showOverlay ? "animate" : ""
                } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                onClick={() => setShowOverlay(!showOverlay)}
              >
                <span className="first d-inline-block"></span>
                <span className="second d-inline-block"></span>
                <span className="third d-inline-block"></span>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
      </section>
    </>
  );
};

export default Header;

// export default Header;
