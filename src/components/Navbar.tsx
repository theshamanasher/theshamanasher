
const Navbar = () => {
  return (
    <>
        <nav className=" bg-main-bg border-gray-200 fixed top-0 w-full z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl whitespace-nowrap text-main-text">TheShamanAsher</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="tel:7039738382" className="text-sm  text-main-text hover:underline">(703) 973-8382</a>
                    {/* <a href="#" className="text-sm hover:underline">Login</a> */}
                </div>
            </div>
        </nav>
        <nav className="bg-main-bg fixed top-[84px]  sm:top-64 w-full z-10 border-t border-t-main-text ">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="/" className="text-main-text hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-main-text hover:underline">About</a>
                        </li>
                        {/* <li>
                            <a href="/core-energetics" className="text-main-text hover:underline">Core Energetics</a>
                        </li> */}
                        <li>
                            <a href="/services" className="text-main-text hover:underline">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-main-text hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
