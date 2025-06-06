import { useEffect } from "react";
// local imports
import iconHamburger from "../assets/icons/icon-hamburger.svg";
import iconShaman from "../assets/icons/icon-shaman.png";
import iconClose from "../assets/icons/icon-close.svg";
import "../ux/NavUnderline.css"; // Contains both nav-underline & submenu-underline styles

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Function to handle toggling of the menu
    const toggleMenu = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => {
        menu.classList.toggle("hidden");
      });
    };

    // Select burger buttons and attach click event listeners
    const burgerButtons = document.querySelectorAll(".navbar-burger");
    burgerButtons.forEach((button) => {
      button.addEventListener("click", toggleMenu);
    });

    // Select close buttons and attach click event listeners
    const closeButtons = document.querySelectorAll(".navbar-close");
    closeButtons.forEach((button) => {
      button.addEventListener("click", toggleMenu);
    });

    // Select backdrop and attach click event listeners
    const backdrop = document.querySelectorAll(".navbar-backdrop");
    backdrop.forEach((backdropElement) => {
      backdropElement.addEventListener("click", toggleMenu);
    });

    // Cleanup function to remove event listeners
    return () => {
      burgerButtons.forEach((button) => {
        button.removeEventListener("click", toggleMenu);
      });
      closeButtons.forEach((button) => {
        button.removeEventListener("click", toggleMenu);
      });
      backdrop.forEach((backdropElement) => {
        backdropElement.removeEventListener("click", toggleMenu);
      });
    };
  }, []);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-main-bg">
        <a className="text-3xl font-bold leading-none" href="/">
          <img src={iconShaman} alt="logo" className="w-32" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <img src={iconHamburger} alt="hamburger" className="w-32" />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="nav-underline text-sm text-white px-2 py-1" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="nav-underline text-sm text-white px-2 py-1"
              href="/about"
            >
              About
            </a>
          </li>
          <li className="relative group">
            <a
              href="/services"
              className="nav-underline text-sm text-white px-2 py-1 cursor-pointer"
            >
              Services
            </a>
            <ul
              className={`
                submenu absolute left-0 top-full w-[300px]
                bg-main-bg shadow-lg rounded py-1
                border-l border-l-text-main border-b border-b-text-main border-r border-r-text-main z-30
                opacity-0 invisible
                group-hover:visible group-hover:opacity-100
                transition-all duration-300 ease-in-out
                translate-y-4 group-hover:translate-y-0
              `}
            >
              <li>
                <a
                  className="submenu-underline block px-4 py-2 text-sm text-white relative transition-colors duration-200"
                  href="/services/chakra-alignment"
                >
                  Chakra Alignment
                </a>
              </li>
              <li>
                <a
                  className="submenu-underline block px-4 py-2 text-sm text-white relative transition-colors duration-200"
                  href="/services/shaman-blessed-moon-water"
                >
                  Shaman Blessed Moon Water
                </a>
              </li>
              <li>
                <a
                  className="submenu-underline block px-4 py-2 text-sm text-white relative transition-colors duration-200"
                  href="/services/cleansing-and-protection"
                >
                  Smudging - Cleansing Renewing Protecting
                </a>
              </li>
              <li>
                <a
                  className="submenu-underline block px-4 py-2 text-sm text-white relative transition-colors duration-200"
                  href="/services/dream-interpretation/"
                >
                  Dream Interpretation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="nav-underline text-sm text-white px-2 py-1"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="nav-underline text-sm text-white px-2 py-1"
              href="/testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="nav-underline text-sm text-white px-2 py-1"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-main-bg border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img src={iconShaman} alt="logo" className="w-32" />
            </a>
            <button className="navbar-close">
              <img src={iconClose} alt="close" className="w-32" />
            </button>
          </div>
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/testimonials"
              >
                Testimonials
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-main-text">
              <span>Copyright © {currentYear}</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
