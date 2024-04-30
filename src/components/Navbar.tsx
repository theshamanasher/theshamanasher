import { useEffect } from 'react';
//local imports
import iconHamburger from '../assets/icons/icon-hamburger.svg'
import iconShaman from '../assets/icons/icon-shaman.png'
import iconClose from '../assets/icons/icon-close.svg'


const Navbar = () => {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // Function to handle toggling of the menu
        const toggleMenu = () => {
            const menus = document.querySelectorAll('.navbar-menu');
            menus.forEach(menu => {
                menu.classList.toggle('hidden');
            });
        };

        // Select burger buttons and attach click event listeners
        const burgerButtons = document.querySelectorAll('.navbar-burger');
        burgerButtons.forEach(button => {
            button.addEventListener('click', toggleMenu);
        });

        // Select close buttons and attach click event listeners
        const closeButtons = document.querySelectorAll('.navbar-close');
        closeButtons.forEach(button => {
            button.addEventListener('click', toggleMenu);
        });

        // Select backdrop and attach click event listeners
        const backdrop = document.querySelectorAll('.navbar-backdrop');
        backdrop.forEach(backdropElement => {
            backdropElement.addEventListener('click', toggleMenu);
        });

        // Cleanup function to remove event listeners
        return () => {
            burgerButtons.forEach(button => {
                button.removeEventListener('click', toggleMenu);
            });
            closeButtons.forEach(button => {
                button.removeEventListener('click', toggleMenu);
            });
            backdrop.forEach(backdropElement => {
                backdropElement.removeEventListener('click', toggleMenu);
            });
        };
    }, []);

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-main-bg">
                <a className="text-3xl font-bold leading-none" href="/">
                    <img src={iconShaman} alt="logo" className='w-32' />
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <img src={iconHamburger} alt="hamburger" className='w-32' />
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li><a className="text-sm text-main-text hover:underline hover:text-gray-500" href="/">Home</a></li>
                    <li><a className="text-sm text-main-text hover:underline hover:text-gray-500" href="/about">About</a></li>
                    <li className="relative group">
                        <a href="/services" className="text-sm text-main-text hover:underline hover:text-gray-500 cursor-pointer">Services</a>
                        <ul className="absolute hidden group-hover:block bg-main-bg shadow-lg rounded py-1 top-full left-0 w-[200px] border-l border-l-text-main border-b border-b-text-main border-r border-r-text-main">
                            <li><a className="block px-4 py-2 text-sm text-main-text hover:underline hover:text-gray-500" href="/service1">Service 1</a></li>
                            <li><a className="block px-4 py-2 text-sm text-main-text hover:underline hover:text-gray-500" href="/service2">Service 2</a></li>
                            <li><a className="block px-4 py-2 text-sm text-main-text hover:underline hover:text-gray-500" href="/service3">Service 3</a></li>
                        </ul>
                    </li>
                    <li><a className="text-sm text-main-text hover:underline hover:text-gray-500" href="/testimonials">Testimonials</a></li>
                    <li><a className="text-sm text-main-text hover:underline hover:text-gray-500" href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-main-bg border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <img src={iconShaman} alt="logo" className='w-32' />
                        </a>
                        <button className="navbar-close">
                            <img src={iconClose} alt="close" className='w-32' />
                        </button>
                    </div>
                    <ul>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded" href="/">Home</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded" href="/about">About Us</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded" href="/services">Services</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded" href="/pricing">Pricing</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold text-main-text hover:bg-main-text hover:text-main-bg rounded" href="/contact">Contact</a>
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
    )
}

export default Navbar;
