import logo from '../assets/icons/icon-shaman.png';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
    <footer className="bg-main-bg rounded-t-lg shadow mt-auto pt-[160px]">
        <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-32" alt="Flowbite Logo" />
                    <span className="self-center text-2xl whitespace-nowrap text-main-text font-light">TheShamanAsher</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6 text-main-text font-light">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline me-4 md:me-6 text-main-text font-light">About</a>
                    </li>
                    {/* <li>
                        <a href="/core-energetics" className="hover:underline me-4 md:me-6 text-main-text font-light">Core Energetics</a>
                    </li> */}
                    <li>
                        <a href="/services" className="hover:underline me-4 md:me-6 text-main-text font-light">Services</a>
                    </li>
                    <li>
                        <a href="/blog" className="hover:underline me-4 md:me-6 text-main-text font-light">Blog</a>
                    </li>
                    <li>
                        <a href="/testimonials" className="hover:underline me-4 md:me-6 text-main-text font-light">Testimonials</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline text-main-text font-light">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center  my-32">© {currentYear}. All Rights Reserved.</span>
        </div>
    </footer>
    )
}

export default Footer