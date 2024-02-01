import { useEffect, useState } from "react";
import { BrandButton, SupportUs, Default } from ".";
import { Link } from "react-router-dom";

export const Header = (isFixed, setIsFixed) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Header Current small screen tabs
  const [currentTab, setCurrentTab] = useState("default");

  const handleMenu = () => {
    const headerLinks = document.querySelector(".header-links");
    headerLinks?.classList.toggle("open");

    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerLinks?.classList.remove("open");
        setMenuOpen(false);
        setCurrentTab("default");
      });
    });
    setMenuOpen((prev) => !prev);
    setCurrentTab("default");
  };

  const preventScroll = () => {
    if (menuOpen) {
      document.body.classList.add("is-side-menu-open");
    } else {
      document.body.classList.remove("is-side-menu-open");
    }
  };

  useEffect(() => {
    preventScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsFixed]);

  // support dropdown state
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div
      className={`z-30 bg-white w-full px-12 py-6 flex justify-between items-center border-b border-gray-300  shadow-md xl:px-8 lg:px-4 md:py-4 ${
        isFixed
          ? "fixed top-0 left-0 transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
      <Link to="/support-us/donate" className="hidden md:block">
        <BrandButton
          className="hidden w-52 py-3 xl:w-44 xl:py-2.5 lg:w-40 lg:text-sm md:w-max md:px-4 md:py-2 md:block"
          onClick={undefined}
          label="Donate"
        />
      </Link>
      <div>
        <Link
          to="/"
          // scroll to top
          onClick={() => {
            setSupportOpen(false);
            window.scrollTo(0, 0);
          }}
          className="font-bold text-3xl text-orange-800 xl:text-2xl lg:text-xl"
        >
          CVC Charity
        </Link>
      </div>
      <ul className="flex gap-6 xl:gap-5 lg:gap-3.5 md:hidden">
        <Link
          to={"/our-work-and-impact"}
          className="text-[#000000] font-semibold text-base capitalize xl:text-sm lg:text-xs hover:text-orange-800 transition duration-500 ease-in-out"
          onClick={() => {
            setSupportOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Our work and impact
        </Link>
        <li className="text-[#000000] font-semibold text-base capitalize xl:text-sm lg:text-xs">
          How we can help
        </li>
        {/* Support us drop-down */}
        <li className="">
          <button
            className="flex gap-1 items-center text-[#000000] font-semibold text-base capitalize xl:text-sm lg:text-xs hover:text-orange-800 transition duration-500 ease-in-out"
            onClick={() => setSupportOpen((prev) => !prev)}
          >
            <p>Support us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#7c2d12"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`absolute top-[99px] left-0 w-full h-[calc(100vh-100px)] xl:top-[95px] lg:top-[91px]   ${
              supportOpen
                ? "block transition duration-500 ease-in-out"
                : "hidden"
            }`}
            onClick={() => setSupportOpen(false)}
          >
            <div
              className="bg-white z-10 py-20 px-24 flex items-start gap-44 xl:px-9 xl:gap-36 lg:py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/support-us"
                onClick={() => {
                  setSupportOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="group flex gap-1.5 items-center text-[#000000] transition duration-500 ease-in-out hover:text-orange-700"
              >
                <h4 className="font-bold text-4xl lg:text-2xl lg:w-max">
                  Support us
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="w-6 h-6 pt-0.5 transition duration-100 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              {/* List of support ways e.g donation, volunteer e.t.c */}
              <div className="grid grid-cols-3 grid-flow-row gap-y-10 gap-x-16 xl:gap-y-6 xl:gap-x-8 lg:flex lg:flex-wrap">
                <Link
                  to="/support-us/donate"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Make a donation
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
                <Link
                  to="/support-us/volunteer"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Volunteer with us
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
                <Link
                  to="/support-us/fundraise"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Fundraise
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
                <Link
                  to="/support-us/partner-with-us"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Patner with us
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
                {/* <Link
                  to="/support-us/trusts"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Trusts
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link> */}
                <Link
                  to="/support-us/donate-items"
                  onClick={() => {
                    setSupportOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex gap-1 items-center transition duration-500 ease-in-out text-orange-700"
                >
                  <p className="text-[#000000] text-lg font-semibold group-hover:text-orange-700 lg:text-base">
                    Donate Items
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="opacity-0 group-hover:opacity-100 w-4 h-4 pt-0.5 transition duration-100 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </li>
        <Link
          to="/about"
          onClick={() => {
            setSupportOpen(false);
            window.scrollTo(0, 0);
          }}
          className="text-[#000000] font-semibold text-base capitalize xl:text-sm lg:text-xs hover:text-orange-800 transition duration-500 ease-in-out"
        >
          About us
        </Link>
      </ul>
      <div className="flex gap-10 items-center">
        <Link to="/support-us/donate">
          <BrandButton
            className="w-52 py-3 xl:w-44 xl:py-2.5 lg:w-40 lg:text-sm md:w-max md:px-4 md:py-2 md:hidden"
            onClick={undefined}
            label="Donate Now"
          />
        </Link>
        <button
          id="menu-btn"
          onClick={handleMenu}
          className={`hamburger  ${
            menuOpen ? "open" : ""
          } hidden md:block focus:outline-none z-30 relative h-5 w-6`}
        >
          <span className="harburger-top bg-orange-800 transition duration-500 ease-in-out  "></span>
          <span className="harburger-middle bg-orange-800 transition duration-500 ease-in-out  "></span>
          <span className="harburger-bottom bg-orange-800 transition duration-500 ease-in-out  "></span>
        </button>
      </div>
      <div
        className="header-links z-10 hidden md:block"
        style={{
          backgroundColor: menuOpen ? "rgba(0, 0, 0, 0.4)" : "transparent",
        }}
      >
        {currentTab === "default" ? (
          <Default handleMenu={handleMenu} setCurrentTab={setCurrentTab} />
        ) : currentTab === "support" ? (
          <SupportUs handleMenu={handleMenu} setCurrentTab={setCurrentTab} />
        ) : null}
      </div>
    </div>
  );
};
