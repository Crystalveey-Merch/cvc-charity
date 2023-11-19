import { useEffect, useState } from "react";
import { BrandButton } from ".";

export const Header = (isFixed, setIsFixed) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const headerLinks = document.querySelector(".header-links");
    headerLinks?.classList.toggle("open");

    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerLinks?.classList.remove("open");
        setMenuOpen(false);
      });
    });
    setMenuOpen((prev) => !prev);
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

  return (
    <div
      className={`z-20 bg-white w-full px-12 py-6 flex justify-between items-center shadow-md xl:px-8 lg:px-4 md:py-4 ${
        isFixed
          ? "fixed top-0 left-0 transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
      <BrandButton
        className="hidden w-52 py-3 xl:w-44 xl:py-2.5 lg:w-40 lg:text-sm md:w-max md:px-4 md:py-2 md:block"
        onClick={undefined}
        label="Donate"
      />
      <div>
        <h3 className="font-bold text-3xl text-orange-800 xl:text-2xl lg:text-xl">
          CVC Charity
        </h3>
      </div>
      <ul className="flex gap-6 xl:gap-5 lg:gap-3.5 md:hidden">
        <li className="text-orange-900 font-semibold text-base capitalize xl:text-sm lg:text-xs">
          Our work and impact
        </li>
        <li className="text-orange-900 font-semibold text-base capitalize xl:text-sm lg:text-xs">
          How we can help
        </li>
        <li className="text-orange-900 font-semibold text-base capitalize xl:text-sm lg:text-xs">
          Support us
        </li>
        <li className="text-orange-900 font-semibold text-base capitalize xl:text-sm lg:text-xs">
          about us
        </li>
      </ul>
      <div className="flex gap-10 items-center">
        <BrandButton
          className="w-52 py-3 xl:w-44 xl:py-2.5 lg:w-40 lg:text-sm md:w-max md:px-4 md:py-2 md:hidden"
          onClick={undefined}
          label="Donate Now"
        />
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
    </div>
  );
};
