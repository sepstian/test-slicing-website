import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-16 flex items-center px-6 z-50">
      <div
        className={`flex items-center w-full max-w-7xl mx-auto transition-all duration-300 ${
          isOpen
            ? "justify-between"
            : "xl:justify-normal xl:gap-5 justify-between"
        }`}
      >
        <h1 className="text-xl font-bold">TNT</h1>

        <ul className="hidden xl:flex space-x-6">
          <li>
            <button
              onClick={handleScrollToTop}
              className="cursor-pointer hover:text-blue-500"
            >
              About
            </button>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="xl:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul
        className={`absolute top-16 right-0 bg-white w-48 shadow-lg rounded-lg p-4 space-y-4 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <li>
          <button
            onClick={handleScrollToTop}
            className="block cursor-pointer hover:text-blue-500"
          >
            About
          </button>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
