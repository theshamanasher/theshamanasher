import logo from "../assets/icons/icon-shaman.png";
import scrollToTop from "../utils/ScrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-main-bg rounded-t-lg shadow mt-auto pt-64 sm:pt-[160px]">
      <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <button
            type="button"
            aria-label="Scroll to top"
            className="group flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse focus:outline-none"
            onClick={() => scrollToTop("smooth")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              className="h-32 opacity-100 transition duration-300 ease-in-out group-hover:opacity-50"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl whitespace-nowrap text-white font-light opacity-100 transition-opacity duration-300 group-hover:opacity-50">
              TheShamanAsher
            </span>
          </button>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a
                href="/"
                className="nav-underline me-4 md:me-6 text-main-text font-light"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="nav-underline me-4 md:me-6 text-main-text font-light"
              >
                About
              </a>
            </li>
            {/* <li>
                        <a href="/core-energetics" className="nav-underline me-4 md:me-6 text-main-text font-light">Core Energetics</a>
                    </li> */}
            <li>
              <a
                href="/services"
                className="nav-underline me-4 md:me-6 text-main-text font-light"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="nav-underline me-4 md:me-6 text-main-text font-light"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                className="nav-underline me-4 md:me-6 text-main-text font-light"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="nav-underline text-main-text font-light"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center  my-32">
          © {currentYear}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
